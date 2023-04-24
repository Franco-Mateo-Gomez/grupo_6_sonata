const express = require("express")
const path = require("path");
const multer = require("multer");
const fs = require("fs")
const {body} = require("express-validator")

const router = express.Router();

const userController = require("../controllers/userController");

const validaRegistro = require("../middlewares/validaRegister");
const validarUsuario = require("../middlewares/validaLogin");

let db = require('../database/models');

/*Import JSON's*/
const datausersJSON = path.join(__dirname, '../model/data/users.json');
const datausers = JSON.parse(fs.readFileSync(datausersJSON, 'utf-8'));

/*Multer config*/
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../../public/images/users"));
    },

    //Definimos el nombre del archivo
    filename: async function (req, file, cb) {

        let userId;

        // Consulta a la BD el usuario
        const usuarioDB = await db.Users.findByPk(req.params.id) || await db.Composers.findByPk(req.params.id);
        
        if(usuarioDB){
                userId = usuarioDB.id;
            }
            else{
                const ultimoUsuarioDB = await db.Users.max("id") || await db.Composers.max("id") ;
                userId = ultimoUsuarioDB + 1;
            }

        const extension = path.extname(file.originalname);
        
        cb(null, "idUser" + userId + extension);
    }
});

const upload = multer({ storage: storage });

router.get("/general",userController.generalView);

/*Login Path*/
router.get("/login",userController.loginView);
router.post("/login",validarUsuario,userController.loginUser);

/*Register Path*/
router.get("/register",userController.registerView);
router.post("/register",upload.single("user_image"),validaRegistro,userController.registerUser);

/*------------*/

router.get("/config",userController.configView);
router.put("/config",userController.processUserConfig);
router.put("/configImage",upload.single("user_image"),userController.processUserConfigImage);
router.put("/configPassword",userController.processUserConfigPassword);

/*Logout Path*/
router.get("/logout",userController.logout);

router.get("/ejemplo",(req,res)=>{
    db.Orders.findAll({include:[{association:"albums"},{association:"users"}]}).then(albums => res.render("ejemplo", {Orders: albums}))
});

module.exports = router; 