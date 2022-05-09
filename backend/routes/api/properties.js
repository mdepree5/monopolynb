const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const Op = require('sequelize').Op;
// todo ——————————————————————————————————————————————————————————————————————————————————
const { singleMulterUpload, singlePublicFileUpload, multipleMulterUpload, multiplePublicFileUpload } = require('../../awsS3');
const {validateReview, validateProperty, validatePUT} = require('../middleware/formValidators');
const {User, Property, Review, Image} = require('../../db/models');
// todo ——————————————————————————————————————————————————————————————————————————————————


async function createImages(propertyId, imageURLs) {
  const imageIds = [];

  for (let imageURL of imageURLs) {
    const created = await Image.create({ propertyId, imageURL })
    imageIds.push(created.id);
  }

  return await Image.findAll({
    where: { id: { [Op.or]: imageIds } },
  })
};

// .post(validateProperty, singleMulterUpload('image'), asyncHandler
router.route('/')
// .post(singleMulterUpload('image'), asyncHandler
.post(multipleMulterUpload('images'), asyncHandler
  (async (req, res) => {
    // const imageUrl = await singlePublicFileUpload(req.file)
    // await Image.create({propertyId: newProperty.id, imageURL: imageUrl});
    const imageURLs = await multiplePublicFileUpload(req.files)
    
    const newProperty = await Property.create({...req.body, cardImage: imageURLs[0]});
    const images = await createImages(newProperty.id, imageURLs)

  res.json(newProperty);
}))
.get(asyncHandler
  (async (req, res) => res.json(await Property.getAllProperties()))
)

router.route('/:propertyId')
.get(asyncHandler
  (async (req, res) => res.json(await Property.findByPk(req.params.propertyId, {include: [User, Review, Image]}))))
// .put(validateProperty, validatePUT, asyncHandler
.put(multipleMulterUpload('images'), validatePUT, asyncHandler
  (async (req, res) => {
  const id = req.body.id;
  delete req.body.id; 
  
  const imageURLs = await multiplePublicFileUpload(req.files);

  const updatedProperty = await Property.update(
    {...req.body, cardImage: imageURLs[0]},
    {where: { id }, returning: true, plain: true}
    );
  
  const images = await createImages(id, imageURLs)

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