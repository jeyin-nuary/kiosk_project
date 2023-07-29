'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // this.hasOne(models.item_order_customer,{
      //   sourceKey: "itemId",
      //   foreignKey: "itemId"
      // }),
      // this.hasMany(models.order_item, {
      //   sourceKey: "itemId",
      //   foreignKey: "itemId"
      // })
    }
  }
  Item.init({
    itemId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    }
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      },
    optionId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    price: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    type: {
      allowNull: false,
      type: DataTypes.ENUM,
      values: ["coffee", "juice", "food"]
    },
    amount: {
      allowNull: false,
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};