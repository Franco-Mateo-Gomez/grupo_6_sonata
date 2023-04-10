const { body } = require("express-validator");
const fs = require("fs")
const path = require("path");
const bcrypt = require("bcryptjs");

/*Import JSON's*/
const datausersJSON = path.join(__dirname, '../model/data/users.json');
const datausers = JSON.parse(fs.readFileSync(datausersJSON, 'utf-8'));

const validations=[
    /*USER VALIDATION*/
    body("user_email").notEmpty().withMessage("Debes escribir el nombre")
    
    /*Second stage => Find user in DATABASE*/
    .custom((value, { req }) => {

        const emailUser = datausers.find(user => user.email == value);
        const nameUser = datausers.find(user => user.nombreArtista == value);

        /* Use email or name from user*/
        const globalUser = emailUser || nameUser    

        if (!globalUser) {
            throw new Error("El usuario ingresado no existe");
        }
        /*Save User if exists*/
        req.user = globalUser;
        return true;
      }),
      
    /*PASSWORD VALIDATION*/
    body("user_password").notEmpty().withMessage("Debes escribir la contraseña")
    .custom((value,{req}) =>{
        if(!req.user || !req.user.clave){
            throw new Error("La contraseña es incorrecta");
        }
        const checkPassword = bcrypt.compareSync(value,req.user.clave);
        if(!checkPassword){
            throw new Error("La contraseña es incorrecta");
        }
        return true
    })
]

module.exports = validations;