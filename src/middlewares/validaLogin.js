const { body } = require("express-validator");
const bcrypt = require("bcryptjs");

let db = require('../database/models')


const validations=[

    /*USER VALIDATION*/
    body("user_email").notEmpty().withMessage("Debes escribir el nombre")
    
    /*Second stage --> Find user in DATABASE*/
    .custom (async(value, { req }) => {

        // Login from email or nameUser
        const emailUser = await db.Users.findOne({where:{email:value}});

        const nameUser = await db.Users.findOne({where:{userName:value}});

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
        if(!req.user || !req.user.password){
            throw new Error("La contraseña es incorrecta");
        }
        const checkPassword = bcrypt.compareSync(value,req.user.password);
        if(!checkPassword){
            throw new Error("La contraseña es incorrecta");
        }
        return true
    })
]

module.exports = validations;