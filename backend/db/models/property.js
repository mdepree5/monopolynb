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
      validate: {len: [1, 10]}
    },
  },
  {});

  // todo ————————————————————————————————————————————————————————————————————————————————
  // todo                               Property Methods
  // todo ————————————————————————————————————————————————————————————————————————————————

  Property.createProperty = async (reqData) => await Property.create(reqData);
  
  Property.getAllProperties = async () => await Property.findAll({
    order: [['price', 'ASC']]
  });
  
  Property.getAllPropertiesByUserId = async (userId) => await Property.findAll({
    where: { userId },
    order: [['price', 'ASC']]
  });

  Property.getPropertyById = async (id) => await Property.findByPk(id);

  Property.updateProperty = async (details) => {
    const id = details.id; 
    delete details.id; 
    await Property.update(details, {
      where: { id },
      returning: true,
      plain: true,
    });
    return await Property.findByPk(id);
  };
  
  Property.deleteProperty = async (id) => {
    const property = await Property.findByPk(id);
    if (!property) throw new Error('Cannot find property');
    const formerId = property.id;

    await Property.destroy({ where: { id: property.id }});
    return formerId;
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