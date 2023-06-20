/* --TEMPORAL --API usage example */

const express = require('express');
const router = express.Router();
const apiProductsController = require("../../controllers/apis/fetchProducts")

router.get("/",apiProductsController.dataProduct);

module.exports = router;