const express = require('express');
const asyncHandler = require('express-async-handler');

const {validateProperty, validatePUT} = require('../middleware/formValidators');

const Property = require('../../db/models/property'); //todo ******* does not exist yet

const router = express.Router();


router.route('/')
.get(asyncHandler(async function(_req, res) {
  const property = await Property.list(); //todo define Property.method() in Property model
  return res.json(property);
}))
.post(
  validateProperty,
  asyncHandler(async function (req, res) {
    const id = await Property.create(req.body); //todo define Property.method() in Property model
    return res.redirect(`${req.baseUrl}/${id}`);
  }))
.put(
  validateProperty,
  validatePUT,
  asyncHandler(async function (req, res) {
    const id = await Property.update(req.body); //todo define Property.method() in Property model
    const property = await Property.one(id); //todo define Property.method() in Property model
    return res.json(property);
  }))


router.route('/:id')
.get(asyncHandler(async function(req, res) {
  const property = await Property.one(req.params.id); //todo define Property.method() in Property model
  return res.json(property);
}))


module.exports = router;


// todo ——————————————————————————————————————————————————————————————————————————————————
// todo ——————————————————————————————————————————————————————————————————————————————————
// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                               Property methods
// todo ——————————————————————————————————————————————————————————————————————————————————
// todo ——————————————————————————————————————————————————————————————————————————————————
// todo ——————————————————————————————————————————————————————————————————————————————————



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
