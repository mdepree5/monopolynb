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

  Review.createReview = async (reqData) => await Review.create(reqData);
  
  Review.getReviewsByPropertyId = async (propertyId) => {
    const avg = (reviews, key) => (reviews.reduce((prev, curr) => prev + curr[key], 0)) / reviews.length;

    const reviewsOnlyContent = await Review.scope('reviewContentOnly')
      .findAll({
        where: { propertyId },
        order: [['createdAt', 'DESC']],
    });

    const reviewsOnlyData = await Review.scope('reviewDataOnly')
      .findAll({where: {propertyId}});

    const data = {
      ratingAverage: avg(reviewsOnlyData, 'rating'),
      communicationAverage: avg(reviewsOnlyData, 'communication'),
      checkInAverage: avg(reviewsOnlyData, 'checkIn'),
      cleanlinessAverage: avg(reviewsOnlyData, 'cleanliness'),
    }

    // console.log({...data, reviewsOnlyContent});
    return {...data, reviewsOnlyContent};
  };

  Review.getReviewById = async (id) => await Review.findByPk(id);

  Review.deleteReviewsByPropertyId = async (propertyId) => {
    const reviews = await Review.findAll({where: {propertyId}});
    reviews.forEach(review => await Review.destroy(review));
    
    return 'All reviews have been deleted';
  }

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