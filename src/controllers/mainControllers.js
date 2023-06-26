const userFunctions = require("../functions/User");
let db = require('../database/models');


const mainController = {
    front: (req, res) => {
        res.render("frontPage");
    },
    aboutUs: (req,res) =>{
        res.render("aboutUs");
    },
    browser: async (req,res) => {

        const dataLogin = await userFunctions.getDataLogin(req,res);

            if (dataLogin != null ){
                const findUser = await userFunctions.findInDB(req,res);

                res.render("browser/browser",{  user: findUser });
            }
            else{
                res.redirect("/login");
            }
    },

    consultas: (req,res) =>{
        res.render("consultas");
    }
}

module.exports = mainController;

