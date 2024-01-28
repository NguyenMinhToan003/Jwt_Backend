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

    // Thêm dữ liệu vào bảng 'datausers'
    await queryInterface.bulkInsert(
      "datausers",
      [
        {
          email: "John Doe",
          password:
            "$2b$10$weFM2ydWu1TZeo25nLIRyeL7fJ.IzJSRg07OmrA1luB6aM1Tv8z2S",
          name: "test 1",
          gender: "male",
          address: "HCM city",
          phone: 1,
        },
        {
          email: "John Doe2",
          password:
            "$2b$10$weFM2ydWu1TZeo25nLIRyeL7fJ.IzJSRg07OmrA1luB6aM1Tv8z2S",
          name: "test 2",
          gender: "male",
          address: "HCM city",
          phone: 1,
        },
        {
          email: "John Doe3",
          password:
            "$2b$10$weFM2ydWu1TZeo25nLIRyeL7fJ.IzJSRg07OmrA1luB6aM1Tv8z2S",
          name: "test 3",
          gender: "male",
          address: "HCM city",
          phone: 1,
        },
        {
          email: "123",
          name: "Toan Admin",
          gender: "male",
          address: "HCM city",
          phone: 123,
          groupId: 1,
          password:
            "$2b$10$edkoBpxCTQ7nrh08Ik1uh.q.xyZUs0qgxuTUKMPUam0H8kW2Bpp0i",
        },
      ],
      {}
    );

    // Thêm dữ liệu vào bảng 'groups'
    await queryInterface.bulkInsert(
      "groups",
      [
        {
          name: "Leader",
          description: "Leader",
        },
        {
          name: "Dev",
          description: "Developer",
        },
        {
          name: "Guest",
          description: "Guest",
        },
        {
          name: "User",
          description: "User",
        },
      ],
      {}
    );

    // Thêm dữ liệu vào bảng 'roles'
    await queryInterface.bulkInsert(
      "roles",
      [
        {
          url: "/account",
          description: "getAccount",
        },
        {
          url: "/user/read",
          description: "Read List User",
        },
        {
          url: "/user/create",
          description: "Create  User",
        },
        {
          url: "/user/update",
          description: "Update User",
        },
        {
          url: "/user/delete",
          description: "Delete User",
        },
        {
          url: "/role/read",
          description: "Read List Role",
        },
        {
          url: "/role/create",
          description: "Create Role",
        },
        {
          url: "/role/update",
          description: "Update Role",
        },
        {
          url: "/role/delete",
          description: "Delete Role",
        },
        {
          url: "/group/read",
          description: "Read List Group",
        },
        {
          url: "/group/create",
          description: "Create Group",
        },
        {
          url: "/group/update",
          description: "Update Group",
        },
        {
          url: "/group/delete",
          description: "Delete Group",
        },
        {
          url: "/groupwithrole",
          description: "Group with Role",
        },
        {
          url: "/role",
          description: "Read All Role",
        },
        {
          url: "/groupwithrole/create",
          description: "Create Group with Role",
        },
        {
          url: "/ebook/upload",
          description: "Upload Ebook",
        },
        {
          url: "/ebook/read",
          description: "Read Ebook",
        },
        {
          url: "/ebook/detail",
          description: "Read Detail Ebook",
        },
      ],
      {}
    );

    // Thêm dữ liệu vào bảng 'group_roles'
    await queryInterface.bulkInsert(
      "group_roles",
      [
        {
          groupId: 1,
          roleId: 1,
        },
        {
          groupId: 1,
          roleId: 2,
        },
        {
          groupId: 1,
          roleId: 3,
        },
        {
          groupId: 1,
          roleId: 4,
        },
        {
          groupId: 1,
          roleId: 5,
        },
        {
          groupId: 1,
          roleId: 6,
        },
        {
          groupId: 1,
          roleId: 7,
        },
        {
          groupId: 1,
          roleId: 8,
        },
        {
          groupId: 1,
          roleId: 8,
        },
        {
          groupId: 1,
          roleId: 10,
        },
        {
          groupId: 1,
          roleId: 11,
        },
        {
          groupId: 1,
          roleId: 12,
        },
        {
          groupId: 1,
          roleId: 13,
        },
        {
          groupId: 1,
          roleId: 14,
        },
        {
          groupId: 1,
          roleId: 15,
        },
        {
          groupId: 1,
          roleId: 16,
        },
        {
          groupId: 1,
          roleId: 17,
        },
        {
          groupId: 1,
          roleId: 18,
        },
        {
          groupId: 1,
          roleId: 19,
        },
        {
          groupId: 1,
          roleId: 20,
        },
        // Thêm các dòng dữ liệu khác tại đây...
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
