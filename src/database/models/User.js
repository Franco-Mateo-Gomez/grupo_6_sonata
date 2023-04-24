module.exports = (sequelize, dataTypes)=>{
    let alias = "Users";

    let colums = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false, //NOT NULL
            autoIncrement : true
        },
        fullName:{
            type: dataTypes.STRING(50),
            allowNull: false //NOT NULL
        },
        userName:{
            type: dataTypes.STRING(50),
            allowNull: false, //NOT NULL
            unique: true
        },
        email:{
            type: dataTypes.STRING(50),
            allowNull: false, //NOT NULL
            unique: true
        },
        password:{
            type: dataTypes.STRING(255),
            allowNull: false, //NOT NULL
        },
        image:{
            type: dataTypes.STRING(255),
            allowNull: false, //NOT NULL
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