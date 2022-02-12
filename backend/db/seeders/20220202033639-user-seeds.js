'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', [
    {
      username: 'demoUser1',
      firstName: 'Demo',
      lastName: 'User',
      email: 'demo@user.io',
      hashedPassword: bcrypt.hashSync('demo8'),
    },
    {
      username: 'yourCousin',
      firstName: 'Unger',
      lastName: 'CousinWhoAlwaysCheats',
      email: 'cheaters@neverprosper.com',
      hashedPassword: bcrypt.hashSync('loadedDie'),
    },
    {
      username: 'cluLiz',
      firstName: 'Liz',
      lastName: 'BrothersCollegeGF',
      email: 'lizzz@genericuniversity.edu',
      hashedPassword: bcrypt.hashSync('iLovetheLiberalArt5'),
    },
    {
      username: 'theWise',
      firstName: 'Will',
      lastName: 'Byers',
      email: 'byersWill@dialup-hawkins.com',
      hashedPassword: bcrypt.hashSync('dnd4life'),
    },
    {
      username: 'gonna-wreck-it',
      firstName: 'Ralph',
      lastName: 'Wreck-It',
      email: 'ralph@fix-it-felix-jr.com',
      hashedPassword: bcrypt.hashSync('80sgames4days'),
    },
  ], {}),

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      email: { [Op.in]: ['demo@user.io', 'cheaters@neverprosper.com', 'lizzz@genericuniversity.edu', 'byersWill@dialup-hawkins.com'] }
    }, {});
  }
};
