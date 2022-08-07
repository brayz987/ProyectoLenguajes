'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ingressGuests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dateHourIngress: {
        type: Sequelize.DATE
      },
      dateHourExit: {
        type: Sequelize.DATE
      },
      motivo: {
        type: Sequelize.TEXT
      },
      idGuestIngress: {
        type: Sequelize.INTEGER,
        references: {
          model: 'guests',
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
    await queryInterface.dropTable('ingressGuests');
  }
};