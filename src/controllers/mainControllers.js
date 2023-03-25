const path = require("path");
const fs = require("fs")

const dataProductsJSON= path.join(__dirname, '../model/data/products.json');
const dataProducts = JSON.parse(fs.readFileSync(dataProductsJSON, 'utf-8'));

const mainController={
    index:(req,res) =>{
        res.render("index", {albumes:dataProducts});
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
    },
    user:(req,res) =>{
        res.render("users/user");
    },

}

module.exports = mainController;