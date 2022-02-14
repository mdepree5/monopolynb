const router = require('express').Router();
const asyncHandler = require('express-async-handler');

const {validateReview, validateProperty, validatePUT} = require('../middleware/formValidators');
const {User, Property, Review, Image} = require('../../db/models');
const {singlePublicFileUpload, singleMulterUpload} = require('../../awsS3');

// todo ——————————————————————————————————————————————————————————————————————————————————

router.route('/')
.post(validateProperty, asyncHandler
  (async (req, res) => res.json(await Property.createProperty(req.body))))
.get(asyncHandler
  (async (req, res) => res.json(await Property.getAllProperties()))
)

router.route('/:propertyId')
.get(asyncHandler
  (async (req, res) => res.json(await Property.findByPk(req.params.propertyId, {include: [User, Review, Image]}))))
.put(validateProperty, validatePUT, asyncHandler
  (async (req, res) => res.json(await Property.updateProperty(req.body))))
.delete(asyncHandler
  (async (req, res) => {
    const propertyId = await Property.deleteProperty(req.params.propertyId);
    // const message = await Review.deleteReviewsByPropertyId(req.params.propertyId);
    return res.json(propertyId);
  })
)

router.route('/:propertyId/reviews')
.post(validateReview, asyncHandler
  (async (req, res) => res.json(await Review.createReview(req.body))))
.get(asyncHandler
  // (async (req, res) => res.json(await Review.getReviewsByPropertyId(req.params.propertyId)))
  (async (req, res) => {
    const {propertyId} = req.params;
    res.json(await Review.findAll(
      {where: {propertyId}, order: [['createdAt', 'DESC']], include: User }
    ))
  }
  )
)

router.route('/:propertyId/images')
.get(asyncHandler
  (async (req, res) => res.json(await Image.getImagesByPropertyId(req.params.propertyId)))
)


module.exports = router;


/* 
router.route('/')
.post(singleMulterUpload, 
  validateProperty,
  asyncHandler
  (async (req, res) => {
    const {title, numberOfBeds, price, address, city, state, zipcode} = req.body;
    const imageUrl = await singlePublicFileUpload(req.file);
    console.log('req.body', req.body);
    console.log('api-imageUrl', imageUrl);

    res.json(await Property.createProperty({
      title, numberOfBeds, price, address, city, state, zipcode, imageUrl
    }))
  })) 
*/