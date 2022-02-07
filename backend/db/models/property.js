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
    city: {
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
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    defaultScope: {
      attributes: {
        exclude: ['address']
      }
    }
  });

  // todo ————————————————————————————————————————————————————————————————————————————————
  // todo                               Property Methods
  // todo ————————————————————————————————————————————————————————————————————————————————

  Property.createProperty = async function (details) {
    const property = await Property.create(details);
    return property.id;
  };
  
  Property.getAllProperties = async function () {
    return await Property.findAll();
  };
  
  Property.getPropertyById = async function (id) {
    return await Property.findByPk(id);
  };
  
  Property.updateProperty = async function (details) {
    const id = details.id; 
    delete details.id; 
    await Property.update(
      details,
      {
        where: { id },
        returning: true,
        plain: true,
      }
    );
    return id;
  };
  
  Property.deleteProperty = async function (propertyId) {
    const property = await Property.findByPk(propertyId);
    if (!property) throw new Error('Cannot find property');
  
    await Property.destroy({ where: { id: property.id }});
    return property.id;
  };



  // todo ————————————————————————————————————————————————————————————————————————————————
  // todo                               Property Associations
  // todo ————————————————————————————————————————————————————————————————————————————————
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