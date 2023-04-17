module.exports = (sequelize, dataTypes)=>{

    let alias = "Composers";

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
            type: dataTypes.STRING(255),
            allowNull: false, //NOT NULL
            defaultValue:'No posee una descripción'
        }
    };

    let config = {
        tableName: "composers",
        timestamps: false
    };

    const Composer = sequelize.define(alias,colums,config);

    //Relacionamos un Compositor a muchos Albumes
    Composer.associate = function (models) {
        Composer.hasMany(models.Albums, {
            as: "albums", //Nombre de la relación
            foreignKey: "idComposer_Fk"
        })
    }

    return Composer;
}