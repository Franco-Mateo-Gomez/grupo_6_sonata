const path = require("path");
const fs = require("fs")

const datausersJSON = path.join(__dirname, '../model/data/users.json');
const datausers = JSON.parse(fs.readFileSync(datausersJSON, 'utf-8'));

//Arrays -> Filter in generes
const filtraRock = datausers.filter(producto => producto.genero=="rock");
const filtraClassic = datausers.filter(producto => producto.genero=="classic");

const generesController={
    rock:(req,res) =>{
        res.render("generesRock",{filtra:filtraRock});
    },
    classic:(req,res) =>{
        res.render("generesClassic",{filtra:filtraClassic});
    }
}

module.exports = generesController;