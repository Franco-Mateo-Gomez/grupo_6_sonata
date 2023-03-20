let express = require('express');
const path = require("path");
let router = express.Router();
const multer = require("multer");
const productsController = require("../controllers/productsControllers.js");

/*Multer config*/
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,path.join(__dirname,"../../public/images/products"));
    },
    filename: function(req,file,cb){
        const productoId = req.params.id;
        const extension = path.extname(file.originalname);
        cb(null, "idProduct"+productoId+extension);
    }
});

const upload=multer({storage});

router.get("/detail/:id",productsController.productDetail);

router.get("/:userId/admin-products",productsController.adminProducts);
router.get("/create",productsController.productCreate);

router.get("/:userId/edit/:id",productsController.productEditView);
router.put("/:userId/edit/:id",upload.single("imgPista"),productsController.productEdit);


router.get("/:userId/edit-list",productsController.productEditList);
router.delete("/:userId/edit-list/:id",productsController.productDelete);

module.exports = router;