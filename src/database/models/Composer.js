module.exports = (sequelize, dataTypes)=>{

    let alias = "Composers";

    let colums = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            notNull: true,
            autoIncrement : true
        },
        fullName:{
            type: dataTypes.STRING(50),
            notNull: true,
        },
        userName:{
            type: dataTypes.STRING(50),
            notNull: true,
            unique: true
        },
        email:{
            type: dataTypes.STRING(150),
            notNull: true,
            unique: true
        },
        password:{
            type: dataTypes.STRING(255),
            notNull: true,
        },
        image:{
            type: dataTypes.STRING(255),
            notNull: true,
            defaultValue:'/images/users/default.jpg'
        },
        description:{
            type: dataTypes.STRING(255),
            notNull: true,
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