'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ingress', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
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
      idPersonIngress: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'people',
          key: 'id'
        }
      },
      idComputer: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'computers',
          key: 'id'
        }
      },
      idTypeIngress: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'typeIngresses',
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
    },
    {
      initialAutoIncrement: 100000,
    }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ingress');
  }
};