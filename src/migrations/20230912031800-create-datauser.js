"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
<<<<<<< HEAD
    await queryInterface.createTable("Users", {
=======
    await queryInterface.createTable("Group", {
>>>>>>> 9b19918 (ORM update create delete user)
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
<<<<<<< HEAD
      email: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      gender: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      groupId: {
        type: Sequelize.INTEGER,
      },
=======

      groupName: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
>>>>>>> 9b19918 (ORM update create delete user)

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
<<<<<<< HEAD
    await queryInterface.dropTable("Users");
=======
    await queryInterface.dropTable("Group");
>>>>>>> 9b19918 (ORM update create delete user)
  },
};
