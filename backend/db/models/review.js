'use strict';
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
    }
  });

  // todo ————————————————————————————————————————————————————————————————————————————————
  // todo                               Review Methods
  // todo ————————————————————————————————————————————————————————————————————————————————

  const createReview = async(details, propertyId) => {
    const review = await Review.create({
      ...details,
      propertyId, //* because my review API routes nestin properties, elabaorate the createReview method
    });
    return await Review.findByPk(review.id);
  };
  
  const getReviewsByPropertyId = async(propertyId) => await Review.findAll({
    where: { propertyId },
  });
  
  const getAllReviewDataByPropertyId = async (propertyId) => await Review.scope(
    'reviewDataOnly'
    ).findAll({where: {propertyId}});
  
  const updateReview = async(details) => {
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
  
  const deleteReview = async(reviewId) => {
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