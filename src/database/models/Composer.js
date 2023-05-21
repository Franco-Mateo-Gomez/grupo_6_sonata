module.exports = (sequelize, dataTypes)=>{

    let alias = "Composers";

    let colums = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement : true
        },
        fullName:{
            type: dataTypes.STRING(50),
            allowNull: false,
        },
        userName:{
            type: dataTypes.STRING(50),
            allowNull: false,
            unique: true
        },
        email:{
            type: dataTypes.STRING(150),
            allowNull: false,
            unique: true
        },
        password:{
            type: dataTypes.STRING(255),
            allowNull: false,
        },
        image:{
            type: dataTypes.STRING(255),
            allowNull: false,
            defaultValue:'/images/users/default.jpg'
        },
        description:{
            type: dataTypes.STRING(255),
            allowNull: false,
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
            foreignKey: "id"
        })
    }

    return Composer;
}