'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('users', [{
      'id': 1,
      'name': 'App User',
      'email': 'app@uniempresarial.edu.co',
      'password' : '$2b$10$hm5N3cnEk8D.TL30G9F/YeLsg0JtFqG1235iCCQam8YjlnGQCmZI.',
      'createdAt': new Date(),
      'updatedAt' : new Date()
    }
  ])

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
