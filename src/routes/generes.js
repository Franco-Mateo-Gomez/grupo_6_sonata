let express = require('express');
let router = express.Router();
const generesController = require("../controllers/generesControllers.js")

/*Principal page*/
router.get("/rock",generesController.rock);
router.get("/classic",generesController.classic);

module.exports = router;