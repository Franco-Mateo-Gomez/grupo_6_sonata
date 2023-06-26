const path = require('path');
const express = require('express');
const router = express.Router();
const multer = require("multer");

const mainController = require("../controllers/mainControllers.js");
const userController = require("../controllers/userController");

const validaRegistro = require("../middlewares/validaRegister");
const validarUsuario = require("../middlewares/validaLogin");

let db = require('../database/models');
const { route } = require('express/lib/application.js');

/*Multer config*/
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../../public/images/users"));
    },

    //Definimos el nombre del archivo
    filename: async function (req, file, cb) {

        let userId;

        // Consulta a la BD el usuario
        const usuarioDB = await db.Users.findByPk(req.params.id)
        
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


router.get("/",mainController.front);

router.get("/general",userController.generalView);

router.get("/browser",mainController.browser);

/*Login Path*/
router.get("/login",userController.loginView);
router.post("/login",validarUsuario,userController.loginUser);

/*Register Path*/
router.get("/register",userController.registerView);
router.post("/register",upload.single("user_image"),validaRegistro,userController.registerUser);

/*------------*/

router.get("/about",mainController.aboutUs);

// router.get("/faq",mainController.faq);

/*Logout Path*/
router.get("/logout",userController.logout);

router.get("/consultas", mainController.consultas);

module.exports=router;