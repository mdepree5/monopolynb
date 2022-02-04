'use strict';
module.exports = (sequelize, DataTypes) => {
  const Property = sequelize.define('Property', {
    hostId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    numberOfBeds: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    address: DataTypes.STRING,
    state: DataTypes.STRING,
    zipcode: DataTypes.INTEGER
  }, {});
  Property.associate = function(models) {
    // associations can be defined here
  };
  return Property;
};