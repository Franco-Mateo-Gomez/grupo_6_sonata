const path = require("path");
const fs = require("fs")
const notifier = require('node-notifier');
const bcrypt = require("bcryptjs");
const {validationResult} = require("express-validator")
const User = require(path.join(__dirname, "../functions/User.js"));

/*Import JSON's*/
const datausersJSON = path.join(__dirname, '../model/data/users.json');
const datausers = JSON.parse(fs.readFileSync(datausersJSON, 'utf-8'));

const dataProductsJSON = path.join(__dirname, '../model/data/products.json');
const dataProducts = JSON.parse(fs.readFileSync(dataProductsJSON, 'utf-8'));

/*Import Models Sequelize*/
let db = require('../database/models/index')

const userController = {
    generalView:(req,res) =>{

        res.render("index",{ albumes: dataProducts });
    },
    loginView: (req,res) =>{
        res.render("users/login");
    },

    loginUser:(req,res) =>{
        const resultValidation = validationResult(req)    

        /* Input errors check*/
        if(resultValidation.errors.length > 0){
            res.render("users/login",{errors:resultValidation.mapped(),oldData:req.body})
        }
        else{

            /*Save data in Session :) */
            req.session.user_data=req.body;
            /*------------------------*/

            if(req.body.recordame !=undefined){
                res.cookie("recordame",req.session.user_data.user_email,{maxAge:1000 *60 *30});
            }

            res.redirect("/general");
        }
    },

    registerView:(req,res) => {
        res.render("users/register");
    },
    registerUser:(req,res) =>{

        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            // Eliminar la imagen si se subió alguna
            if (req.file) {
                fs.unlinkSync(req.file.path);
            }

            return res.render("users/register", {
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        }

        let userEmailVerification = User.findByField("email", req.body.user_email);

        if (userEmailVerification) {

            // Eliminar la imagen si se subió alguna
            if (req.file) {
                fs.unlinkSync(req.file.path);
            }
            
            return res.render("users/register", {
                errors: {
                    user_email: {
                        msg: "Este email ya esta registrado. Intente con otro."
                    }
                } ,
                oldData: req.body
            })
        }
        
        let userType = req.body.typeUser;

        let defaultUserImage = req.file ? "/images/users/" + req.file.filename : "/images/users/default.png";

        if(userType == "client") {
            db.Users.create({
                fullName: req.body.client_fullname,
                userName: req.body.user_name,
                email:req.body.user_email,
                password:bcrypt.hashSync(req.body.user_password, 10),
                image: defaultUserImage
           })
        }
         else{
             db.Composers.create({
                 fullName: req.body.client_fullname,
                 userName: req.body.user_name,
                 email:req.body.user_email,
                 password:bcrypt.hashSync(req.body.user_password, 10),
                 image: defaultUserImage
             })
         }

        res.redirect("/sonata")
    },
    configView: async (req,res) => {

        const dataLogin = req.session.user_data.user_email || req.session.user_data
        
        const filtraUsuario = 
        await db.Composers.findOne({where:{userName:dataLogin}}) ||
        await db.Composers.findOne({where:{email:dataLogin}}) ||
        await db.Users.findOne({where:{userName:dataLogin}}) ||
        await db.Users.findOne({where:{email:dataLogin}});

        if(!req.session.user_data){
            res.redirect("/login");
        }
        else{
            res.render("users/userConfig",{userConfig:filtraUsuario});
        }

    },
    processUserConfig: async (req,res) => {
        
        if(!req.session.user_data){
            res.redirect("/login");
        }

        const dataLogin = req.session.user_data.user_email || req.session.user_data

        let datosModificados = req.body;

        const filtraUsuario = 
        await db.Users.findOne({where:{userName:dataLogin}}) ||
        await db.Users.findOne({where:{email:dataLogin}}) || null;

        const filtraComposer = 
        await db.Composers.findOne({where:{userName:dataLogin}}) ||
        await db.Composers.findOne({where:{email:dataLogin}}) || null;

        if (filtraUsuario != null){
            const modificaUser = await db.Users.update({
                fullName: datosModificados.client_fullname,
                userName: datosModificados.user_name,
                email: datosModificados.user_email,
             },
             {where:{id:filtraUsuario.id}}
             );

        }

        if (filtraComposer != null){
            const modificaComposer = await db.Composers.update({
                fullName: datosModificados.client_fullname,
                userName: datosModificados.user_name,
                email: datosModificados.user_email,
                password: datosModificados.user_password,
             },
             {where:{id:filtraComposer.id}}
             );
        }
        res.redirect("/config")
    },
    processUserConfigImage: async (req,res) =>{

        const dataLogin = req.session.user_data.user_email || req.session.user_data

        if(!req.session.user_data){
            res.redirect("/login");
        }

        const filtraUsuario = 
        await db.Users.findOne({where:{userName:dataLogin}}) ||
        await db.Users.findOne({where:{email:dataLogin}}) || null;

        const filtraComposer = 
        await db.Composers.findOne({where:{userName:dataLogin}}) ||
        await db.Composers.findOne({where:{email:dataLogin}}) || null;

        if (filtraUsuario != null){
            if (req.file) {
                const modificaImg = await db.Users.update({
                    image: "/images/users/" + req.file.filename,
                },
                {where:{id:filtraUsuario.id}
            });
            }
        }
        if (filtraComposer != null){
            if (req.file) {
                const modificaImg = await db.Composers.update({
                    image: "/images/users/" + req.file.filename,
                },
                {where:{id:filtraComposer.id}
            });
            }
        }
        res.redirect("/config");
    },

    processUserConfigPassword: async (req,res) => {

        const dataLogin = req.session.user_data.user_email || req.session.user_data

        if(!req.session.user_data){
            res.redirect("/login");
        }

        const filtraUsuario = 
        await db.Users.findOne({where:{userName:dataLogin}}) ||
        await db.Users.findOne({where:{email:dataLogin}}) || null;

        const filtraComposer = 
        await db.Composers.findOne({where:{userName:dataLogin}}) ||
        await db.Composers.findOne({where:{email:dataLogin}}) || null;


        if (filtraUsuario != null){
            if(req.body.user_password == req.body.user_passwordConfirmation){
                
                const modificaPasswd = await db.Users.update({
                    password: bcrypt.hashSync(req.body.user_password, 12),
                },
                {where:{id:filtraUsuario.id}
            })
            notifier.notify({
                title: '¡Felicitaciones!',
                message: 'Contraseña modificada satisfactoriamente',
            });
        }
        }
        if (filtraComposer != null){
            if(req.body.user_password == req.body.user_passwordConfirmation){
                const modificaPasswd = await db.Composers.update({
                    password: bcrypt.hashSync(req.body.user_password, 12),
                },
                {where:{id:filtraComposer.id}
            })
            notifier.notify({
                title: '¡Felicitaciones!',
                message: 'Contraseña modificada satisfactoriamente',
            });
            }
        }
        return res.redirect("/config");

    },
    logout:(req,res) => {
        delete req.session.user_data;
        res.render("frontPage");
    }
}

module.exports = userController;
