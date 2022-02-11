'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Properties', [
    { hostId: 1, title: 'Mediterranean Avenue', numberOfBeds: 4, price: 10, address: 'Mediterranean Ave', city: 'Atlantic City', state: 'New Jersey', zipcode: '08401' },
    { hostId: 1, title: 'Baltic Avenue', numberOfBeds: 4, price: 20, address: 'Baltic Ave', city: 'Atlantic City', state: 'New Jersey', zipcode: '08401' },
    { hostId: 1, title: 'Oriental Avenue', numberOfBeds: 4, price: 30, address: 'Oriental Ave', city: 'Atlantic City', state: 'New Jersey', zipcode: '08401' },
    { hostId: 1, title: 'Vermont Avenue', numberOfBeds: 4, price: 30, address: 'N Vermont Ave', city: 'Atlantic City', state: 'New Jersey', zipcode: '08401' },
    { hostId: 1, title: 'Connecticut Avenue', numberOfBeds: 4, price: 40, address: 'N Connecticut Ave', city: 'Atlantic City', state: 'New Jersey', zipcode: '08401' },
    { hostId: 1, title: 'St. Charles Place', numberOfBeds: 4, price: 50, address: 'St Charles Pl', city: 'Ocean City', state: 'New Jersey', zipcode: '08226' },
    { hostId: 1, title: 'States Avenue', numberOfBeds: 4, price: 50, address: 'S States Ave', city: 'Atlantic City', state: 'New Jersey', zipcode: '08401' },
    { hostId: 1, title: 'Virginia Avenue', numberOfBeds: 4, price: 60, address: 'N Virginia Ave', city: 'Atlantic City', state: 'New Jersey', zipcode: '08401' },
    { hostId: 1, title: 'St. James Place', numberOfBeds: 4, price: 70, address: 'St James Pl', city: 'Atlantic City', state: 'New Jersey', zipcode: '08401' },
    { hostId: 1, title: 'Tennessee Avenue', numberOfBeds: 4, price: 70, address: 'S Tennessee Ave', city: 'Atlantic City', state: 'New Jersey', zipcode: '08401' },
    { hostId: 1, title: 'New York Avenue', numberOfBeds: 4, price: 80, address: 'N New York Ave', city: 'Atlantic City', state: 'New Jersey', zipcode: '08401' },
    { hostId: 1, title: 'Kentucky Avenue', numberOfBeds: 4, price: 90, address: 'N Kentucky Ave', city: 'Atlantic City', state: 'New Jersey', zipcode: '08401' },
    { hostId: 1, title: 'Indiana Avenue', numberOfBeds: 4, price: 90, address: 'S Indiana Ave', city: 'Atlantic City', state: 'New Jersey', zipcode: '08401' },
    { hostId: 1, title: 'Illinois Avenue', numberOfBeds: 4, price: 100, address: 'S Dr Martin Luther King Jr Blvd', city: 'Atlantic City', state: 'New Jersey', zipcode: '08401' },
    { hostId: 1, title: 'Atlantic Avenue', numberOfBeds: 4, price: 110, address: 'Atlantic Ave', city: 'Ventnor City', state: 'New Jersey', zipcode: '08406' },
    { hostId: 1, title: 'North Carolina Avenue', numberOfBeds: 4, price: 130, address: 'N North Carolina Ave', city: 'Atlantic City', state: 'New Jersey', zipcode: '08401' },
    { hostId: 1, title: 'Pennsylvania Avenue', numberOfBeds: 4, price: 150, address: 'Pennsylvania Ave', city: 'Absecon', state: 'New Jersey', zipcode: '08201' },
    { hostId: 1, title: 'Park Place', numberOfBeds: 4, price: 175, address: 'Park Pl', city: 'Ocean City', state: 'New Jersey', zipcode: '08226' },
    { hostId: 1, title: 'Boardwalk', numberOfBeds: 4, price: 200, address: 'Boardwalk', city: 'Atlantic City', state: 'New Jersey', zipcode: '08401' },
  
  ], {}),
  
  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Properties', null, {});
  }
};
