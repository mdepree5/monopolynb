'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', [
    {
      username: 'wall-e',
      firstName: 'Wallace',
      lastName: 'Eee',
      email: 'demo@user.io',
      hashedPassword: bcrypt.hashSync('demo8'),
    },
    {
      username: 'yourcousin',
      firstName: 'Younger',
      lastName: 'CousinWhoAlwaysCheats',
      email: 'cheaters@neverprosper.com',
      hashedPassword: bcrypt.hashSync('loadedDie'),
    },
    {
      username: 'clulessliz',
      firstName: 'Liz',
      lastName: 'BrothersCollegeGF',
      email: 'lizzz@genericuniversity.edu',
      hashedPassword: bcrypt.hashSync('iLovetheLiberalArt5'),
    },
    {
      username: 'willthewise',
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
      email: { [Op.in]: ['demo@user.io', 'cheaters@neverprosper.com', 'lizzz@genericuniversity.edu', 'byersWill@dialup-hawkins.com', 'ralph@fix-it-felix-jr.com'] }
    }, {});
  }
};
