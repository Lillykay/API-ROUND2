"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA;
}
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = "Groups";
    return queryInterface.bulkInsert(options, [
      {
        organizerId: 1,
        name: "Astrology Enthusiasts Group",
        about:
          "Astrology Enthusiasts offers a platform for individuals to explore and understand themselves based on their zodiac sign's traits. Members can share insights, experiences, and advice on personal growth using astrology.",
        type: "in person",
        private: true,
        city: "Chicago",
        state: "IL",
      },

      {
        organizerId: 1,
        name: "Cooks and Conversations Group",
        about:
          "Members of Cooks and Conversations group often share recipes, cooking techniques, and tips with one another. They may discuss favorite recipes, unique ingredients, and different cooking methods, providing a platform for exchanging ideas and expanding culinary knowledge.",
        type: "in person",
        private: true,
        city: "Chicago",
        state: "IL",
      },

      {
        organizerId: 1,
        name: "Party Pioneers Group",
        about:
          "Imagine stepping into a world where the beats pulse through your veins. From glamorous soirées under the stars to jaw-dropping themed extravaganzas, you have the power to sculpt experiences that will be etched into the memories of those lucky enough to attend.",
        type: "in person",
        private: true,
        city: "Chicago",
        state: "IL",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Groups";
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        name: {
          [Op.in]: [
            "Astrology Enthusiasts Group",
            "Party Pioneers Group",
            "Cooks and Conversations Group",
          ],
        },
      },
      {}
    );
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
