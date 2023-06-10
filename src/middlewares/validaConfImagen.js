const { check } = require("express-validator");

let validationsImagen = [
    check("user_image")
        .notEmpty().withMessage('Ingrese una imagen')
]
module.exports = validationsImagen;