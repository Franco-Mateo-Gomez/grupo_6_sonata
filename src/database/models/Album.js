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
        coin:{
            type: dataTypes.STRING(5),
            notNull: true,
            unique: true
        },
        price:{
            type: dataTypes.DECIMAL,
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
            as: "genreAlbum", //Nombre de la relación
            foreignKey: "genereIdFk"
        }),
         Album.belongsTo(models.Composers,{
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