const {check} = require ("express-validator");

let validationsProducts = [
    check("nombre_pista")
        .notEmpty().withMessage("Tienes que agregar un nombre para el album")
        .isLength({min: 5}).withMessage("El nombre debe contener al menos 5 caracteres"),
    check("list-generes")
        .notEmpty().withMessage("Tienes que seleccionar un genero"),
    check("descripcion_pista")
        .notEmpty().withMessage("Tienes que agregar una descripcion para el album")
        .isLength({min: 20}).withMessage("La descripción debe contener al menos 20 caracteres"),
    check("precio_pista")   
        .notEmpty().withMessage("Tienes que ponerle un precio"),
    check("checkout-moneda")
        .notEmpty().withMessage("Tienes que seleccionar la moneda"),

]

module.exports = validationsProducts;



