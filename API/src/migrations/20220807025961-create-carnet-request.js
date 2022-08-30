'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('carnetRequests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idStudent: {
        type: Sequelize.INTEGER,
        references:{
          model:'students',
          key: 'id'
        }
      },
      requestDate: {
        allowNull: true,
        type: Sequelize.DATE
      },
      closeDate: {
        type: Sequelize.DATE
      },
      state: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },
    {
      initialAutoIncrement: 200000,
    }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('carnetRequests');
  }
};