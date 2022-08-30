'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class typeIngress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      typeIngress.hasMany(models.ingress,{
        foreignKey: 'idTypeIngress'
      })
    }
  }
  typeIngress.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'typeIngress',
  });
  return typeIngress;
};