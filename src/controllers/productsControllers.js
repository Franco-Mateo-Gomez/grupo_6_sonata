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

    productEditView:(req,res)=>{

        const idProducto = req.params.id;
        const idUser = req.params.userId;

        const filtraUsuario = datausers.find(user => user.id == idUser);
        const filtraTrack = dataProducts.find(producto => producto.id == idProducto && producto.idUser == idUser);

        res.render("products/editProduct", { filtraTrack, filtraUsuario});

    },
    productEdit:(req,res)=>{
        const idProducto=req.params.id;
        const userId = req.params.userId;
        const datosModificados = req.body;

        const findTrack=dataProducts.findIndex(producto => producto.id == idProducto && producto.idUser == userId);

        dataProducts[findTrack].nombreTrack = datosModificados.nombrePista;
        dataProducts[findTrack].genero = datosModificados.generes;
        dataProducts[findTrack].descripcionProducto = datosModificados.descripcionProducto;
        dataProducts[findTrack].precio = datosModificados.nuevoPrecio;
        dataProducts[findTrack].moneda = datosModificados.moneda;

        if (req.file) {
            dataProducts[findTrack].img ="/images/products/"+req.file.filename;
        }

        fs.writeFileSync(dataProductsJSON,JSON.stringify(dataProducts));

        res.redirect("/");
    },
    productEditList:(req,res)=>{
        const idUser = req.params.userId;

        const filtraUsuario = datausers.find(user => user.id == idUser);
        const filtraTraks=dataProducts.filter(producto =>producto.idUser == filtraUsuario.id);

        res.render("products/editProductList",{filtraTraks,filtraUsuario})
    },

    adminProducts:(req,res) =>{
        const idUser = req.params.userId;
        const filtraUsuario = datausers.find(user => user.id == idUser);
        res.render("products/adminProducts",{filtraUsuario});
    },

    productDelete:(req,res) =>{
        const idProducto=req.params.id;
        const userId = req.params.userId;

        const findTrack=dataProducts.findIndex(producto => producto.id == idProducto && producto.idUser == userId);

        dataProducts.splice(findTrack,1);

        fs.writeFileSync(dataProductsJSON,JSON.stringify(dataProducts));

        res.redirect("/");
    }

}
module.exports = productsController;