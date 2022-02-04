'use strict';
module.exports = (sequelize, DataTypes) => {
  const Property = sequelize.define('Property', {
    hostId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {len: [1, 100]}
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    numberOfBeds: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {len: [1, 100]}
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {len: [1, 100]}
    },
    zipcode: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  Property.associate = function(models) {
    // associations can be defined here
  };
  return Property;
};