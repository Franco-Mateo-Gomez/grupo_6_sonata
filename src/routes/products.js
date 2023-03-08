let express = require('express');
let router = express.Router();
const productsController = require("../controllers/productsControllers.js")

/*Principal page*/
router.get("/detail",productsController.productDetail);
router.get("/admin-products",productsController.adminProducts);
router.get("/admin-products/create",productsController.productCreate);
router.get("/admin-products/edit",productsController.productEdit);
router.get("/admin-products/edit-list",productsController.productEditList);
module.exports = router;