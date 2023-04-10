const path = require('path');
let express = require('express');
let router = express.Router();

const mainController = require("../controllers/mainControllers.js")

router.get("/",mainController.front);

router.get("/about",mainController.aboutUs);

// router.get("/faq",mainController.faq);

module.exports=router;