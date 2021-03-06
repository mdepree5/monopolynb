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
    { guestId: 2, propertyId: 10, content: 'Our stay was great! So nice that each room has its own bathroom! The hot tub was perfect for nights', rating: 5, communication: 5, checkIn: 4.8, cleanliness: 5},
    { guestId: 4, propertyId: 10, content: 'Tennessee Avenue was a nice place. Next time we come out to NJ we will look for something closer to the beach', rating: 4, communication: 4, checkIn: 4, cleanliness: 4},
    { guestId: 5, propertyId: 11, content: 'Nice apartment, very close to the beach!', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
    { guestId: 4, propertyId: 11, content: 'Enjoyed our time', rating: 5, communication: 5, checkIn: 5, cleanliness: 5},
    { guestId: 3, propertyId: 12, content: 'Great weather while we were here. We will be back again next summer', rating: 5, communication: 4.3, checkIn: 4.5, cleanliness: 4.5},
    { guestId: 2, propertyId: 12, content: 'Great location to get away. I work remote and come here a few times a year to get away from the midwest.', rating: 5, communication: 5, checkIn: 5, cleanliness: 4.5},
    { guestId: 5, propertyId: 13, content: 'Our first family vacation... a success!', rating: 5, communication: 5, checkIn: 5, cleanliness: 5},
    { guestId: 4, propertyId: 13, content: 'Reminds me of home!', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
    { guestId: 3, propertyId: 14, content: 'Fantastic place', rating: 5, communication: 5, checkIn: 4, cleanliness: 5},
    { guestId: 4, propertyId: 14, content: 'Nice place, our extended family met up here for holidays. Beautiful city', rating: 4.8, communication: 4.3, checkIn: 4.8, cleanliness: 5},
    { guestId: 3, propertyId: 15, content: 'Breathtaking.', rating: 5, communication: 5, checkIn: 5, cleanliness: 5},
    { guestId: 5, propertyId: 15, content: 'Absolutely loved staying here! Very clean with a gorgeous view. Communication with the hosts was great. Recommending to all my friends. I would definitely stay here again!', rating: 5, communication: 5, checkIn: 4.8, cleanliness: 5},
    { guestId: 5, propertyId: 16, content: 'Renovated just before we got here. Everything is pristine.', rating: 5, communication: 4.8, checkIn: 4.8, cleanliness: 5},
    { guestId: 2, propertyId: 16, content: 'Top class property. Although we had some issues with check in, we were delayed and came in a few hours later than expected.', rating: 5, communication: 4.3, checkIn: 4, cleanliness: 4.8},
    { guestId: 4, propertyId: 17, content: 'BEAUFITUL patio, amazing stay in the summer.', rating: 5, communication: 5, checkIn: 5, cleanliness: 5},
    { guestId: 3, propertyId: 17, content: 'Our family has come here for years. We always look forward to it!', rating: 5, communication: 4.8, checkIn: 5, cleanliness: 5},
    { guestId: 5, propertyId: 18, content: 'We come here because it is so close to the ocean. The kids love it, and we always look forward to coming in the summer.', rating: 5, communication: 4.2, checkIn: 4.8, cleanliness: 5},
    { guestId: 2, propertyId: 18, content: 'One of the cleanest places I\'ve stayed.', rating: 4.8, communication: 4.9, checkIn: 4.9, cleanliness: 5},
    { guestId: 4, propertyId: 19, content: 'Wonderful place. Much quieter than other places closer to the ocean.', rating: 4.7, communication: 4, checkIn: 4, cleanliness: 4.6},
    { guestId: 3, propertyId: 19, content: 'I always love the selection of books and tea the host provides! My favorite stay on the East Coast.', rating: 4, communication: 4.4, checkIn: 4.6, cleanliness: 4.6},
    { guestId: 2, propertyId: 20, content: 'Big enough for our family reunions. We love it!', rating: 4.8, communication: 4.8, checkIn: 4.8, cleanliness: 4.8},
    { guestId: 5, propertyId: 20, content: 'So much room! So many rooms!', rating: 4.9, communication: 5, checkIn: 4.8, cleanliness: 4.6},
    { guestId: 3, propertyId: 21, content: 'This place is luxurious. The pool is an amazing touch.', rating: 5, communication: 5, checkIn: 5, cleanliness: 5},
    { guestId: 2, propertyId: 21, content: 'Park place rules.', rating: 5, communication: 5, checkIn: 5, cleanliness: 5},
    { guestId: 4, propertyId: 22, content: 'Unbeatable location.', rating: 5, communication: 5, checkIn: 5, cleanliness: 5},
    { guestId: 5, propertyId: 22, content: 'Boardwalk offers everything one could ask for in a Monopolynb property.', rating: 5, communication: 5, checkIn: 5, cleanliness: 5},

  ], {}),

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};