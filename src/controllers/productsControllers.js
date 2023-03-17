let baseDatos = require('../model/baseDatos');

const productsController={
    productDetail:(req,res) =>{
        let idProducto=req.params.idProducto;
        let productoSolicitado = baseDatos.find((producto) => {
            return producto.id == idProducto; 
        });

        res.render("products/productDetail", {album:productoSolicitado});
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