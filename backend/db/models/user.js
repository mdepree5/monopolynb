'use strict';
const bcrypt = require('bcryptjs');
const { Validator } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [4, 25],
        isNotEmail(value) {
          if(Validator.isEmail(value)) {
            throw new Error('Cannot be an email.');
          }
        }
      }
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 25],
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
        len: [1, 25],
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
      unique: true,
      validate: {len: [3, 255]}
    },
    hashedPassword: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {len: [60, 60]}
    },
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

  // todo ————————————————————————————————————————————————————————————————————————————————
  // todo                               Methods
  // todo ————————————————————————————————————————————————————————————————————————————————
  User.prototype.toSafeObject = function() { // remember, this cannot be an arrow function
    const { id, username, firstName, lastName, email, bio, isHost } = this; // context will be the User instance
    return { id, username, firstName, lastName, email, bio, isHost };
  };
  
  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };
  
  User.getCurrentUserById = async (id) => await User.scope('currentUser').findByPk(id);
  
  User.getUserById = async (id) => await User.findByPk(id);
  
  User.loginDemo = async () => await User.scope('currentUser').findByPk(1);

  User.login = async ({ credential, password }) => {
    const { Op } = require('sequelize');
    const user = await User.scope('loginUser').findOne({
      where: {[Op.or]: { username: credential, email: credential }}
    });
    
    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    };
  };
  
  User.signup = async function ({ password, ...reqData }) {
    const user = await User.create({ hashedPassword: bcrypt.hashSync(password), ...reqData});
    return await User.scope('currentUser').findByPk(user.id);
  };
  // todo ————————————————————————————————————————————————————————————————————————————————
  // todo                               Associations
  // todo ————————————————————————————————————————————————————————————————————————————————
  User.associate = function(models) {  
    
    User.hasMany(models.Property, {
      as: 'properties',
      foreignKey: 'hostId'
    });

    User.hasMany(models.Review, {
      as: 'reviews',
      foreignKey: 'guestId'
    });

  };

  return User;
};  
