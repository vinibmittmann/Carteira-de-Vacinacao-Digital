'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

     return queryInterface.bulkInsert('Vacinas', [{
      name: 'BCG',
      manufacturer: 'undefined',
      dosage: 4,
      frequency: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'Hepatite A',
      manufacturer: 'undefined',
      dosage: 5,
      frequency: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'Hepatite B',
      manufacturer: 'undefined',
      dosage: 3,
      frequency: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'Febre amarela',
      manufacturer: 'undefined',
      dosage: 2,
      frequency: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'Tetraviral',
      manufacturer: 'undefined',
      dosage: 10,
      frequency: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'Varicela',
      manufacturer: 'undefined',
      dosage: 1,
      frequency: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'DTP',
      manufacturer: 'undefined',
      dosage: 0,
      frequency: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);

      

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     return queryInterface.bulkDelete('Vacinas', null, {});


  }
};
