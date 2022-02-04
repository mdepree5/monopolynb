'use strict';
module.exports = (sequelize, DataTypes) => {
  const Property = sequelize.define('Property', {
    hostId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Users'},
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

    Property.belongsTo(models.User, {
      as: 'users',
      foreignKey: 'hostId'
    });

    Property.hasMany(models.Review, {
      as: 'reviews',
      foreignKey: 'propertyId',
    });

  };
  return Property;
};