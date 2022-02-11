'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    propertyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Users'},
    },
    imageURL: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    
  }, {});

  // todo ————————————————————————————————————————————————————————————————————————————————
  // todo                               Associations
  // todo ————————————————————————————————————————————————————————————————————————————————
  Image.associate = function(models) {
    Image.belongsTo(models.Property, {
      as: 'properties',
      foreignKey: 'propertyId'
    });
  };
  return Image;
};