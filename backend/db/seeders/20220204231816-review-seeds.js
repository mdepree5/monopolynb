'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Reviews', [
    { guestId: 2, propertyId: 1, content: 'Mediterranean Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
    { guestId: 2, propertyId: 2, content: 'Baltic Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
    { guestId: 2, propertyId: 3, content: 'Oriental Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
    { guestId: 2, propertyId: 4, content: 'Vermont Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
    { guestId: 2, propertyId: 5, content: 'Connecticut Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
    { guestId: 2, propertyId: 6, content: 'St. Charles Place was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
    { guestId: 2, propertyId: 7, content: 'States Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
    { guestId: 2, propertyId: 8, content: 'Virginia Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
    { guestId: 2, propertyId: 9, content: 'St. James Place was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
    { guestId: 2, propertyId: 10, content: 'Tennessee Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
    { guestId: 2, propertyId: 11, content: 'New York Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
    { guestId: 2, propertyId: 12, content: 'Kentucky Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
    { guestId: 2, propertyId: 13, content: 'Indiana Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
    { guestId: 2, propertyId: 14, content: 'Illinois Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
    { guestId: 2, propertyId: 15, content: 'Atlantic Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
    { guestId: 2, propertyId: 16, content: 'North Carolina Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
    { guestId: 2, propertyId: 17, content: 'Pennsylvania Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
    { guestId: 2, propertyId: 18, content: 'Park Place was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
    { guestId: 2, propertyId: 19, content: 'Boardwalk was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},

  ], {}),

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};