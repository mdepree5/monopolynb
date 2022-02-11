'use strict';
module.exports = (sequelize, DataTypes) => {
  const Images = sequelize.define('Images', {
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
  Images.associate = function(models) {
    Review.belongsTo(models.Property, {
      as: 'properties',
      foreignKey: 'propertyId'
    });
  };
  return Images;
};