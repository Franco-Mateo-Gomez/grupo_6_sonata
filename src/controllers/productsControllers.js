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

        const dataLogin = req.session.user_data.user_email || req.session.user_data
        
        const filtraUsuario = 
        await db.Composers.findOne({where:{userName:dataLogin}}) ||
        await db.Composers.findOne({where:{email:dataLogin}});

        const idUser=filtraUsuario.id
        res.render("products/createProduct",{idUser})
    },

    productEditView: async (req, res) => {

        const idAlbum = req.params.id;

        const dataLogin = req.session.user_data.user_email || req.session.user_data

        const filtraUsuario = 
        await db.Composers.findOne({where:{userName:dataLogin}}) ||
        await db.Composers.findOne({where:{email:dataLogin}});
        
        const filtraAlbum = await db.Albums.findByPk(idAlbum,{
            include:[
                {model:db.Genres,as: 'genreAlbum'}
            ]
        }); 

        res.render("products/editAlbum", { filtraAlbum:filtraAlbum, filtraUsuario:filtraUsuario });

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

        if(!req.session.user_data){
            res.redirect("/login");
        }
        
        const dataLogin = req.session.user_data.user_email || req.session.user_data;
        
        const filtraUsuario = 
        await db.Composers.findOne({where:{userName:dataLogin}}) ||
        await db.Composers.findOne({where:{email:dataLogin}});
        
        const filtraAlbums = await db.Albums.findAll({
            where: {
              composerIdFk: filtraUsuario.id
            }
          }); 
        res.render("products/editAlbumtList", { filtraAlbums: filtraAlbums, filtraUsuario: filtraUsuario })
    },

    adminProducts: async (req, res) => {

        if(!req.session.user_data){
            res.redirect("/login");
        }

        const dataLogin = req.session.user_data.user_email || req.session.user_data
        
        const filtraUsuario = 
        await db.Composers.findOne({where:{userName:dataLogin}}) ||
        await db.Composers.findOne({where:{email:dataLogin}});

        if(!filtraUsuario){
            res.send("Usted no es Artista :(")
        }

        res.render("products/adminProducts", { filtraUsuario: filtraUsuario });
    },

    productDelete: async (req, res) => {

        const idAlbum = req.params.id;

        const filtraAlbum = await db.Albums.destroy({ where: { id: idAlbum }});

        res.redirect("/product/edit-list");
    },
    
    productCreateAlbum: async (req, res) => {

        const dataLogin = req.session.user_data.user_email || req.session.user_data

        const filtraUsuario = 
        await db.Composers.findOne({where:{userName:dataLogin}}) ||
        await db.Composers.findOne({where:{email:dataLogin}});

        const idUser=filtraUsuario.id

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

}
module.exports = productsController;