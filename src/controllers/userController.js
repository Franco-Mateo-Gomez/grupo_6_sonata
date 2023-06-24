const notifier = require('node-notifier');
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator")
const userFunctions = require("../functions/User");

const fs = require("fs")

/*Import Models Sequelize*/
let db = require('../database/models');

const userController = {

    generalView: async (req, res) => {

        const dataLogin = await userFunctions.getDataLogin(req, res);
        
        if (dataLogin != null) {
            const findUser = await userFunctions.findInDB(req, res);
            console.log("GENERAL VIEW  ",findUser.id)
            const offerAlbums = await db.Albums.findAll({ limit: 5 })
                const filtraAlbums = await db.Albums.findAll({
                    include:[
                        {model:db.Genres,as: 'genreAlbum'}
                    ]})
            req.session.userLogged = {
                id: findUser.id
            };
            console.log( req.session.userLogged.id)
            res.render("index", { albumes: filtraAlbums, user: findUser, offerAlbums });
        }
        else {
            res.redirect("/login");
        }

    },
    loginView: (req, res) => {
        res.render("users/login");
    },

    loginUser: (req, res) => {
        const resultValidation = validationResult(req)

        /* Input errors check*/
        if (resultValidation.errors.length > 0) {
            res.render("users/login", { errors: resultValidation.mapped(), oldData: req.body })
        }
        else {

            /*Save data in Session :) */
            req.session.user_data = req.body.user_email;
            
            /*------------------------*/

            if (req.body.recordame != undefined) {
                res.cookie("recordame", req.session.user_data.user_email, { maxAge: 1000 * 60 * 30 });
            }

            res.redirect("/general");
        }
    },

    registerView: (req, res) => {
        res.render("users/register");
    },
    registerUser: async (req, res) => {

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

        const userEmailVerification = await db.Users.findOne({ where: { email: req.body.user_email } });

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
                },
                oldData: req.body
            })
        }
        
        let userType = req.body.typeUser;

        let defaultUserImage = req.file ? "/images/users/" + req.file.filename : "/images/users/default.png";

        // User default data
        let createUser = {
            fullName: req.body.client_fullname,
            userName: req.body.user_name,
            email: req.body.user_email,
            password: bcrypt.hashSync(req.body.user_password, 10),
            image: defaultUserImage
        }

        if (userType == "client") {
            await db.Users.create(createUser);
        }
        else {
            createUser.isComposer = 1;  // If is composer -> Change default value from 0 to 1
            await db.Users.create(createUser);
        }

        res.redirect("/")
    },

    configView: async (req, res) => {

        const dataLogin = await userFunctions.getDataLogin(req, res);

        if (dataLogin != null) {
            const findUser = await userFunctions.findInDB(req, res);
            res.render("users/userConfig", { userConfig: findUser, user: findUser });
        }
        else {
            res.redirect("/login");
        }

    },
    processUserConfig: async (req, res) => {

        const dataLogin = await userFunctions.getDataLogin(req, res);

        if (dataLogin != null) {
            const findUser = await userFunctions.findInDB(req, res);

            const datosModificados = req.body;

            await db.Users.update({
                fullName: datosModificados.client_fullname,
                userName: datosModificados.user_name,
                email: datosModificados.user_email,
                description: datosModificados.user_description,
            }, { where: { id: findUser.id } });

            res.redirect("/config");
        }
        else {
            res.redirect("/login");
        }

    },
    processUserConfigImage: async (req, res) => {

        const dataLogin = await userFunctions.getDataLogin(req, res);

        if (dataLogin != null) {

            const findUser = await userFunctions.findInDB(req, res);

            if (req.file) {
                await db.Users.update({
                    image: "/images/users/" + req.file.filename,
                },
                    { where: { id: findUser.id } });
            }
            return res.redirect("/config");
        }
        else {
            res.redirect("/login");
        }

    },

    processUserConfigPassword: async (req, res) => {

        const dataLogin = await userFunctions.getDataLogin(req, res);

        if (dataLogin != null) {
            const findUser = await userFunctions.findInDB(req, res);

            if (findUser != null) {
                if (req.body.user_password == req.body.user_passwordConfirmation) {

                    await db.Users.update({
                        password: bcrypt.hashSync(req.body.user_password, 12),
                    },
                        {
                            where: { id: findUser.id }
                        })
                    notifier.notify({
                        title: '¡Felicitaciones!',
                        message: 'Contraseña modificada satisfactoriamente',
                    });
                }
                return res.redirect("/config");
            }
            else {
                res.redirect("/login");
            }
        }
    },

    logout: (req, res) => {
        delete req.session.user_data;
        res.clearCookie("recordame");
        res.render("frontPage");
    }
}

module.exports = userController;
