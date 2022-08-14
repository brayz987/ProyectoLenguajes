'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class typeidentification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      typeidentification.hasMany(models.person, {
        foreignKey: 'idTypeIdentification'
      })
    }
  }
  typeidentification.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(45)
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
    modelName: 'typeidentification',
    tableName: 'typeidentification'
  });
  return typeidentification;
};