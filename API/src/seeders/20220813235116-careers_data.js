'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {


    await queryInterface.bulkInsert('careers', [{
      'id': 1,
      'name': 'ADMINISTRACIÓN DE EMPRESAS',
      'createdAt': new Date(),
      'updatedAt' : new Date()
    },{
      'id': 2,
      'name': 'CONTADURÍA PÚBLICA Y FINANZAS INTERNACIONALES',
      'createdAt': new Date(),
      'updatedAt' : new Date()
    },{
      'id': 3,
      'name': 'DISEÑO DE PRODUCTO',
      'createdAt': new Date(),
      'updatedAt' : new Date()
    },{
      'id': 4,
      'name': 'FINANZAS Y COMERCIO EXTERIOR',
      'createdAt': new Date(),
      'updatedAt' : new Date()
    },{
      'id': 5,
      'name': 'INGENIERÍA DE SOFTWARE',
      'createdAt': new Date(),
      'updatedAt' : new Date()
    },{
      'id': 6,
      'name': 'INGENIERÍA INDUSTRIAL',
      'createdAt': new Date(),
      'updatedAt' : new Date()
    },{
      'id': 7,
      'name': 'MARKETING Y LOGÍSTICA',
      'createdAt': new Date(),
      'updatedAt' : new Date()
    },{
      'id': 8,
      'name': 'NEGOCIOS INTERNACIONALES',
      'createdAt': new Date(),
      'updatedAt' : new Date()
    }])
     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('careers', null, {});
  }
};
