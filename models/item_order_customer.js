'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item_Order_Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // this.belongsTo(models.item,{
      //   targetKey: "itemId",
      //   foreignKey: "itemId"
      // }),
      // this.belongsTo(models.order_customer,{
      //   targetKey: "orderCustomerId",
      //   foreignKey: "orderCustomerId"
      // })
    }
  }
  Item_Order_Customer.init({
    itemId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    orderCustomerId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    amount: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    option: {
      allowNull: false,
      type:DataTypes.JSON,
    },
    price: {
      allowNull: false,
      type:DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'Item_Order_Customer',
  });
  return Item_Order_Customer;
};