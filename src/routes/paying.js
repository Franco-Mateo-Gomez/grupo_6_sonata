let express = require('express');
let router = express.Router();
const payingController = require("../controllers/payingControllers.js")

/*Principal page*/
router.get("/",payingController.checkout);

module.exports = router;