module.exports = (sequelize, dataTypes) => {
    let alias = "Genres";

    let colums = {
        id: {
            type: dataTypes.INTEGER,
             primaryKey: true,
             allowNull: false,
             autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(255),
            allowNull: false,
        }
    };

    let config = {
        tableName: "genres",
        timestamps: false
    };

    const Genre = sequelize.define(alias, colums, config);

    //Relacionamos un Genero con muchos Albumes
    Genre.associate = function (models) {
        Genre.hasMany(models.Albums, {
            as: "genreAlbum", 
            foreignKey: "genereIdFk"
        })
    }

    return Genre;

}