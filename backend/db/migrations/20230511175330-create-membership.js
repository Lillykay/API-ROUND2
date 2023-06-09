"use strict";
let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA;
}
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "Memberships",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          onDelete: "CASCADE",

          references: {
            model: "Users",
            key: "id",
          },
        },
        groupId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          onDelete: "CASCADE",

          references: {
            model: "Groups",
            key: "id",
          },
        },
        status: {
          type: Sequelize.ENUM("pending", "member", "co-host", "host"),
          allowNull: false,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
      },
      options
    );
  },
  async down(queryInterface, Sequelize) {
    options.tableName = "Memberships";
    await queryInterface.dropTable(options);
  },
};
