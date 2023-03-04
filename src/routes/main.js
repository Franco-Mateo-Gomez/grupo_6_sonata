const path = require('path');
let express = require('express');
let router = express.Router();
const mainController = require("../controllers/mainControllers.js")

/*Principal page*/
router.get("/",mainController.index);
router.get("/login",mainController.login);
router.get("/register",mainController.register);
router.get("/about",mainController.aboutUs);

router.get("/register",(req,res)=>{
    res.sendFile(path.join(__dirname,"../views/register.html"));
})

module.exports=router;
