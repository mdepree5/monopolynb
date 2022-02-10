const router = require('express').Router();
const asyncHandler = require('express-async-handler');

const {validateReview, validateProperty, validatePUT} = require('../middleware/formValidators');

const {Property, Review} = require('../../db/models');

// const router = express.Router();


// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                                 Properties
// todo ——————————————————————————————————————————————————————————————————————————————————
router.route('/')
.post(validateProperty, asyncHandler
  (async (req, res) => res.json(await Property.createProperty(req.body))))
.get(asyncHandler
  (async (req, res) => res.json(await Property.getAllProperties()))
)

// todo ——————————————————————————————————————————————————————————————————————————————————
router.route('/:propertyId')
.get(asyncHandler
  (async (req, res) => res.json(await Property.getPropertyById(req.params.propertyId))))
.put(validateProperty, validatePUT, asyncHandler
  (async (req, res) => res.json(await Property.updateProperty(req.body))))
.delete(asyncHandler
  (async (req, res) => {
    const propertyId = await Property.deleteProperty(req.params.propertyId);
    const message = await Review.deleteReviewsByPropertyId(req.params.propertyId);
    return res.json({propertyId, message});
  })
)

// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                                 Reviews
// todo ——————————————————————————————————————————————————————————————————————————————————
router.route('/:propertyId/reviews')
.post(validateReview, asyncHandler
  (async (req, res) => res.json(await Review.createReview(req.body))))
.get(asyncHandler
  (async (req, res) => res.json(await Review.getReviewsByPropertyId(req.params.propertyId)))
)

module.exports = router;