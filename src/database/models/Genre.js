module.exports = (sequelize, dataTypes) => {
    let alias = "Genres";

    let colums = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false, //NOT NULL
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(255),
            allowNull: false //NOT NULL
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
            as: "albums", //Nombre de la relación
            foreignKey: "idGenre_Fk"
        })
    }

    return Genre;

}