'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Reviews', [
    { guestId: 2, propertyId: 1, content: 'Clean, great location.', rating: 4.8, communication: 4.3, checkIn: 4.8, cleanliness: 4.5},
    { guestId: 3, propertyId: 1, content: 'Great place & great price.', rating: 4.6, communication: 5, checkIn: 4.8, cleanliness: 3.8},
    { guestId: 4, propertyId: 2, content: 'Quaint. Pool was nice.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 4},
    { guestId: 3, propertyId: 2, content: 'Nice.', rating: 3.8, communication: 4.7, checkIn: 4.2, cleanliness: 3.5},
    { guestId: 4, propertyId: 3, content: 'Overall it is a nice quiet place, with a great view, easy parking and great location. Would stay there again.', rating: 3.8, communication: 4.2, checkIn: 3.6, cleanliness: 3.8},
    { guestId: 5, propertyId: 3, content: 'Better for summer time due to the weather conditions in winter. Also most of the business are closed due to the cold.', rating: 4, communication: 4.3, checkIn: 3.8, cleanliness: 4.2},
    { guestId: 3, propertyId: 4, content: 'What a lovely, cozy and homelike location! It had a beautiful ocean view very close to the beach.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
    { guestId: 2, propertyId: 4, content: 'I think the host was great and responded in a timely manner.', rating: 4, communication: 5, checkIn: 4.8, cleanliness: 5},
    { guestId: 5, propertyId: 5, content: 'Easy stroll to the beach, easy to resupply at a little row of shops about 3 blocks away.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 4.8},
    { guestId: 4, propertyId: 5, content: 'Nice, clean, affordable.', rating: 4.6, communication: 4, checkIn: 4.2, cleanliness: 5},
    { guestId: 2, propertyId: 6, content: 'Awesome host and great location.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 4.3},
    { guestId: 5, propertyId: 6, content: 'I came in the winter, it was nice.', rating: 3, communication: 4.6, checkIn: 4, cleanliness: 4.1},
    { guestId: 3, propertyId: 7, content: 'Sweet and simple.', rating: 5, communication: 4.8, checkIn: 5, cleanliness: 5},
    { guestId: 2, propertyId: 7, content: 'Street parking was convenient & just steps away from the house. Very accessible.', rating: 5, communication: 4.3, checkIn: 4.8, cleanliness: 5},
    { guestId: 4, propertyId: 8, content: 'Good hospitatlity, good location.', rating: 4.1, communication: 4, checkIn: 4, cleanliness: 4},
    { guestId: 3, propertyId: 8, content: 'A nice place to stay at.', rating: 4, communication: 4.2, checkIn: 4.3, cleanliness: 4.3},
    { guestId: 5, propertyId: 9, content: 'Ideal location, convenient walk to restaurants.', rating: 4, communication: 5, checkIn: 4, cleanliness: 4.7},
    { guestId: 3, propertyId: 9, content: 'We had a great time!.', rating: 5, communication: 4.8, checkIn: 4.8, cleanliness: 4},
    { guestId: 2, propertyId: 10, content: 'Tennessee Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
    { guestId: 4, propertyId: 10, content: 'Tennessee Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
    { guestId: 5, propertyId: 11, content: 'New York Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
    { guestId: 4, propertyId: 11, content: 'New York Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
    { guestId: 3, propertyId: 12, content: 'Kentucky Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
    { guestId: 2, propertyId: 12, content: 'Kentucky Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
    { guestId: 5, propertyId: 13, content: 'Indiana Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
    { guestId: 4, propertyId: 13, content: 'Reminds me of home!', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
    { guestId: 3, propertyId: 14, content: 'Illinois Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
    { guestId: 4, propertyId: 14, content: 'Illinois Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
    { guestId: 3, propertyId: 15, content: 'Atlantic Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
    { guestId: 5, propertyId: 15, content: 'Absolutely loved staying here! Very clean with a gorgeous view. Communication with the hosts was great. Recommending to all my friends. I would definitely stay here again!', rating: 5, communication: 5, checkIn: 4.8, cleanliness: 5},
    { guestId: 5, propertyId: 16, content: 'Ventnor Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
    { guestId: 2, propertyId: 16, content: 'Ventnor Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
    { guestId: 4, propertyId: 17, content: 'Marven Gardens was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
    { guestId: 3, propertyId: 17, content: 'Marven Gardens was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
    { guestId: 5, propertyId: 18, content: 'Pacific Ave was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
    { guestId: 2, propertyId: 18, content: 'Pacific Ave was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
    { guestId: 4, propertyId: 19, content: 'North Carolina Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
    { guestId: 3, propertyId: 19, content: 'North Carolina Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
    { guestId: 2, propertyId: 20, content: 'Pennsylvania Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
    { guestId: 5, propertyId: 20, content: 'Pennsylvania Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
    { guestId: 3, propertyId: 21, content: 'Park Place was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
    { guestId: 2, propertyId: 21, content: 'Park Place was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
    { guestId: 4, propertyId: 22, content: 'Boardwalk was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
    { guestId: 5, propertyId: 22, content: 'Boardwalk was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},

  ], {}),

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};