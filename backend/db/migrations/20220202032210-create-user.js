'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    username: {
      type: Sequelize.STRING(25),
      allowNull: false,
      unique: true,
    },
    firstName: {
      type: Sequelize.STRING(25),
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING(25),
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING(255),
      allowNull: false,
      unique: true
    },
    hashedPassword: {
      type: Sequelize.STRING.BINARY,
      allowNull: false,
    },
    bio: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    isHost: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now'),
    },
    updatedAt: {
      allowNull: true,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now'),
    }
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Users')
};