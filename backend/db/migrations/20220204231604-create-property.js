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
    description: {
      type: Sequelize.TEXT,
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
    state: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    zipcode: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: true,
      type: Sequelize.DATE,
    }
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Properties')
};