const path = require("path")

const productsController={
    productDetail:(req,res) =>{
        res.sendFile(path.join(__dirname,"../views/productDetail.html"));
    }
}

module.exports = productsController;