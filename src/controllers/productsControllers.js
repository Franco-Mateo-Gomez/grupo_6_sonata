/*Import modules*/
const path = require("path");
const fs = require("fs")
const userFunctions = require("../functions/User");
/*-------------*/

/*Import JSON's*/
const datausersJSON = path.join(__dirname, '../model/data/users.json');
const datausers = JSON.parse(fs.readFileSync(datausersJSON, 'utf-8'));

const dataProductsJSON = path.join(__dirname, '../model/data/products.json');
const dataProducts = JSON.parse(fs.readFileSync(dataProductsJSON, 'utf-8'));
/*-------------*/

/*Import Models Sequelize*/
let db = require('../database/models')

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
    productCreateAlbumView: async (req, res) => {

        const dataLogin = await userFunctions.getDataLogin(req,res);
        
        if (dataLogin != null ){
            const findUser = await userFunctions.findInDB(req,res);
            const idUser=findUser.id
            res.render("products/createProduct",{idUser});
        }
        else{
            res.redirect("/login");
        }
        
    },

    productEditView: async (req, res) => {

        const idAlbum = req.params.id;

        const dataLogin = await userFunctions.getDataLogin(req,res);

        if (dataLogin != null ){
            const findUser = await userFunctions.findInDB(req,res);
            const filtraAlbum = await db.Albums.findByPk(idAlbum,{
                include:[
                    {model:db.Genres,as: 'genreAlbum'}
                ]
            }); 
            res.render("products/editAlbum", { filtraAlbum:filtraAlbum, filtraUsuario:findUser });
        }
        else{
            res.redirect("/login");
        } 

    },

    productEdit: async (req, res) => {
        const idAlbum = req.params.id;
        const datosModificados = req.body;

         const filtraAlbum = await db.Albums.update({
             name: datosModificados.nombrePista,
             description: datosModificados.descripcionProducto,
             price: datosModificados.nuevoPrecio,
             coin: datosModificados.moneda,
             genereIdFk: datosModificados.generes
         },
         {where:{id:idAlbum}}
         );

         if (req.file) {
             filtraAlbum.image = "/images/products/" + req.file.filename;
         }

         res.render("index", { albumes: dataProducts })
    },

    productEditList: async (req, res) => {
 
        const dataLogin = await userFunctions.getDataLogin(req,res);

        if (dataLogin != null ){
            const findUser = await userFunctions.findInDB(req,res);
            const filtraAlbums = await db.Albums.findAll({
                where: {
                  composerIdFk: findUser.id
                }
              }); 
            res.render("products/editAlbumtList", { filtraAlbums: filtraAlbums, filtraUsuario: findUser })
        }
        else{
            res.redirect("/login");
        }
        
    },

    adminProducts: async (req, res) => {

        const dataLogin = await userFunctions.getDataLogin(req,res);
        
        if (dataLogin != null ){
            const findUser = await userFunctions.findInDB(req,res);
            if(findUser.isComposer != 1){
                res.redirect("/general")
            }
            else{
                res.render("products/adminProducts", { filtraUsuario: findUser });
            }
        }
        else{
            res.redirect("/login");
        }

    },

    productDelete: async (req, res) => {

        const idAlbum = req.params.id;

        await db.Albums.destroy({ where: { id: idAlbum }});

        res.redirect("/product/edit-list");
    },
    
    productCreateAlbum: async (req, res) => {

        const dataLogin = await userFunctions.getDataLogin(req,res);

        if (dataLogin != null ){
            const findUser = await userFunctions.findInDB(req,res);
            const idUser=findUser.id

            const filtraGenero = await db.Genres.findOne({where:{name:req.body.genere}});

            let defaultAlbumImage = req.file ? "/images/products/albums/" + req.file.filename : "/images/products/albums/default.jpg";

            db.Albums.create({
                name: req.body.nombreAlbum,
                description: req.body.descripcion_album,
                image: defaultAlbumImage,
                coin: req.body.moneda,
                price: req.body.precio_album,
                composerIdFk: idUser,
                genereIdFk: filtraGenero.id,

            })
            .then(createSong=>{
                return res.redirect("/general") 
            })
        }
        else{
            res.redirect("/login");
        }

    }

}
module.exports = productsController;