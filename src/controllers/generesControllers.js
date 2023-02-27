const path = require("path")

const generesController={
    rock:(req,res) =>{
        res.sendFile(path.join(__dirname,"../views/generesRock.html"));
    }
}

module.exports = generesController;