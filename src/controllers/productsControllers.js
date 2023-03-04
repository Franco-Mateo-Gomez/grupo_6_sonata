
const productsController={
    productDetail:(req,res) =>{
        res.render("products/productDetail");
    },
    adminProducts:(req,res) =>{
        res.render("products/adminProducts");
    },
}

module.exports = productsController;