module.exports = (sequelize, dataTypes)=>{

    let alias = "Songs";

    let colums = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            notNull: true,
            autoIncrement : true
        },
        name:{
            type: dataTypes.STRING,
            notNull: true,
        },
        length:{
            type: dataTypes.BIGINT,
            notNull: true,
            defaultValue:'No posee una descripción'
        }
    };

    let config = {
        tableName: "songs",
        timestamps: false
    };

    const Songs = sequelize.define(alias,colums,config);

    //Relacionamos un Compositor a muchos Albumes
    Songs.associate = function (models) {
        Songs.belongsTo(models.Albums, {
            as: "albums", //Nombre de la relación
            foreignKey: "idAlbum_Fk"
        })
    }

    return Songs;
}