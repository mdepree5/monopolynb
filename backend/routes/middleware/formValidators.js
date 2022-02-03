const { check, validationResult } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


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

// ! —————————————————————————————————————————————————————————————————————————————————————
// todo Elaborate express-validator validators
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
    // .custom(value => User.findByEmail(value).then(user => {
    //   if(user) return Promise.reject('Email already in use')
    // })),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors
];
// ! —————————————————————————————————————————————————————————————————————————————————————


// !!!! ——————————————————————————————————————————————————————————————————————————————————
// todo Elaborate express-validator validators
const validateProperties = [
  check('credential')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Please provide a valid email or username.'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a password.'),
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
  validateProperties,
  validatePUT,
};
