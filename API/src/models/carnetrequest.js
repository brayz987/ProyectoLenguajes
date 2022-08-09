'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class carnetRequest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // carnetRequest.belongsTo(models.student, {
      //   foreignKey: 'id',
      //   targetKey: 'idStudent'
      // })
    }
  }
  carnetRequest.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    idStudent: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    requestDate: {
      type: DataTypes.DATE(6),
      defaultValue: DataTypes.NOW
    },
    state: {
      allowNull: true,
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'carnetRequest',
  });
  return carnetRequest;
};