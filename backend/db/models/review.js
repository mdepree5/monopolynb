'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    guestId: DataTypes.INTEGER,
    propertyId: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
    communication: DataTypes.INTEGER,
    checkIn: DataTypes.INTEGER,
    cleanliness: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
  };
  return Review;
};