let express = require('express');
let router = express.Router();
const mainController = require("../controllers/mainControllers.js")

/*Principal page*/
router.get("/",mainController.index);
router.get("/login",mainController.login);
router.get("/register",mainController.register);
router.get("/about",mainController.aboutUs);

router.get("/productDetail",(req,res)=>{
    res.sendFile(path.join(__dirname,"../views/productDetail.html"));
})


module.exports = router;