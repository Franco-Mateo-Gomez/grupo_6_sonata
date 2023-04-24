module.exports = (sequelize, dataTypes)=>{

    let alias = "Albums";

    let colums = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            notNull: true,
            autoIncrement : true
        },
        name:{
            type: dataTypes.STRING(100),
            notNull: true,
        },
        description:{
            type: dataTypes.TEXT,
            notNull: true,
            unique: true
        },
        image:{
            type: dataTypes.STRING(255),
            notNull: true,
            defaultValue:'/images/users/default.jpg'
        },
        rate:{
            type: dataTypes.TINYINT,
            notNull: true,
            unique: true
        },
        dateUpload:{
            type: dataTypes.DATE,
            allowNull: false, //NOT NULL
        },
        price:{
            type: dataTypes.INTEGER,
            allowNull: false, //NOT NULL
        }
    };

    let config = {
        tableName: "albums",
        timestamps: false
    };

    const Album = sequelize.define(alias,colums,config);

    //Relacionamos Albumes con un Genero
    Album.associate = function(models){
        Album.belongsTo(models.Genres,{
            as: "genres", //Nombre de la relación
            foreignKey: "idGenre_Fk"
        })
        Album.belongsTo(models.Composers,{
            as: "composers", //Nombre de la relación
            foreignKey: "idComposer_Fk"
        })
        Album.hasMany(models.Songs,{
            as: "songs", //Nombre de la relación
            foreignKey: "idAlbum_Fk"
        })
        Album.belongsToMany(models.Orders, {
            as: "orders", //Nombre de la relación
            through: "ordersalbums",
            foreignKey: "idAlbum_Fk",
            otherkey: "idOrder_Fk",
            timestamps: false
        })
    }
    
    return Album;
}