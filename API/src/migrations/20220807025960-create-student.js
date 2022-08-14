'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      studentCode: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      idCareer: {
        type: Sequelize.INTEGER,
        references: {
          model: 'careers',
          key: 'id'
        }
      },
      promotion: {
        type: Sequelize.INTEGER
      },
      idPerson: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'people',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('students');
  }
};