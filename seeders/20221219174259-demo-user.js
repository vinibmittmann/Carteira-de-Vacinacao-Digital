'use strict';

/** @type {import('sequelize-cli').Migration} */

const bcrypt = require('bcryptjs')

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
     * 
    */

     return queryInterface.bulkInsert('Users', [{
      name: 'Adriano Diego Zortea',
      cpf: '07943630912',
      email: 'zorteaadriano@gmail.com',
      birth: new Date('1998-04-11'),
      password: bcrypt.hashSync('123456', await bcrypt.genSalt(15)),
      createdAt: new Date(),
      updatedAt: new Date(),
      type: '0',
    },{
      name: 'Adriano Diego Zortea',
      cpf: '07943630914',
      email: 'adriano-pzo2@hotmail.com',
      birth: new Date('1998-04-11'),
      password: bcrypt.hashSync('123456', await bcrypt.genSalt(15)),
      createdAt: new Date(),
      updatedAt: new Date(),
      type: '1',
    }]);

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    return queryInterface.bulkDelete('Users', null, {});
  }
};
