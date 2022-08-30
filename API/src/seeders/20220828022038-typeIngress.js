'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('typeIngresses', [{
      'id': 1,
      'name': 'Portatil',
      'createdAt': new Date(),
      'updatedAt' : new Date()
    },
    {
      'id': 2,
      'name': 'Invitados',
      'createdAt': new Date(),
      'updatedAt' : new Date()
    },
    {
      'id': 3,
      'name': 'carnet',
      'createdAt': new Date(),
      'updatedAt' : new Date()
    },
  ])

  },

  async down (queryInterface, Sequelize) {


  }
};
