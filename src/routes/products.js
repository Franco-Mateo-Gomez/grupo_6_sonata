let express = require('express');
let router = express.Router();
const productsController = require("../controllers/productsControllers.js")

/*Principal page*/
router.get("/detail",productsController.productDetail);
router.get("/admin-products",productsController.adminProducts);
module.exports = router;