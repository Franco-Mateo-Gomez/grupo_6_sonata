const path = require("path");
const fs = require("fs")

const datausersJSON= path.join(__dirname, '../model/data/users.json');
const datausers = JSON.parse(fs.readFileSync(datausersJSON, 'utf-8'));

const dataProductsJSON= path.join(__dirname, '../model/data/products.json');
const dataProducts = JSON.parse(fs.readFileSync(dataProductsJSON, 'utf-8'));

const productsController={
    productDetail:(req,res) =>{
        const idProducto=req.params.id;

        const filtraProducto = dataProducts.find(product => product.id == idProducto);

        const filtraUsuario = datausers.find(user => user.id == filtraProducto.idUser);

        res.render("products/productDetail",{filtraProducto:filtraProducto, filtraUsuario:filtraUsuario});
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