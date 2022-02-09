'use strict';

const {User} = require('./user')

module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    guestId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Users'}
    },
    propertyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Properties'}
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    communication: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    checkIn: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cleanliness: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    scopes: {
      reviewDataOnly: {
        attributes: {exclude: ['guestId', 'content'] }
      },
      reviewContentOnly: {
        attributes: {exclude: ['propertyId', 'rating', 'communicaiton', 'checkIn', 'cleanliness'] }
      },
    }
  });

  // todo ————————————————————————————————————————————————————————————————————————————————
  // todo                               Review Methods
  // todo ————————————————————————————————————————————————————————————————————————————————

  Review.createReview = async function (details, propertyId) {
    const review = await Review.create({
      ...details,
      propertyId, 
      propertyId,
    });
    return await Review.findByPk(review.id);
  };
  
  Review.getReviewsByPropertyId = async function (propertyId) {
    return await Review.scope('reviewContentOnly').findAll({
      where: { propertyId },
      order: [['createdAt', 'DESC']],
    });
  };

  Review.getAllReviewDataByPropertyId = async function (propertyId) {
    return await Review.scope(
    'reviewDataOnly'
    ).findAll({where: {propertyId}});
  };
  // todo ——————————————————————————————————————————————————————————————————————————————————

  Review.updateReview = async function (details) {
    const id = details.id;
    delete details.id;
  
    await Review.update(
      details,
      {
        where: { id },
        returning: true,
        plain: true,
      }
    );
    return await Review.findByPk(id);
  };
  
  Review.deleteReview = async function (reviewId) {
    const review = await Review.findByPk(reviewId);
    if (!review) throw new Error('Cannot find review');
  
    await Review.destroy({ where: { id: review.id }});
    return review.id;
  };


  // todo ————————————————————————————————————————————————————————————————————————————————
  // todo                               Review Associations
  // todo ————————————————————————————————————————————————————————————————————————————————
  Review.associate = function(models) {

    Review.belongsTo(models.User, {
      as: 'users',
      foreignKey: 'guestId'
    });

    Review.belongsTo(models.Property, {
      as: 'properties',
      foreignKey: 'propertyId'
    });

  };
  return Review;
};