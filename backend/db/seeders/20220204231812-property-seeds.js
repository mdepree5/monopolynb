'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Properties', [
    { hostId: 2, title: 'Mediterranean Avenue', description: '', numberOfBeds: 4, price: 10, address: '', state: '', zipcode: 12345 },
    { hostId: 2, title: 'Baltic Avenue', description: '', numberOfBeds: 4, price: 10, address: '', state: '', zipcode: 12345 },
    { hostId: 2, title: 'Oriental Avenue', description: '', numberOfBeds: 4, price: 10, address: '', state: '', zipcode: 12345 },
    { hostId: 2, title: 'Vermont Avenue', description: '', numberOfBeds: 4, price: 10, address: '', state: '', zipcode: 12345 },
    { hostId: 2, title: 'Connecticut Avenue', description: '', numberOfBeds: 4, price: 10, address: '', state: '', zipcode: 12345 },
    { hostId: 2, title: 'St. Charles Place', description: '', numberOfBeds: 4, price: 10, address: '', state: '', zipcode: 12345 },
    { hostId: 2, title: 'States Avenue', description: '', numberOfBeds: 4, price: 10, address: '', state: '', zipcode: 12345 },
    { hostId: 2, title: 'Virginia Avenue', description: '', numberOfBeds: 4, price: 10, address: '', state: '', zipcode: 12345 },
    { hostId: 2, title: 'St. James Place', description: '', numberOfBeds: 4, price: 10, address: '', state: '', zipcode: 12345 },
    { hostId: 2, title: 'Tennessee Avenue', description: '', numberOfBeds: 4, price: 10, address: '', state: '', zipcode: 12345 },
    { hostId: 2, title: 'New York Avenue', description: '', numberOfBeds: 4, price: 10, address: '', state: '', zipcode: 12345 },
    { hostId: 2, title: 'Kentucky Avenue', description: '', numberOfBeds: 4, price: 10, address: '', state: '', zipcode: 12345 },
    { hostId: 2, title: 'Indiana Avenue', description: '', numberOfBeds: 4, price: 10, address: '', state: '', zipcode: 12345 },
    { hostId: 2, title: 'Illinois Avenue', description: '', numberOfBeds: 4, price: 10, address: '', state: '', zipcode: 12345 },
    { hostId: 2, title: 'Atlantic Avenue', description: '', numberOfBeds: 4, price: 10, address: '', state: '', zipcode: 12345 },
    { hostId: 2, title: 'North Carolina Avenue', description: '', numberOfBeds: 4, price: 10, address: '', state: '', zipcode: 12345 },
    { hostId: 2, title: 'Pennsylvania Avenue', description: '', numberOfBeds: 4, price: 10, address: '', state: '', zipcode: 12345 },
    { hostId: 2, title: 'Park Place', description: '', numberOfBeds: 4, price: 10, address: '', state: '', zipcode: 12345 },
    { hostId: 2, title: 'Boardwalk', description: '', numberOfBeds: 4, price: 10, address: '', state: '', zipcode: 12345 },

  ], {}),

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Properties', null, {});
  }
};

