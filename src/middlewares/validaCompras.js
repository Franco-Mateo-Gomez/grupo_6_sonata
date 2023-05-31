const {check} = require("express-validator");
const bcrypt = require("bcryptjs");

//Validaciones de los campos del formulario de compra
let validationsCompras = [
    check("full_name")
        .notEmpty().withMessage("Tienes que ingresar tu nombre completo"),
    check("email")
        .notEmpty().withMessage("Tienes que ingresar tu correo electronico")
        .isEmail().withMessage('El email no es valido'),    
    check("select-checkout-country")
        .notEmpty().withMessage("Tienes que seleccionar un pais"),
    check("city")
        .notEmpty().withMessage("Tienes que ingresar una ciudad"),
    check("postal")
        .notEmpty().withMessage("Tienes que agregar un codigo postal"),
    check("address")
        .notEmpty().withMessage("Tienes que agregar tu dirección"),
   

];
module.exports = validationsCompras;
