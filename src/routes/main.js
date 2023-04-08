const path = require('path');
let express = require('express');
let router = express.Router();

const mainController = require("../controllers/mainControllers.js")

const multer = require("multer");

const {body} = require('express-validator')
 
/*Multer config*/
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../../public/images/users"));
    },
    //Definimos el nombre del archivo
    filename: function (req, file, cb) {
        let nombreImg = file.fieldname + "-" + Date.now() + path.extname(file.originalname);
        cb(null, nombreImg);
    }
});

const upload = multer({ storage: storage });

//validar las contraseñas
const validatePasswordConfirmation = (value, { req }) => {
    if (value !== req.body.user_password) {
      throw new Error('La confirmación de la contraseña no coincide con la contraseña');
    }
    return true;
};

//Validaciones de los campos del formulario de registro
const validationsRegister = [
    body("client_fullname").notEmpty().withMessage("Tienes que ingresar tu nombre completo"),
    body("user_email").notEmpty().withMessage("Tienes que ingresar tu correo electronico"),
    body("user_password").notEmpty().withMessage("Tienes que ingresar una contraseña"),
    body("user_passwordConfirmation").notEmpty().withMessage("Tienes que confirmar tu contraseña").custom(validatePasswordConfirmation),
    body("user_name").notEmpty().withMessage("Tienes que ingresar un nombre de usuario"),
    
    body("user_image").custom((value, { req })=>{
        let file = req.file;
        let acceptedExtensions = ['.jpg','.png'];
        

        //Si no ahi nada en file por defecto tiene el valor undefined que negandolo es positivo
        if (!file) {
            throw new Error("Tienes que subir una imagen para tu perfil");
        }else{
            let fileExtension = path.extname(file.originalname)
            if(!acceptedExtensions.includes(fileExtension)){
                throw new Error(`Las extensiones de los archivos permitidos son ${acceptedExtensions.join(", ")}`)
            }
        }
        
        return true;
    })
];

//Validaciones de los campos del formulario de registro
const validationsLogin = [
    body("user_email").notEmpty().withMessage("Tienes que ingresar tu correo electronico"),
    body("user_password").notEmpty().withMessage("Tienes que ingresar una contraseña"),
];


/*Principal page*/
router.get("/",mainController.front);

router.get("/general",mainController.index);

router.get("/login",mainController.login);
router.post("/login",validationsLogin,mainController.processLogin);

router.get("/register",mainController.register);
router.post("/register", upload.single("user_image"), validationsRegister, mainController.processRegister)

router.get("/about",mainController.aboutUs);

router.get("/user",mainController.user);

router.get("/userConfig/:userId", mainController.userConfigView);
router.put("/userConfig/:userId", mainController.processUserConfig);

module.exports=router;
