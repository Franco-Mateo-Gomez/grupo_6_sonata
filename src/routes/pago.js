const express = require('express');
let router = express.Router();
const pagoController = require("../controllers/pagoController");
const validationsPago = require("../middlewares/validaPago");

router.get("/productCart", pagoController.pagoView);
router.post("/productCart", validationsPago, pagoController.processPago)