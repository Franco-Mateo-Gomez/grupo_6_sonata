let express = require('express');
let router = express.Router();
const productsController = require("../controllers/productsControllers.js")

/*Principal page*/
router.get("/",productsController.productDetail);

module.exports = router;