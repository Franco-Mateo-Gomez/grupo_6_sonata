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
            notNull: true,
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
    }
    
    return Album;
}