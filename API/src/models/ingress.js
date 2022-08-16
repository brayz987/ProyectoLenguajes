'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ingress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ingress.belongsTo(models.person, {
        foreignKey: 'idPersonIngress'
      }),
      ingress.belongsTo(models.computer, {
        foreignKey: 'idComputer'
      })
    }
  }
  ingress.init({
    dateHourIngress: DataTypes.DATE,
    dateHourExit: DataTypes.DATE,
    motivo: DataTypes.TEXT,
    idPersonIngress: DataTypes.INTEGER,
    idComputer: DataTypes.INTEGER,
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
    modelName: 'ingress',
    tableName: 'ingress'
  });
  return ingress;
};