let express = require('express');
let router = express.Router();
const productsController = require("../controllers/productsControllers.js")

/*Principal page*/
router.get("/detail/:idProducto",productsController.productDetail);
router.get("/admin-products",productsController.adminProducts);
router.get("/create",productsController.productCreate);
router.get("/edit",productsController.productEdit);
router.get("/edit-list",productsController.productEditList);
module.exports = router;