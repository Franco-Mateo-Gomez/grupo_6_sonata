module.exports = (sequelize, dataTypes)=>{

    let alias = "Albums";

    let colums = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false, //NOT NULL
            autoIncrement : true
        },
        name:{
            type: dataTypes.STRING(50),
            allowNull: false //NOT NULL
        },
        description:{
            type: dataTypes.TEXT,
            allowNull: false, //NOT NULL
            unique: true
        },
        image:{
            type: dataTypes.STRING(255),
            allowNull: false, //NOT NULL
            defaultValue:'/images/users/default.jpg'
        },
        rate:{
            type: dataTypes.TINYINT,
            allowNull: false, //NOT NULL
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