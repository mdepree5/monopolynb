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

  // todo ————————————————————————————————————————————————————————————————————————————————
  // todo                               Property Methods
  // todo ————————————————————————————————————————————————————————————————————————————————

  const createProperty = async(details) => {
    const property = await Property.create(details);
    return property.id;
  };
  
  const getAllProperties = async() => await Property.findAll();
  
  const getPropertyById = async(id) => await Property.scope("detailed").findByPk(id);
  
  const updateProperty = async(details) => {
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
  
  const deleteProperty = async(propertyId) => {
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