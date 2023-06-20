const express = require('express');
const router = express.Router();
const apiProductsController = require("../../controllers/apis/products")

router.get("/",apiProductsController.loadProducts);
router.get("/:id",apiProductsController.loadProduct);

module.exports = router;