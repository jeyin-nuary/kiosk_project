'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order_Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    // this.hasMany(models.item_order_customer,{
    //   sourceKey: 'orderCustomerId',
    //   foreignKey: 'orderCustomerId'
    // })
    }
  }
  Order_Customer.init({
    orderCustomerId: {
      allowNull:false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      },
    state: {
      allowNull:false,
      type: DataTypes.BOOLEAN,
      },
    createdAt: {
      allowNull:false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
},
    updatedAt: {
      allowNull:false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
},    
}, {
    sequelize,
    modelName: 'Order_Customer',
  });
  return Order_Customer;
};