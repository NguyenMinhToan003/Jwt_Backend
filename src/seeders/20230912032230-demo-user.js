"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "datausers",
      [
        {
          email: "John Doe",
          password: "123",
          name: "test 1",
          gender: "male",
          address: "HCM city",
          phone: 123456,
        },
        {
          email: "John Doe2",
          password: "1234",
          name: "test 2",
          gender: "male",
          address: "HCM city",
          phone: 123456,
        },
        {
          email: "John Doe3",
          password: "12345",
          name: "test 3",
          gender: "male",
          address: "HCM city",
          phone: 123456,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
