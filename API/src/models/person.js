'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class person extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      person.hasOne(models.student, {
          foreignKey: 'idPerson'
        }),
        person.belongsTo(models.typeidentification, {
          foreignKey: 'idTypeIdentification'
        }),
        person.hasMany(models.ingress, {
          foreignKey: 'idPersonIngress'
        })
    }
  }

  person.init({
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    identification: DataTypes.BIGINT,
    idTypeIdentification: DataTypes.INTEGER,
    idTypePerson: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'person'
  });
  return person;
};