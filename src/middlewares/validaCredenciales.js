const { check } = require("express-validator");

let validationsCredenciales = [
    check("user_name")
        .notEmpty().withMessage('Tienes que agregar un nombre de usuario')
        .isLength({min:6}).withMessage("El nombre de usuario debe tener al menos 6 caracteres"),
    check("user_email")
        .notEmpty().withMessage("Tienes que ingresar tu correo electronico")
        .isEmail().withMessage("El email no es valido"),
    check("cliente_fullname")
        .notEmpty().withMessage("Tienes que ingresar tu nombre completo")
        .isLength({min: 2}).withMessage("El nombre debe contener al menos 2 caracteres"),
    ]   

    module.exports= validationsCredenciales