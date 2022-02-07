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
      bio: 'Hello, I am a demo user',
      isHost: true,
    },
    {
      username: 'yourCousin',
      firstName: 'Unger',
      lastName: 'CousinWhoAlwaysCheats',
      email: 'cheaters@neverprosper.com',
      hashedPassword: bcrypt.hashSync('loadedDie'),
      bio: 'See you again, soon!',
      isHost: true,
    },
    {
      username: 'cluLiz',
      firstName: 'Liz',
      lastName: 'BrothersCollegeGF',
      email: 'lizzz@genericuniversity.edu',
      hashedPassword: bcrypt.hashSync('iLovetheLiberalArt5'),
      bio: 'Call me Clu! Ready to come stay at one of my fabulous properties?',
      isHost: true,
    },
    {
      username: 'theWise',
      firstName: 'Will',
      lastName: 'Byers',
      email: 'byersWill@dialup-hawkins.com',
      hashedPassword: bcrypt.hashSync('dnd4life'),
      bio: 'That is not music. That... is the sound of destiny!',
      isHost: true,
    },
    {
      username: 'gonna-wreck-it',
      firstName: 'Ralph',
      lastName: 'Wreck-It',
      email: 'ralph@fix-it-felix-jr.com',
      hashedPassword: bcrypt.hashSync('80sgames4days'),
      bio: '“My name\'s Ralph, and I\'m a bad guy. Uh, let\'s see ... I\'m nine feet tall, I weigh six hundred and forty-three pounds. I wreck things, professionally. I mean, I\'m very good at what I do. Probably the best I know.',
      isHost: true,
    },
  ], {}),

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      email: { [Op.in]: ['demo@user.io', 'cheaters@neverprosper.com', 'lizzz@genericuniversity.edu', 'byersWill@dialup-hawkins.com'] }
    }, {});
  }
};
