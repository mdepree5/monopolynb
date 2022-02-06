'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Properties', [
    { hostId: 2, title: 'Mediterranean Avenue', description: '', numberOfBeds: 4, price: 10, address: 'Mediterranean Ave', city: 'Atlantic City', state: 'New Jersey', zipcode: '08401' },
    { hostId: 2, title: 'Baltic Avenue', description: '', numberOfBeds: 4, price: 20, address: 'Baltic Ave', city: 'Atlantic City', state: 'New Jersey', zipcode: '08401' },
    { hostId: 2, title: 'Oriental Avenue', description: '', numberOfBeds: 4, price: 30, address: 'Oriental Ave', city: 'Atlantic City', state: 'New Jersey', zipcode: '08401' },
    { hostId: 2, title: 'Vermont Avenue', description: '', numberOfBeds: 4, price: 30, address: 'N Vermont Ave', city: 'Atlantic City', state: 'New Jersey', zipcode: '08401' },
    { hostId: 2, title: 'Connecticut Avenue', description: '', numberOfBeds: 4, price: 40, address: 'N Connecticut Ave', city: 'Atlantic City', state: 'New Jersey', zipcode: '08401' },
    { hostId: 2, title: 'St. Charles Place', description: '', numberOfBeds: 4, price: 50, address: 'St Charles Pl', city: 'Ocean City', state: 'New Jersey', zipcode: '08226' },
    { hostId: 2, title: 'States Avenue', description: '', numberOfBeds: 4, price: 50, address: 'S States Ave', city: 'Atlantic City', state: 'New Jersey', zipcode: '08401' },
    { hostId: 2, title: 'Virginia Avenue', description: '', numberOfBeds: 4, price: 60, address: 'N Virginia Ave', city: 'Atlantic City', state: 'New Jersey', zipcode: '08401' },
    { hostId: 2, title: 'St. James Place', description: '', numberOfBeds: 4, price: 70, address: 'St James Pl', city: 'Atlantic City', state: 'New Jersey', zipcode: '08401' },
    { hostId: 2, title: 'Tennessee Avenue', description: '', numberOfBeds: 4, price: 70, address: 'S Tennessee Ave', city: 'Atlantic City', state: 'New Jersey', zipcode: '08401' },
    { hostId: 2, title: 'New York Avenue', description: '', numberOfBeds: 4, price: 80, address: 'N New York Ave', city: 'Atlantic City', state: 'New Jersey', zipcode: '08401' },
    { hostId: 2, title: 'Kentucky Avenue', description: '', numberOfBeds: 4, price: 90, address: 'N Kentucky Ave', city: 'Atlantic City', state: 'New Jersey', zipcode: '08401' },
    { hostId: 2, title: 'Indiana Avenue', description: '', numberOfBeds: 4, price: 90, address: 'S Indiana Ave', city: 'Atlantic City', state: 'New Jersey', zipcode: '08401' },
    { hostId: 2, title: 'Illinois Avenue', description: '', numberOfBeds: 4, price: 100, address: 'S Dr Martin Luther King Jr Blvd', city: 'Atlantic City', state: 'New Jersey', zipcode: '08401' },
    { hostId: 2, title: 'Atlantic Avenue', description: '', numberOfBeds: 4, price: 110, address: 'Atlantic Ave', city: 'Ventnor City', state: 'New Jersey', zipcode: '08406' },
    { hostId: 2, title: 'North Carolina Avenue', description: '', numberOfBeds: 4, price: 130, address: 'N North Carolina Ave', city: 'Atlantic City', state: 'New Jersey', zipcode: '08401' },
    { hostId: 2, title: 'Pennsylvania Avenue', description: '', numberOfBeds: 4, price: 150, address: 'Pennsylvania Ave', city: 'Absecon', state: 'New Jersey', zipcode: '08201' },
    { hostId: 2, title: 'Park Place', description: '', numberOfBeds: 4, price: 175, address: 'Park Pl', city: 'Ocean City', state: 'New Jersey', zipcode: '08226' },
    { hostId: 2, title: 'Boardwalk', description: '', numberOfBeds: 4, price: 200, address: 'Boardwalk', city: 'Atlantic City', state: 'New Jersey', zipcode: '08401' },
  
  ], {}),
  
  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Properties', null, {});
  }
};




// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                             MORE DATABASE / AWS TABLES
// todo ——————————————————————————————————————————————————————————————————————————————————
// REACT PARALLAX TILT for them, CSS in circle bois
const userIcons = [
  { name: 'Thimble', link: 25 },
  { name: 'Boot', link: 25 },
  { name: 'Battleship', link: 25 },
  { name: 'Howitzer', link: 25 },
]

const railroads = [
  { name: 'Reading', price: 25 },
  { name: 'Pennsylvania', price: 25 },
  { name: 'B & O', price: 25 },
  { name: 'Short Line', price: 25 },
]

const utilities = [
  { name: 'Water and Electric', price: 25},
]

/*
Review seed data:

'' is a great host!!

'' I have stayed here many, many times.

'' The rent is so high!

*/

