module.exports = function(sequelize, dataTypes){
    let alias = "Orders";
    let colums = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false, //NOT NULL
            autoIncrement : true
        },
        status:{
            type: dataTypes.STRING,
            allowNull: false //NOT NULL
        },
        totalQuantity:{
            type: dataTypes.INTEGER,
            allowNull: false, //NOT NULL
        },
        totalPrice:{
            type: dataTypes.INTEGER,
            allowNull: false, //NOT NULL
        },
        date: {
            type: dataTypes.DATE,
            allowNull: false
        }
    }
    let config = {
        tableName: "orders",
        timestamps: false,
    }
    const Order = sequelize.define(alias, colums, config);
    
    //Una orden tiene muchos albumes
    Order.associate = function(models){
        Order.belongsToMany(models.Albums, {
            as: "albums", //Nombre de la relación
            through: "ordersalbums",
            foreignKey: "idOrder_Fk",
            otherkey: "idAlbum_Fk",
            timestamps: false
        })
    }
    return Order;
}