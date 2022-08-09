'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ingressGuest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // ingressGuest.belongsTo(models.guest, {
      //   foreignKey: 'id',
      //   targetKey: 'idGuestIngress'
      // })
    }
  }
  ingressGuest.init({
    dateHourIngress: DataTypes.DATE,
    dateHourExit: DataTypes.DATE,
    motivo: DataTypes.TEXT,
    idGuestIngress: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ingressGuest',
  });
  return ingressGuest;
};