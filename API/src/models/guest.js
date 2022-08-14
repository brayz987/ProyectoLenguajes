'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class guest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      guest.belongsTo(models.typeidentification, {
        foreignKey: 'idTypeIdentification'
      });
      guest.hasMany(models.ingressGuest, {
        foreignKey: 'idGuestIngress',
      });
      guest.hasMany(models.accessType, {
        foreignKey: 'idInvitado',
      });
    }
  }
  guest.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nombre: {
      allowNull: false,
      type: DataTypes.STRING(44)
    },
    apellido: {
      allowNull: true,
      type: DataTypes.STRING(45)
    },
    identificacion: {
      allowNull: false,
      type: DataTypes.BIGINT
    },
    idTypeIdentification: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
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
    modelName: 'guest',
    tableName: 'guest'
  });
  return guest;
};