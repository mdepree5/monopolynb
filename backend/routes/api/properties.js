const express = require('express');
const asyncHandler = require('express-async-handler');

const {validateReview, validateProperty, validatePUT} = require('../middleware/formValidators');

const {Property} = require('../../db/models');
const {Review} = require('../../db/models'); 

const router = express.Router();


// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                                 Properties
// todo ——————————————————————————————————————————————————————————————————————————————————

router.route('/')
.post(
  validateProperty,
  asyncHandler(async (req, res) => {
    const property = await Property.createProperty(req.body); 
    // console.log('debugger-api-properties');
    // console.log(property);
    return res.json(property);
  }))
.get(asyncHandler(async (req, res) => {
  const properties = await Property.getAllProperties();
  return res.json(properties);
}))
// todo ——————————————————————————————————————————————————————————————————————————————————
router.route('/:propertyId')
.get(asyncHandler(async (req, res) => {
  const property = await Property.getPropertyById(req.params.propertyId);
  return res.json(property);
}))
.put(
  validateProperty,
  validatePUT,
  asyncHandler(async (req, res) => {
    const id = await Property.updateProperty(req.body);
    const property = await Property.getPropertyById(id);
    return res.json(property);
  }))
.delete(
  asyncHandler(async (req, res) => {
    const propertyId = await Property.deleteProperty(req.params.propertyId);
    return res.json(propertyId); //* option 1: manipualte res.json({),} display confirmation page?
  })
)

// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                                 Reviews
// todo ——————————————————————————————————————————————————————————————————————————————————


router.route('/:propertyId/reviews')
.post(
  validateReview,
  asyncHandler(async function(req, res) {
    const review = await Review.createReview(req.body);
    return res.json(review);
  })
)
.get(asyncHandler(async function(req, res) {
  // const reviews = await Property.getReviewsByPropertyId(req.params.id); //* via Property or Reviews method
  const reviews = await Review.getReviewsByPropertyId(req.params.propertyId); //* via Property or Reviews method
  
  return res.json(reviews);
}))
// todo ——————————————————————————————————————————————————————————————————————————————————
/* router.route('/:propertyId/reviews/:reviewId')
.put(
  validateReview,
  validatePUT,
  asyncHandler(async (req, res) => {
    // const review = await Review.getReviewById(req.params.reviewId); //* am I not getting it from req.params.id??
    const id = await Review.updateReview(req.body);
    const review = await Property.getReviewById(id);
    return res.json(review);
  }))
.delete(
  asyncHandler(async (req, res) => {
    const reviewId = await Review.deleteReview(req.params.reviewId);
    return res.json(reviewId);
    return res.redirect(`${req.baseUrl}/${req.params.propertyId}`); //* of do you want redirect here?
  })
) */



module.exports = router;

// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                               Deprecated
// todo ——————————————————————————————————————————————————————————————————————————————————
/* 
.get(asyncHandler(async (req, res) => {
  const review = await Review.getReviewById(req.params.reviewId);
  return res.json({review});
}))

const getReviewById = async(id) => await Property.scope("detailed").findByPk(id);
*/

