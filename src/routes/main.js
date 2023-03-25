const path = require('path');
let express = require('express');
let router = express.Router();
const mainController = require("../controllers/mainControllers.js")

/*Principal page*/
router.get("/",mainController.front);
router.get("/general",mainController.index);
router.get("/login",mainController.login);
router.get("/register",mainController.register);
router.get("/about",mainController.aboutUs);
router.get("/user",mainController.user);
router.get("/ejemploSession", (req,res)=>{
    if(req.session.contador == undefined){
        req.session.contador = 0
    }
    req.session.contador++;
    res.send("Contador recargas: "+req.session.contador)
})
module.exports=router;
