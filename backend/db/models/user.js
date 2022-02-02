'use strict';

const { Validator } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50],
        isNotEmail(value) {
          if(Validator.isEmail(value)) {
            throw new Error('Cannot be an email.');
          }
        }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50],
        isNotEmail(value) {
          if(Validator.isEmail(value)) {
            throw new Error('Cannot be an email.');
          }
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {len: [3, 255]}
    },
    hashedPassword: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {len: [60, 60]}
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    isHost: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    }
  }, 
  {
    defaultScope: {
      attributes: {
        exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt']
      }
    },
    scopes: {
      currentUser: {
        attributes: {exclude: ['hashedPassword'] }
      },
      loginUser: {
        attributes: {}
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};