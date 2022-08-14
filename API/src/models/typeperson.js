'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class typePerson extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  typePerson.init({
    name: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE(6),
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE(6),
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'typePerson',
  });
  return typePerson;
};