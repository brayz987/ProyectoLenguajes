'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('typeidentifications', [{
      'id': 1,
      'name': 'Cedula de Ciudadania',
      'createdAt': new Date(),
      'updatedAt' : new Date()
    },
    {
      'id': 2,
      'name': 'Tarjeta de Identidad',
      'createdAt': new Date(),
      'updatedAt' : new Date()
    },
  ])

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('typeidentifications', null, {});
  }
};
