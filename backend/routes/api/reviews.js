const router = require('express').Router();
const asyncHandler = require('express-async-handler');

const {validateReview, validatePUT} = require('../middleware/formValidators');
const {Review} = require('../../db/models');

// todo ——————————————————————————————————————————————————————————————————————————————————

router.route('/:reviewId')
.put(validateReview, validatePUT, asyncHandler
  (async (req, res) => res.json(await Review.updateReview(req.body))))
.delete(asyncHandler
  (async (req, res) => {
    console.log('debugger-req', req);
    res.json(await Review.deleteReview(req.params.reviewId))
  })
)

module.exports = router;