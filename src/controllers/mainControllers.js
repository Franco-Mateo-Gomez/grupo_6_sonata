const path = require("path");
const fs = require("fs")
const bcrypt = require('bcrypt');
const { validationResult, body } = require("express-validator");
const { render } = require("ejs");

const dataProductsJSON = path.join(__dirname, '../model/data/products.json');
const dataProducts = JSON.parse(fs.readFileSync(dataProductsJSON, 'utf-8'));

const User = require(path.join(__dirname, "../model/User.js"));

const mainController = {
    index: (req, res) => {
        res.render("index", { albumes: dataProducts });
    },
    login: (req, res) => {
        res.render("users/login");
    },
    processLogin:(req,res) => {
        let userToLogin = User.findByField("email", req.body.user_email);
        if(userToLogin){
            delete userToLogin.user_password;
            req.session.userLogged = userToLogin;
            let isPasswordOK = bcrypt.compareSync(req.body.user_password, userToLogin.clave);
            if(isPasswordOK){
                return res.redirect("general")
            }
        }
        return res.render("users/login", {
            errors: {
                user_email: {
                    msg: "El email no se encuentra registrado."
                }
            }
        })
    },
    register: (req, res) => {
        res.render("users/register");
    },
    processRegister: (req, res) => {
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

        let newUser = {
            nombreCompleto: req.body.client_fullname,
            email: req.body.user_email,
            clave: bcrypt.hashSync(req.body.user_password, 10),
            img: "/images/users/" + req.file.filename,
            nombreArtista: req.body.user_name,
            descripcion: "Todavia no escribio una descripción.",
            valoracion: 0,
            redes: [],
            genero:req.body.generes
        }
        User.create(newUser);
        return res.redirect("general");
    },
    aboutUs: (req, res) => {
        res.render("aboutUs");
    },
    front: (req, res) => {
        res.render("frontPage");
    },
    user: (req, res) => {
        res.render("users/user");
    },

}

module.exports = mainController;