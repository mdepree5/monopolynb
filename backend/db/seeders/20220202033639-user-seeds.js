'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Demo',
        lastName: 'User',
        email: 'demo@user.io',
        hashedPassword: bcrypt.hashSync('demo8'),
        bio: 'Hello, I am a demo user',
        isHost: true,
      },
      {
        firstName: 'Unger',
        lastName: 'CousinWhoAlwaysCheats',
        email: 'cheaters@neverprosper.com',
        hashedPassword: bcrypt.hashSync('loadedDie'),
        bio: 'See you again, soon!',
        isHost: true,
      },
      {
        firstName: 'Liz',
        lastName: 'BrothersGirlfriendFromCollege',
        email: 'lizzz@genericuniversity.edu',
        hashedPassword: bcrypt.hashSync('iLovetheLiberalArt5'),
        bio: 'Call me Clu! Ready to come stay at one of my fabulous properties?',
        isHost: true,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      email: { [Op.in]: ['demo@user.io', 'cheaters@neverprosper.com', 'lizzz@genericuniversity.edu'] }
    }, {});
  }
};
