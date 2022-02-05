'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Properties', [
    { hostId: 2, title: 'Mediterranean Avenue', description: '', numberOfBeds: '', price: 10, address: '', state: '', zipcode: '' },
    { hostId: 2, title: 'Baltic Avenue', description: '', numberOfBeds: '', price: 10, address: '', state: '', zipcode: '' },
    { hostId: 2, title: 'Oriental Avenue', description: '', numberOfBeds: '', price: 10, address: '', state: '', zipcode: '' },
    { hostId: 2, title: 'Vermont Avenue', description: '', numberOfBeds: '', price: 10, address: '', state: '', zipcode: '' },
    { hostId: 2, title: 'Connecticut Avenue', description: '', numberOfBeds: '', price: 10, address: '', state: '', zipcode: '' },
    { hostId: 2, title: 'St. Charles Place', description: '', numberOfBeds: '', price: 10, address: '', state: '', zipcode: '' },
    { hostId: 2, title: 'States Avenue', description: '', numberOfBeds: '', price: 10, address: '', state: '', zipcode: '' },
    { hostId: 2, title: 'Virginia Avenue', description: '', numberOfBeds: '', price: 10, address: '', state: '', zipcode: '' },
    { hostId: 2, title: 'St. James Place', description: '', numberOfBeds: '', price: 10, address: '', state: '', zipcode: '' },
    { hostId: 2, title: 'Tennessee Avenue', description: '', numberOfBeds: '', price: 10, address: '', state: '', zipcode: '' },
    { hostId: 2, title: 'New York Avenue', description: '', numberOfBeds: '', price: 10, address: '', state: '', zipcode: '' },
    { hostId: 2, title: 'Kentucky Avenue', description: '', numberOfBeds: '', price: 10, address: '', state: '', zipcode: '' },
    { hostId: 2, title: 'Indiana Avenue', description: '', numberOfBeds: '', price: 10, address: '', state: '', zipcode: '' },
    { hostId: 2, title: 'Illinois Avenue', description: '', numberOfBeds: '', price: 10, address: '', state: '', zipcode: '' },
    { hostId: 2, title: 'Atlantic Avenue', description: '', numberOfBeds: '', price: 10, address: '', state: '', zipcode: '' },
    { hostId: 2, title: 'North Carolina Avenue', description: '', numberOfBeds: '', price: 10, address: '', state: '', zipcode: '' },
    { hostId: 2, title: 'Pennsylvania Avenue', description: '', numberOfBeds: '', price: 10, address: '', state: '', zipcode: '' },
    { hostId: 2, title: 'Park Place', description: '', numberOfBeds: '', price: 10, address: '', state: '', zipcode: '' },
    { hostId: 2, title: 'Boardwalk', description: '', numberOfBeds: '', price: 10, address: '', state: '', zipcode: '' },

  ], {}),

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Properties', null, {});
  }
};

