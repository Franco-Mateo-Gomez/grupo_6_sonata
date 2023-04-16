/*Import modules*/
const path = require("path");
const fs = require("fs")
/*-------------*/

/*Import JSON's*/
const datausersJSON = path.join(__dirname, '../model/data/users.json');
const datausers = JSON.parse(fs.readFileSync(datausersJSON, 'utf-8'));

const dataProductsJSON = path.join(__dirname, '../model/data/products.json');
const dataProducts = JSON.parse(fs.readFileSync(dataProductsJSON, 'utf-8'));
/*-------------*/

/*Products Controller Methods*/
const productsController = {

    /*|VIEW| When users access to specific Artist -> Show list from their products*/
    productDetail: (req, res) => {

        /* Require ID from path*/
        const productId = req.params.productId;
        
        let filtraProducto = dataProducts.find(product => product.id == productId);
        let filtraUsuario = datausers.find(user => user.id == filtraProducto.idUser);

        if(!filtraProducto){
            filtraProducto = dataProducts[0]
        }

        /*Show in page*/
        res.render("products/productDetail", { filtraProducto: filtraProducto, filtraUsuario: filtraUsuario });
    },
    productCreate: (req, res) => {
        const filtraUsuario = datausers.find(user => user.email == req.session.user_data.user_email || user.nombreArtista === req.session.user_data.user_email || user.email == req.session.user_data || user.nombreArtista === req.session.user_data);
        const idUser=filtraUsuario.id
        res.render("products/createProduct",{idUser})
    },

    productEditView: (req, res) => {

        const idProductosUsuarios = req.params.id;
        const idUser = req.params.userId;

        const filtraUsuario = datausers.find(user => user.id == idUser);
        const filtraTrack = dataProducts.find(productosUsuarios => productosUsuarios.id == idProductosUsuarios && productosUsuarios.idUser == idUser);

        res.render("products/editProduct", { filtraTrack:filtraTrack, filtraUsuario:filtraUsuario });

    },

    productEdit: (req, res) => {
        const idProductosUsuarios = req.params.id;
        const userId = req.params.userId;
        const datosModificados = req.body;

        const findTrack = dataProducts.findIndex(productosUsuarios => productosUsuarios.id == idProductosUsuarios && productosUsuarios.idUser == userId);

        dataProducts[findTrack].nombreTrack = datosModificados.nombrePista;
        dataProducts[findTrack].genero = datosModificados.generes;
        dataProducts[findTrack].descripcionProductosUsuarios = datosModificados.descripcionProductosUsuarios;
        dataProducts[findTrack].precio = datosModificados.nuevoPrecio;
        dataProducts[findTrack].moneda = datosModificados.moneda;

        if (req.file) {
            dataProducts[findTrack].img = "/images/products/" + req.file.filename;
        }

        fs.writeFileSync(dataProductsJSON, JSON.stringify(dataProducts));

        res.render("index", { albumes: dataProducts })
    },

    productEditList: (req, res) => {

        if(!req.session.user_data){
            res.redirect("/login");
        }

        const filtraUsuario = datausers.find(user => user.email == req.session.user_data.user_email || user.nombreArtista === req.session.user_data.user_email || user.email == req.session.user_data || user.nombreArtista === req.session.user_data);
        const filtraTraks = dataProducts.filter(productosUsuarios => productosUsuarios.idUser == filtraUsuario.id);

        res.render("products/editProductList", { filtraTraks: filtraTraks, filtraUsuario: filtraUsuario })
    },

    adminProducts: (req, res) => {

        if(!req.session.user_data){
            res.redirect("/login");
        }

        const filtraUsuario = datausers.find(user => user.email == req.session.user_data.user_email || user.nombreArtista === req.session.user_data.user_email || user.email == req.session.user_data || user.nombreArtista === req.session.user_data);
        res.render("products/adminProducts", { filtraUsuario: filtraUsuario });
    },

    productDelete: (req, res) => {
        const idProductosUsuarios = req.params.id;

        const filtraUsuario = datausers.find(user => user.email == req.session.user_data.user_email || user.nombreArtista === req.session.user_data.user_email || user.email == req.session.user_data || user.nombreArtista === req.session.user_data);
        const findTrack = dataProducts.findIndex(productosUsuarios => productosUsuarios.id == idProductosUsuarios && productosUsuarios.idUser == filtraUsuario.id);

        dataProducts.splice(findTrack, 1);

        fs.writeFileSync(dataProductsJSON, JSON.stringify(dataProducts));

        res.redirect("/product/edit-list");
    },
    
    create: (req, res) => {

        const filtraUsuario = datausers.find(user => user.email == req.session.user_data.user_email || user.nombreArtista === req.session.user_data.user_email || user.email == req.session.user_data || user.nombreArtista === req.session.user_data);        
        let producto = {
            id: dataProducts[dataProducts.length - 1].id + 1,
            img: "/images/products/" + req.file.filename,
            nombreTrack: req.body.nombrePista,
            duracion: "",
            fechaPublicacion: "",
            descripcionProducto: req.body.descripcion_pista,
            genero: req.body.edit_generes,
            precio: req.body.precio_pista,
            moneda: req.body.moneda,
            idUser: filtraUsuario.id,
            valoracion: 0
        }

        //A la variable le agrego el nuevo usuario
        dataProducts.push(producto);

        //Convierto el objeto en un string
        let productosUsuariosJSON = JSON.stringify(dataProducts);

        //Escribo los cambios en el archivo
        fs.writeFileSync(path.join(__dirname, '../model/data/products.json'), productosUsuariosJSON);

        return res.redirect("/general")
        
    }

}
module.exports = productsController;