const express = require('express');
const asyncHandler = require('express-async-handler');

const {validateProperty, validatePUT} = require('../middleware/formValidators');

const Property = require('../../db/models/property'); //todo ******* does not exist yet
const Review = require('../../db/models/review'); //todo ******* does not exist yet

const router = express.Router();


// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                                 Properties
// todo ——————————————————————————————————————————————————————————————————————————————————

router.route('/')
.get(asyncHandler(async (req, res) => {
  const property = await Property.list(); //todo define Property.method() in Property model
  return res.json(property);
}))
.post(
  validateProperty,
  asyncHandler(async (req, res) => {
    const id = await Property.create(req.body); //todo define Property.method() in Property model
    return res.redirect(`${req.baseUrl}/${id}`);
  }))

router.route('/:id')
.get(asyncHandler(async (req, res) => {
  const property = await Property.one(req.params.id); //todo define Property.method() in Property model
  return res.json(property);
}))
.put(
  validateProperty,
  validatePUT,
  asyncHandler(async (req, res) => {
    const id = await Property.update(req.body); //todo define Property.method() in Property model
    const property = await Property.one(id); //todo define Property.method() in Property model
    return res.json(property);
  }))
.delete(
  asyncHandler(async (req, res) => {
    const property = await Property.one(id); //todo define Property.method() in Property model
    
  })
)

// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                                 Reviews
// todo ——————————————————————————————————————————————————————————————————————————————————


router.route('/:id/reviews')
.get(asyncHandler(async function(req, res) {
  const reviews = await Property.getReviewsByPropertyId(req.params.id); //* Decide whether to add the method in the Property method or Reviews method
  const reviews = await Review.getReviewsByPropertyId(req.params.id); //* Decide whether to add the method in the Property method or Reviews method
  return res.json(reviews);
}))
.post(
  itemValidations.validateCreate,
  asyncHandler(async function(req, res) {
    const review = await Review.addReview(req.body, req.params.id);
    return res.json(review); //* return json? OR do I redirect?
    return res.redirect(`${req.baseUrl}/${req.paramsid}`); //* redirect/return to post page???
  })
);

router.route('/:id/reviews/:id')
.get(asyncHandler(async (req, res) => {
  const property = await Review.one(req.params.id); //todo define Property.method() in Property model
  return res.json(property);
}))
.put(
  validateProperty,
  validatePUT,
  asyncHandler(async (req, res) => {
    const id = await Property.update(req.body); //todo define Property.method() in Property model
    const property = await Property.one(id); //todo define Property.method() in Property model
    return res.json(property);
  }))
.delete(
  asyncHandler(async (req, res) => {
    const property = await Property.one(id); //todo define Property.method() in Property model
    
  })
)



module.exports = router;



// todo ——————————————————————————————————————————————————————————————————————————————————
// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                               Review methods
// todo ——————————————————————————————————————————————————————————————————————————————————
// todo ——————————————————————————————————————————————————————————————————————————————————

async function addReview(details, propertyId) {
  const review = await Review.create({
    ...details,
    propertyId,
  });
  return await Review.findByPk(review.id);
}

// todo ——————————————————————————————————————————————————————————————————————————————————
// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                               Property methods
// todo ——————————————————————————————————————————————————————————————————————————————————
// todo ——————————————————————————————————————————————————————————————————————————————————

//! Define this in the Reviews model or in the Property model????
async function getReviewsByPropertyId(id) {
  return await Property.scope('reviews').findByPk(id); //* Create a custom scope that just gives back reviews, via foreign key???
}

async function create(details) {
  const property = await Property.create(details);
  return property.id;
}

async function update(details) {
  const id = details.id;
  delete details.id;
  await Property.update(
    details,
    {
      where: { id },
      returning: true,
      plain: true,
    }
  );
  return id;
}

async function list() {
  return await Property.findAll();
}

async function one(id) {
  return await Property.scope("detailed").findByPk(id);
}


module.exports = {
  create,
  update,
  list,
  one,
};
