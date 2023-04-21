module.exports = (sequelize, dataTypes)=>{
    let alias = "Users";

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
        }
    }

    let config = {
        tableName: "users",
        timestamps: false
    }
    
    const User = sequelize.define(alias, colums, config);

    return User;
}