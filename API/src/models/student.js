'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // student.hasMany(models.accessType, {
      //   foreignKey: 'idStudent'
      // });
      // student.hasMany(models.carnetRequest, {
      //   foreignKey: 'idStudent'
      // });
      // student.belongsTo(models.career, {
      //   foreignKey: 'id',
      //   targetKey: 'idCareer'
      // })
    }
  }
  student.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    studentCode: {
      allowNull: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: true,
      type: DataTypes.STRING(45)
    },
    lastname: {
      allowNull: true,
      type: DataTypes.STRING(45)
    },
    email: {
      allowNull: true,
      type: DataTypes.STRING(45)
    },
    cellphone: DataTypes.BIGINT,
    idCareer: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    promotion: {
      allowNull: true,
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'student',
  });
  return student;
};