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
        attributes: {exclude: ['propertyId', 'rating', 'communication', 'checkIn', 'cleanliness'] }
      },
    }
  });

  // todo ————————————————————————————————————————————————————————————————————————————————
  // todo                               Review Methods
  // todo ————————————————————————————————————————————————————————————————————————————————

  Review.createReview = async (reqData) => await Review.create(reqData);
  
  Review.getReviewsByPropertyId = async (propertyId) => {
    const avg = (reviews, key) => (reviews.reduce((prev, curr) => prev + curr[key], 0)) / reviews.length;

    const reviewContentOnly = await Review.scope('reviewContentOnly')
      .findAll({where: { propertyId }, order: [['createdAt', 'DESC']] });

    const reviewDataOnly = await Review.scope('reviewDataOnly')
      .findAll({where: {propertyId}});

    const ratingData = [
      {name: 'Rating', value: avg(reviewDataOnly, 'rating')},
      {name: 'Communication', value: avg(reviewDataOnly, 'communication')},
      {name: 'Check-in', value: avg(reviewDataOnly, 'checkIn')},
      {name: 'Cleanliness', value: avg(reviewDataOnly, 'cleanliness')},
    ]

    return {ratingData, listOfReviews:reviewContentOnly};
  };

  Review.getReviewById = async (id) => await Review.findByPk(id);

  Review.updateReview = async (details) => {
    const id = details.id;
    delete details.id;
  
    await Review.update(details, {
      where: { id },
      returning: true,
      plain: true 
    });
    return await Review.findByPk(id);
  };
  
  Review.deleteReview = async (id) => {
    const review = await Review.findByPk(id);
    if (!review) throw new Error('Cannot find review');
    const formerId = review.id;

    await Review.destroy({ where: { id: review.id }});
    return formerId;
  };

  Review.deleteReviewsByPropertyId = async (propertyId) => {
    const reviews = await Review.findAll({where: {propertyId}});
    reviews.forEach(review => Review.destroy(review));
    
    return 'All reviews have been deleted';
  }

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