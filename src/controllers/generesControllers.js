const path = require("path");
const fs = require("fs")

const dataProductsJSON= path.join(__dirname, '../model/data/users.json');

const dataProducts = JSON.parse(fs.readFileSync(dataProductsJSON, 'utf-8'));

//Arrays -> Filter in generes
const filtraRock = dataProducts.filter(producto => producto.genero=="rock");
const filtraClassic = dataProducts.filter(producto => producto.genero=="classic");

const generesController={
    rock:(req,res) =>{
        res.render("generesRock",{filtra:filtraRock});
    },
    classic:(req,res) =>{
        res.render("generesClassic",{filtra:filtraClassic});
    }
}

module.exports = generesController;