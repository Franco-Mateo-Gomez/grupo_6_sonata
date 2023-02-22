const path = require ("path");

const mainController={
    index:(req,res) =>{
        res.sendFile(path.join(__dirname,"../views/index.html"));
    },
    login:(req,res) =>{
        res.sendFile(path.join(__dirname,"../views/login.html"));
    },
    register:(req,res) =>{
        res.sendFile(path.join(__dirname,"../views/register.html"));
    },
    aboutUs:(req,res) =>{
        res.sendFile(path.join(__dirname,"../views/aboutUs.html"));
    }
}

module.exports = mainController;