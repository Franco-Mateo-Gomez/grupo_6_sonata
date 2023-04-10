let express = require('express');
const path = require("path");
let router = express.Router();
const multer = require("multer");
const fs = require("fs")

const productsController = require("../controllers/productsControllers.js");

/*Multer config*/
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../../public/images/products"));
    },
    //Filename config *
    filename: function (req, file, cb) {
        const dataProductsJSON = path.join(__dirname, '../model/data/products.json');
        const dataProducts = JSON.parse(fs.readFileSync(dataProductsJSON, 'utf-8'));

        let productoId;

        if (req.params.id) {
            productoId = req.params.id;
        } else {
            productoId = dataProducts[dataProducts.length - 1].id + 1;
        }

        const extension = path.extname(file.originalname);
        
        cb(null, "idProduct" + productoId + extension);
    }
});

const upload = multer({ storage: storage });

router.get("/detail/:userId", productsController.productDetail);

router.get("/admin-products", productsController.adminProducts);

router.get("/create", productsController.productCreate);
router.post("/create", upload.single("imgPista"), productsController.create);

router.get("/:userId/edit/:id", productsController.productEditView);
router.put("/:userId/edit/:id", upload.single("imgPista"), productsController.productEdit);

router.get("/edit-list", productsController.productEditList);
router.delete("/:userId/edit-list/:id", productsController.productDelete);


module.exports = router;