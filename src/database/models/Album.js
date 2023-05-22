const { reconstructFieldPath } = require("express-validator/src/select-fields");

module.exports = (sequelize, dataTypes)=>{

    let alias = "Albums";

    let colums = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement : true
        },
        name:{
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        description:{
            type: dataTypes.TEXT,
            allowNull: false,
            unique: true
        },
        image:{
            type: dataTypes.STRING(255),
            allowNull: false,
            defaultValue:'/images/users/default.jpg'
        },
        coin:{
            type: dataTypes.STRING(5),
            allowNull: false,
            unique: true
        },
        price:{
            type: dataTypes.DECIMAL,
            allowNull: false,
            unique: true
        },
        dateUpload:{
            type: dataTypes.DATE,
            allowNull: true, //NOT NULL
        },
        totalLength:{
            type: dataTypes.BIGINT,
            allowNull: true, //NOT NULL
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
            as: "genreAlbum", //Nombre de la relación
            foreignKey: "genereIdFk"
        }),
         Album.belongsTo(models.Users,{
             as: "composerAlbum", //Nombre de la relación
             foreignKey: "composerIdFk"
         })
        // Album.hasMany(models.Songs,{
        //     as: "songs", //Nombre de la relación
        //     foreignKey: "idAlbum_Fk"
        // })
        }
        return Album;
    }