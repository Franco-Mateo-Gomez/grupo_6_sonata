const {check} = require("express-validator");
const bcrypt = require("bcryptjs");

//Validaciones de los campos del formulario de compra
let validationsCompras = [
    check("full_name")
        .notEmpty().withMessage("Tienes Tienes que agregar un nombre y apellido."),
    check("email")
        .notEmpty().withMessage("Tienes que agregar un email.")
        .isEmail().withMessage('El email no es valido'),    
    check("card_number")
        .notEmpty().withMessage("Ingrese el número de la tarjeta.")
        .isLength({max:16}).withMessage("Debe contener 16 digitos."),
    check("card_date")
        .notEmpty().withMessage("Ingrese la fecha de expiración."),
    check("card_cvc")
        .notEmpty().withMessage("Ingrese el codigo.")
        .isLength({max:3}).withMessage("Deben contener 3 digitos."),
];
module.exports = validationsCompras;