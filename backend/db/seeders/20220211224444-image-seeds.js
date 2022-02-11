'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Images', [
    { propertyId: 1, imageURL:'' },
    { propertyId: 1, imageURL:'' },
    { propertyId: 2, imageURL:'' },
    { propertyId: 2, imageURL:'' },
    { propertyId: 3, imageURL:'' },
    { propertyId: 3, imageURL:'' },
    { propertyId: 4, imageURL:'' },
    { propertyId: 4, imageURL:'' },
    { propertyId: 5, imageURL:'' },
    { propertyId: 5, imageURL:'' },
    { propertyId: 6, imageURL:'' },
    { propertyId: 6, imageURL:'' },
    { propertyId: 7, imageURL:'' },
    { propertyId: 7, imageURL:'' },
    { propertyId: 8, imageURL:'' },
    { propertyId: 8, imageURL:'' },
    { propertyId: 9, imageURL:'' },
    { propertyId: 9, imageURL:'' },
    { propertyId: 10, imageURL:'' },
    { propertyId: 10, imageURL:'' },
    { propertyId: 11, imageURL:'' },
    { propertyId: 11, imageURL:'' },
    { propertyId: 12, imageURL:'' },
    { propertyId: 12, imageURL:'' },
    { propertyId: 13, imageURL:'' },
    { propertyId: 13, imageURL:'' },
    { propertyId: 14, imageURL:'' },
    { propertyId: 14, imageURL:'' },
    { propertyId: 15, imageURL:'' },
    { propertyId: 15, imageURL:'' },
    { propertyId: 16, imageURL:'' },
    { propertyId: 16, imageURL:'' },
    { propertyId: 17, imageURL:'' },
    { propertyId: 17, imageURL:'' },
    { propertyId: 18, imageURL:'' },
    { propertyId: 18, imageURL:'' },
    { propertyId: 19, imageURL:'' },
    { propertyId: 19, imageURL:'' },
  ], {}),
  
  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Images', null, {});
  }
};
