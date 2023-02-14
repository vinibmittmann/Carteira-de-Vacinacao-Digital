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


    return queryInterface.bulkInsert('Historicos', [{
      vacina: 1,
      user: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      vacina: 2,
      user: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      vacina: 3,
      user: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      vacina: 4,
      user: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      vacina: 5,
      user: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      vacina: 6,
      user: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      vacina: 7,
      user: 1,
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
  }
};
