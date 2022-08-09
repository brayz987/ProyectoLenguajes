'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class career extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // career.hasMany(models.student, {
      //   foreignKey: 'idCareer'
      // });
    }
  }
  career.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'career',
  });
  return career;
};