const express = require('express');
const asyncHandler = require('express-async-handler');

const {validateReview, validatePUT} = require('../middleware/formValidators');

const Review = require('../../db/models/review'); //todo ******* does not exist yet

const router = express.Router();


// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                                 Reviews
// todo ——————————————————————————————————————————————————————————————————————————————————

router.route('/:reviewId')
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
    return res.json({reviewId});
    return res.redirect(`${req.baseUrl}/${req.params.propertyId}`); //* of do you want redirect here?
  })
)

module.exports = router;