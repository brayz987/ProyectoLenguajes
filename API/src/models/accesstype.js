'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class accessType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      accessType.belongsTo(models.guest, {
        foreignKey: 'idInvitado'
      });
      accessType.belongsTo(models.computer, {
        foreignKey: 'idComputer'
      });
      accessType.belongsTo(models.student, {
        foreignKey: 'idStudent'
      });  
    }
  }
  accessType.init({
    idGuest: DataTypes.INTEGER,
    idStudent: DataTypes.INTEGER,
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
    modelName: 'accessType',
  });
  return accessType;
};