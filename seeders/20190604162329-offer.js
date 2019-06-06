'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   /*
      offerName: {
        type: DataTypes.ENUM("1-on-1", "large-grp", "small-grp")
      }
   */
   return queryInterface.bulkInsert('offers', [{
     offerName: "1-on-1",
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
    offerName: "large-grp",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    offerName: "small-grp",
    createdAt: new Date(),
    updatedAt: new Date()
  }])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
