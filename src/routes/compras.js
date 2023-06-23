const express = require('express');
let router = express.Router();
const comprasController = require ("../controllers/comprasController");
const validationsCompras = require ("../middlewares/validaCompras.js");

router.get("/productCart", comprasController.compraView);
router.post("/productCart", validationsCompras , comprasController.processCompras);

module.exports = router;