'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('typePeople', [{
      'id': 1,
      'name': 'Invitado',
      'createdAt': new Date(),
      'updatedAt' : new Date()
    },
    {
      'id': 2,
      'name': 'Estudiante',
      'createdAt': new Date(),
      'updatedAt' : new Date()
    },
  ])

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('typePeople', null, {});
  }
};
