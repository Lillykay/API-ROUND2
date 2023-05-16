"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = "Attendances";
    return queryInterface.bulkInsert(options, [
      {
        id: 1,
        eventId: 1,
        userId: 1,
        status: "in person",
      },
      {
        id: 2,
        eventId: 2,
        userId: 2,
        status: "in person",
      },
      {
        id: 3,
        eventId: 3,
        userId: 3,
        status: "in person",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Attendances";
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        id: {
          [Op.in]: [1, 2, 3],
        },
      },
      {}
    );
  },
};
