
const productsController={
    productDetail:(req,res) =>{
        res.render("products/productDetail");
    },
    productEdit:(req,res)=>{
        res.render("editProduct")
    }    adminProducts:(req,res) =>{
        res.render("products/adminProducts");
    },


module.exports = productsController;