module.exports = (sequelize, dataTypes)=>{

    let alias = "Songs";

    let colums = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement : true
        },
        name:{
            type: dataTypes.STRING,
            allowNull: false,
        },
        length:{
            type: dataTypes.BIGINT,
            allowNull: false,
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