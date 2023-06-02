const { body } = require("express-validator");
const bcrypt = require("bcryptjs");
const { Op } = require('sequelize');

let db = require('../database/models')


const validations=[

    /*USER VALIDATION*/
    body("user_email").notEmpty().withMessage("Debes escribir el nombre")
    
    /*Second stage --> Find user in DATABASE*/
    .custom (async(value, { req }) => {

        // Login from email or nameUser
        /* Use email or name from user*/
        const globalUser = await db.Users.findOne({
            where: {[Op.or]: [{ userName: value }, { email: value }]}});

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