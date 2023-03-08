
const productsController={
    productDetail:(req,res) =>{
        res.render("products/productDetail");
    },
    productCreate:(req,res)=>{
        res.render("products/createProduct")
    },
    productEdit:(req,res)=>{
        res.render("products/editProduct")
    },
    productEditList:(req,res)=>{
        res.render("products/editProductList")
    },
    adminProducts:(req,res) =>{
        res.render("products/adminProducts");
    }

}
module.exports = productsController;