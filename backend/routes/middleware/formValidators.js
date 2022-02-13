const { check, validationResult } = require('express-validator');

const handleValidationErrors = (req, _res, next) => {
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    const errors = validationErrors
      .array()
      .map((error) => `${error.msg}`);

    const err = Error('Bad request.');
    err.errors = errors;
    err.status = 400;
    err.title = 'Bad request.';
    next(err);
  }
  next();
};

const validateLogin = [
  check('credential')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Please provide a valid email or username.'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a password.'),
  handleValidationErrors
];

const validateSignup = [
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.')
    .isLength({ max: 25 })
    .withMessage('Please provide a username with no more than 25 characters.')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
  check('firstName')
    .exists({ checkFalsy: true })
    .isLength({ min: 1 })
    .withMessage('Please provide a first name with at least 1 character.')
    .isLength({ max: 25 })
    .withMessage('Please provide a first name with no more than 25 characters.'),
  check('lastName')
    .exists({ checkFalsy: true })
    .isLength({ min: 1 })
    .withMessage('Please provide a last name with at least 1 character.')
    .isLength({ max: 25 })
    .withMessage('Please provide a last name with no more than 25 characters.'),
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors
];

const validateProperty = [
  check('title')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('What is your property called? We\'d love to know!'),
  check('numberOfBeds')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Please provide a number of beds.')
    .isInt({min: 1 })
    .withMessage('Please provide at least one bed.')
    .isInt({max: 1000})
    .withMessage('Please do not list more than 1000 beds.'),
  check('price')
    .exists({ checkFalsy: true })
    .notEmpty()
    .isInt({min: 10})
    .withMessage('Please provide a price of at least 10 dollars.')
    .isInt({max: 3000})
    .withMessage('Please provide a price no greater than 3000 dollars.'),
  check('address')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Please provide an address for your property.'),
    check('city')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Please provide a city for your property.'),
  check('state')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Please provide a state for your property.'),
  check('zipcode')
    .exists({ checkFalsy: true })
    .notEmpty()
    .isLength({ min: 5 })
    .isLength({ max: 5 })
    .withMessage('Please provide a valid zipcode for your property.'),
  handleValidationErrors
];

const validateReview = [
  check('content')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Please write about your experience.'),
  check('rating')
    .exists({ checkFalsy: true })
    .withMessage('Please rate your overall experience.'),
  check('communication')
    .exists({ checkFalsy: true })
    .withMessage('Please rate the communication of your stay.'),
  check('checkIn')
    .exists({ checkFalsy: true })
    .withMessage('Please rate the check in process of your stay.'),
  check('cleanliness')
    .exists({ checkFalsy: true })
    .withMessage('Please rate the cleanliness of this property.'),
  handleValidationErrors
];



const validatePUT = [
  check('id')
    .exists({ checkFalsy: true })
    .notEmpty()
    .isInt({min: 0})
];



module.exports = {
  validateLogin,
  validateSignup,
  validateProperty,
  validateReview,
  validatePUT,
};
