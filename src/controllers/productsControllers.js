
const productsController={
    productDetail:(req,res) =>{
        res.render("products/productDetail");
    },
    productEdit:(req,res)=>{
        res.render("editProduct")
    }
}

module.exports = productsController;