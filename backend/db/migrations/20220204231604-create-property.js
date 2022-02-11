'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Properties', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    hostId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    title: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    numberOfBeds: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    address: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    city: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    state: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    zipcode: {
      type: Sequelize.STRING(10),
      allowNull: false,
    },
    imageURL: {
      type: Sequelize.STRING(255),
      allowNull: true,
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Properties')
};