const { check } = require("express-validator");

const validatePasswordConfirmation = (value, { req }) => {
    if (value !== req.body.user_password) {
      throw new Error('La confirmación de la contraseña no coincide con la contraseña');
    }
    return true;
};

let validationsContra = [
    check("user_password")
        .notEmpty().withMessage('Tienes que ingresar una contraseña')
        .isLength({min:6}).withMessage("La contraseña debe contener al menos 8 coracteres"),

    check("user_passwordConfirmation")
        .notEmpty().withMessage("Tienes que confirmar tu contraseña").custom(validatePasswordConfirmation),
]
 module.exports = validationsContra;