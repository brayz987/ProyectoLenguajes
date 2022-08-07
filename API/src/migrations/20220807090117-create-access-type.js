'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('accessTypes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idInvitado: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'guests',
          key: 'id'
        }
      },
      idStudent: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'students',
          key: 'id'
        }
      },
      idComputer: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'computers',
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
    await queryInterface.dropTable('accessTypes');
  }
};