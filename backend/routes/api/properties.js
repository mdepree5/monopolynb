const router = require('express').Router();
const asyncHandler = require('express-async-handler');
// todo ——————————————————————————————————————————————————————————————————————————————————
const {validateReview, validateProperty, validatePUT} = require('../middleware/formValidators');
const {User, Property, Review, Image} = require('../../db/models');
// todo ——————————————————————————————————————————————————————————————————————————————————

router.route('/')
.post(validateProperty, asyncHandler
  (async (req, res) => res.json(await Property.create(req.body))))
.get(asyncHandler
  (async (req, res) => res.json(await Property.getAllProperties()))
)

router.route('/:propertyId')
.get(asyncHandler
  (async (req, res) => res.json(await Property.findByPk(req.params.propertyId, {include: [User, Review, Image]}))))
.put(validateProperty, validatePUT, asyncHandler
  (async (req, res) => {
  const id = req.body.id; 
  delete req.body.id; 
  const updatedProperty = await Property.update(req.body, {where: { id }, returning: true, plain: true});
  return res.json(await Property.findByPk(id, {include: [User]}))
}))
.delete(asyncHandler
  (async (req, res) => {
    const propertyId = await Property.deleteProperty(req.params.propertyId);
    return res.json(propertyId);
  })
)

router.route('/:propertyId/reviews')
.post(validateReview, asyncHandler
  (async (req, res) => {
    const review = await Review.create(req.body);
    return res.json(await Review.findOne({where: {id: review.id}, include: User }))
  }))
.get(asyncHandler
  (async (req, res) => {
    const {propertyId} = req.params;
    return res.json(await Review.findAll(
      {where: {propertyId}, order: [['createdAt', 'DESC']], include: User }
    ))
  })
)

router.route('/:propertyId/images')
.get(asyncHandler
  (async (req, res) => res.json(await Image.getImagesByPropertyId(req.params.propertyId)))
)


module.exports = router;


/* 
const {singlePublicFileUpload, singleMulterUpload} = require('../../awsS3');

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