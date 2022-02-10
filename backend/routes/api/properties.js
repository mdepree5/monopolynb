const router = require('express').Router();
const asyncHandler = require('express-async-handler');

const {validateReview, validateProperty, validatePUT} = require('../middleware/formValidators');
const {Property, Review} = require('../../db/models');
const {singlePublicFileUpload, singleMulterUpload} = require('../../awsS3');

// todo ——————————————————————————————————————————————————————————————————————————————————

router.route('/')
.post(validateProperty, singleMulterUpload, asyncHandler
  (async (req, res) => {
    // const {image, title, numberOfBeds, address, price, city, state, zipcode} = req.body;
    const {title, numberOfBeds, price, address, city, state, zipcode} = req.body;
    // const imageUrl = await singlePublicFileUpload(image);
    const imageUrl = await singlePublicFileUpload(req.file);
    console.log('api-imageUrl', imageUrl);
    res.json(await Property.createProperty({
      title, numberOfBeds, price, address, city, state, zipcode, imageUrl
    }))
  }))
.get(asyncHandler
  (async (req, res) => res.json(await Property.getAllProperties()))
)

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

router.route('/:propertyId/reviews')
.post(validateReview, asyncHandler
  (async (req, res) => res.json(await Review.createReview(req.body))))
.get(asyncHandler
  (async (req, res) => res.json(await Review.getReviewsByPropertyId(req.params.propertyId)))
)

module.exports = router;