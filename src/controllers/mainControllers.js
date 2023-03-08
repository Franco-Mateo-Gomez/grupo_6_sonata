let baseDatos = require('../model/baseDatos');

const mainController={
    index:(req,res) =>{
        console.log(""+baseDatos[0].genero)
        res.render("index", {albumes:baseDatos});
    },
    login:(req,res) =>{
        res.render("users/login");
    },
    register:(req,res) =>{
        res.render("users/register");
    },
    aboutUs:(req,res) =>{
        res.render("aboutUs");
    },
    front:(req,res) =>{
        res.render("frontPage");
    }
}

module.exports = mainController;