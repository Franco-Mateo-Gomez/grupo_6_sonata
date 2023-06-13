let db = require ("../../database/models")

const apiProductsController = {
    loadProducts: async (req,res) => {

        let Albums = await db.Albums.findAll()
        let Genres = await db.Genres.findAll()

        // Total Albums in DB
        const long = Albums.length;

        // --start Void-- Save total Albums by genre |forEach|
        const genres = {
        }

        // Total Albums by category
        Genres.forEach(genre => {
            let genreName = genre.name
            let AlbumInGenre = Albums.filter(album => album.genereIdFk == genre.id)
    
            genres[genreName] = AlbumInGenre.length // --> Add new property [nameGenre] = Total Albums in Genre
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

        return albumInDb ? res.json(albumInDb) : res.status(404).json({ error: "Producto no encontrado" })

    }
}

module.exports = apiProductsController;