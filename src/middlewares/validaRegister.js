const { body } = require("express-validator");
const fs = require("fs")
const path = require("path");
const bcrypt = require("bcryptjs");

/*Import JSON's*/
const datausersJSON = path.join(__dirname, '../model/data/users.json');
const datausers = JSON.parse(fs.readFileSync(datausersJSON, 'utf-8'));

//validar las contraseñas
const validatePasswordConfirmation = (value, { req }) => {
    if (value !== req.body.user_password) {
      throw new Error('La confirmación de la contraseña no coincide con la contraseña');
    }
    return true;
};

//Validaciones de los campos del formulario de registro
const validationsRegister = [
    body("client_fullname")
        .notEmpty().withMessage("Tienes que ingresar tu nombre completo")
        .isLength({min: 2}).withMessage("El nombre debe contener al menos 2 caracteres"),
    body("user_email")
        .notEmpty().withMessage("Tienes que ingresar tu correo electronico")
        .isEmail().withMessage("El email no es valido"),
    body("user_password")
        .notEmpty().withMessage("Tienes que ingresar una contraseña")
        .isLength({min: 8}).withMessage("La contraseña debe contener al menos 8 coracteres"),
    body("user_passwordConfirmation")
        .notEmpty().withMessage("Tienes que confirmar tu contraseña").custom(validatePasswordConfirmation),
    body("user_name")
        .notEmpty().withMessage("Tienes que ingresar un nombre de usuario")
        .isLength({min: 6}).withMessage("El nombre de usuario debe tener al menos 6 caracteres"),
    
    body("user_image").custom((value, { req })=>{
        let file = req.file;
        let acceptedExtensions = ['.jpg','.png','.jpeg','gif'];
        
        if(file){
            let fileExtension = path.extname(file.originalname)
            if(!acceptedExtensions.includes(fileExtension)){
                throw new Error(`Las extensiones de los archivos permitidos son ${acceptedExtensions.join(", ")}`)
            }
        }
        
        return true;
    })
];

module.exports = validationsRegister;

