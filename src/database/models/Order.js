module.exports = function(sequelize, dataTypes){
    let alias = "Orders";
    let colums = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            notNull: true,
            autoIncrement : true
        },
        status:{
            type: dataTypes.STRING,
            notNull: true,
        },
        totalQuantity:{
            type: dataTypes.INTEGER,
            notNull: true,
        },
        totalPrice:{
            type: dataTypes.INTEGER,
            notNull: true,
        },
        date: {
            type: dataTypes.DATE,
            notNull: true,
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