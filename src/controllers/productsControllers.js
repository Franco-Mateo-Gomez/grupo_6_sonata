/*Import modules*/
const userFunctions = require("../functions/User");
/*-------------*/

/*Import Models Sequelize*/
let db = require('../database/models')

/*Products Controller Methods*/
const productsController = {

    /*|VIEW| When users access to specific Artist -> Show list from their products*/
    productDetail: async (req, res) => {

        const idAlbum = req.params.productId;
        const listUsers = await db.Users.findAll({});
        const composerIds = listUsers.map(user => user.id);

        const albumInDb = await db.Albums.findOne({where:{id:idAlbum,composerIdFk:composerIds},include:[{ model: db.Genres, as: 'genreAlbum'}]})

        const findUser = await db.Users.findOne({ where: { id: albumInDb.composerIdFk }});

        /*Show in page*/
        res.render("products/productDetail", { filtraProducto: albumInDb, user: findUser });
        
    },
    productCreateAlbumView: async (req, res) => {

        const dataLogin = await userFunctions.getDataLogin(req,res);
        
        if (dataLogin != null ){
            const findUser = await userFunctions.findInDB(req,res);
            res.render("products/createProduct",{user:findUser});
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
            res.render("products/editAlbum", { filtraAlbum:filtraAlbum, user:findUser });
        }
        else{
            res.redirect("/login");
        } 

    },

    productEdit: async (req, res) => {
        const idAlbum = req.params.id;
        const datosModificados = req.body;

        let updatePrice =0.00;

        if (req.file) {
            await db.Albums.update({
             image : "/images/products/albums/" + req.file.filename,
            },
            {where:{id:idAlbum}}
            );
         }

        if (datosModificados.oferta > 0 ) {
            updatePrice = (datosModificados.nuevoPrecio - ((datosModificados.oferta * datosModificados.nuevoPrecio) / 100))
        }
        else{
            updatePrice = 0
        }

        

        await db.Albums.update({
            name: datosModificados.nombrePista,
            description: datosModificados.descripcionProducto,
            price: datosModificados.nuevoPrecio,
            coin: datosModificados.moneda,
            genereIdFk: datosModificados.generes,
            offer: updatePrice,
            offerPercent: datosModificados.oferta
         },
         {where:{id:idAlbum}}
         );

         return res.redirect("/general")
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
            res.render("products/editAlbumtList", { filtraAlbums: filtraAlbums, user: findUser })
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
                res.render("products/adminProducts", { user: findUser });
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
                offer:0,
                dateUpload: new Date(),

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