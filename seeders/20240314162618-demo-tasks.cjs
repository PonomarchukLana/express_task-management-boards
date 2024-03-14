'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tasks', [{
      id: 1,
      title: 'first task',
      description: 'this is first task',
      status: 'todo',
      createdAt: new Date('2024-02-14'),
      updatedAt: new Date('2024-02-14')
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tasks', null, {});
  }
};
