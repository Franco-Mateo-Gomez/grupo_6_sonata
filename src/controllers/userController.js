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
let db = require('../database/models')

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
                res.cookie("recordame",req.session.user_data.user_email,{maxAge:1000 *60 *10});
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
    configView:(req,res) => {
        
        console.log(req.session.user_data);

        if(!req.session.user_data){
            res.redirect("/login");
        }
        else{
            const filtraUsuario = datausers.find(user => user.email == req.session.user_data.user_email || user.nombreArtista === req.session.user_data.user_email || user.email == req.session.user_data || user.nombreArtista === req.session.user_data);
            res.render("users/userConfig",{userConfig:filtraUsuario});
        }

    },
    processUserConfig:(req,res) => {

        if(!req.session.user_data){
            res.redirect("/login");
        }

        const filtraUsuario = datausers.find(user => user.email == req.session.user_data.user_email || user.nombreArtista === req.session.user_data.user_email || user.email == req.session.user_data || user.nombreArtista === req.session.user_data);

        let datosModificados = req.body;
        let usuario = datausers.findIndex( user => user.id == filtraUsuario.id);

        datausers[usuario].nombreArtista = datosModificados.user_name || datausers[usuario].nombreArtista;
        datausers[usuario].email = datosModificados.user_email || datausers[usuario].email;
        datausers[usuario].nombreCompleto = datosModificados.client_fullname || datausers[usuario].nombreCompleto;
        
        let usuariosJSON = JSON.stringify(datausers);
        fs.writeFileSync(path.join(__dirname, '../model/data/users.json'), usuariosJSON);
        
        res.redirect("/config")
    },
    processUserConfigImage:(req,res) =>{

        if(!req.session.user_data){
            res.redirect("/login");
        }

        const filtraUsuario = datausers.find(user => user.email == req.session.user_data.user_email || user.nombreArtista === req.session.user_data.user_email || user.email == req.session.user_data || user.nombreArtista === req.session.user_data);

        let usuario = datausers.findIndex( user => user.id == filtraUsuario.id);

        if (req.file) {
            fs.unlinkSync(path.join(__dirname,"../../public"+datausers[usuario].img));
            datausers[usuario].img = "/images/users/" + req.file.filename;
        }

        let usuariosJSON = JSON.stringify(datausers);
        fs.writeFileSync(path.join(__dirname, '../model/data/users.json'), usuariosJSON);

        res.redirect("/config");
    },
    processUserConfigPassword:(req,res) => {

        if(!req.session.user_data){
            res.redirect("/login");
        }

        const filtraUsuario = datausers.find(user => user.email == req.session.user_data.user_email || user.nombreArtista === req.session.user_data.user_email || user.email == req.session.user_data || user.nombreArtista === req.session.user_data);

        let usuario = datausers.findIndex( user => user.id == filtraUsuario.id);

        if(req.body.user_password == req.body.user_passwordConfirmation){
            datausers[usuario].clave = bcrypt.hashSync(req.body.user_password, 12);
            notifier.notify({
                title: '¡Felicitaciones!',
                message: 'Contraseña modificada satisfactoriamente',
            });
            return res.redirect("/config");
        }

        let usuariosJSON = JSON.stringify(datausers);
        fs.writeFileSync(path.join(__dirname, '../model/data/users.json'), usuariosJSON);
    },
    logout:(req,res) => {
        delete req.session.user_data;
        res.render("frontPage");
    }
}

module.exports = userController;
