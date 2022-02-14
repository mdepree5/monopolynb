const router = require('express').Router();
const asyncHandler = require('express-async-handler');

const {validateReview, validatePUT} = require('../middleware/formValidators');
const {Review, User} = require('../../db/models');

// todo ——————————————————————————————————————————————————————————————————————————————————

router.route('/:reviewId')
.put(validateReview, validatePUT, asyncHandler
  (async (req, res) => {
  const id = req.body.id; 
  delete req.body.id; 
  const updatedReview = await Review.update(req.body, {where: { id }, returning: true, plain: true });
  return res.json(await Review.findByPk(id, {include: [User]}))
}))
.delete(asyncHandler
  (async (req, res) => res.json(await Review.deleteReview(req.params.reviewId)))
)

module.exports = router;