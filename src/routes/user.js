const express = require("express")
const path = require("path");
const multer = require("multer");

const router = express.Router();

const userController = require("../controllers/userController");
const validaConfImagen = require("../middlewares/validaConfImagen");
const validaCredenciales = require ("../middlewares/validaCredenciales");
const validaContrasenia =require ("../middlewares/validaContrasenia");
let db = require('../database/models');

/*Multer config*/
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../../public/images/users"));
    },

    //Definimos el nombre del archivo
    filename: async function (req, file, cb) {

        let userId;

        // Consulta a la BD el usuario
        const usuarioDB = await db.Users.findByPk(req.params.id);
        
        if(usuarioDB){
            userId = usuarioDB.id;
        }
        else{
            const ultimoUsuarioDB = await db.Users.max("id");
            userId = ultimoUsuarioDB + 1;
        }

        const extension = path.extname(file.originalname);
        
        cb(null, "idUser" + userId + extension);
    }
});

const upload = multer({ storage: storage });

router.get("/",userController.configView);
router.put("/", validaCredenciales,userController.processUserConfig);
router.put("/image", validaConfImagen,upload.single("user_image"),userController.processUserConfigImage);
router.put("/password", validaContrasenia,userController.processUserConfigPassword);


router.get("/ejemplo",(req,res)=>{
    db.Orders.findAll({include:[{association:"albums"},{association:"users"}]}).then(albums => res.render("ejemplo", {Orders: albums}))
});

module.exports = router; 