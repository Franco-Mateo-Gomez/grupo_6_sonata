module.exports = (sequelize, dataTypes)=>{
    let alias = "Users";

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
        }
    }

    let config = {
        tableName: "users",
        timestamps: false
    }
    
    const User = sequelize.define(alias, colums, config);
    User.associate = function (models) {
        User.hasMany(models.Orders,{
            as: "orders", //Nombre de la relación
            foreignKey: "idUser_Fk"
        })
    }
    

    return User;
}