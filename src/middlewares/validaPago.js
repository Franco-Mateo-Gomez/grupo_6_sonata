const {check} = require("express-validator");
const bcrypt = require("bcryptjs");

let validationsPago = [
    check("card_name")
        .notEmpty().withMessage("Ingrese nombre completo del titular")
        .isLength({min:6}).withMessage("Deben ser al menos 6 caracteres"),
    check("card_number")
        .notEmpty().withMessage("Ingrese el numero de la tarjeta")
        .isLength({min:16}).withMessage("Deben ser al menos 16 digitos"),
    check("card_date")
        .notEmpty().withMessage("Ingrese la fecha de expiración")
        .isLength({max:4}).withMessage("Deben ser al menos 4 digitos"),
    check("card_cvc")
        .notEmpty().withMessage("Ingrese el codigo de seguridad de la tarjeta")

];

module.exports = validationsPago;