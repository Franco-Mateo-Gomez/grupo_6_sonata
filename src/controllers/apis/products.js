let db = require ("../../database/models")

const apiProductsController = {
    loadProducts: async (req,res) => {

        let Albums = await db.Albums.findAll({
            include: {
                model: db.Genres,
                as: "genreAlbum", // Nombre de la relación definida en el modelo de álbum
                attributes: ["name"], // Obtener solo el atributo "name" del género
            },
        })
        let Genres = await db.Genres.findAll()

        // Total Albums in DB
        const long = Albums.length;

        // --start Void-- Save total Albums by genre |forEach|
        const genres = []
        let genreName = "";
        // Total Albums by category
        Genres.forEach(genre => {
            genreName = (genre.name)
            let AlbumInGenre = Albums.filter(album => album.genereIdFk == genre.id)
            genres.push({name: genreName ,count: AlbumInGenre.length})// --> Add new property [nameGenre] = Total Albums in Genre
        });

        const addDetailInAlbum = Albums.map(album => {
            const albumData = album.toJSON(); // Convert to JSON version
            albumData.detail = "/api/products/" + album.id; // Add new property [detail]
            return albumData;
          });

        const data = {
            count: long,
            countByGenre: genres,
            albums: addDetailInAlbum,
        }

        res.json(data);
    },
    loadProduct: async (req,res) => {

        let idAlbum = req.params.id;

        let albumInDb = await db.Albums.findByPk(idAlbum,{include:[{ model: db.Genres, as: 'genreAlbum'}]})

        return albumInDb ? res.json(albumInDb) : res.json({data:{id:"0"} })

    },
    checkout: async function (req, res) {
        // return res.send({ ...req.body, userId: req.session.userLogged.id });
        let order = await db.Order.create(
        { ...req.body, userId: req.session.userLogged.id },
        {
            include: db.Order.OrderItems,
        }
        );
        res.json({ ok: true, status: 200, order: order });
  },
}

module.exports = apiProductsController;