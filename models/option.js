'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Option extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     
     }
    }
  
  Option.init({
    optionId: {
      allowNull:false,
      type:DataTypes.INTEGER,
      },
    extraPrice: {
      allowNull:true,
      type:DataTypes.INTEGER,
      defaultValue: 0
      },
    shotPrice: {
      allowNull:true,
      type:DataTypes.INTEGER,
      defaultValue: 0
      },
    hot: {
      allowNull:true,
      type:DataTypes.BOOLEAN,
    },
    createdAt: {
      allowNull:false,
      type:DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      allowNull:false,
      type:DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },  
  },  {
    sequelize,
    modelName: 'Option',
  });
  return Option;
};