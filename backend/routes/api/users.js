const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');


const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');
const { User } = require('../../db/models');

const router = express.Router();


// ! —————————————————————————————————————————————————————————————————————————————————————
// ! Elaborate express-validator validators!!!
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


router.route('/')
.post(
  validateSignup,
  asyncHandler(async (req, res) => {
    const { username, firstName, lastName, email, password, bio, isHost } = req.body;
    const user = await User.signup({ username, firstName, lastName, email, password, bio, isHost });

    await setTokenCookie(res, user);

    return res.json({
      user
    });
  })
)


// ! —————————————————————————————————————————————————————————————————————————————————————
//! TEST SIGNUP VALIDATIONS IN BROWSER WITH DEV TOOLS
/* 
fetch('/api/users', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `Lh2ObvS1-UWftESa5wxo3N4yDw-BTvDKN6AM`
  },
  body: JSON.stringify({
    email: 'firestar@spider.man',
    username: 'Firestar',
    password: ''
  })
}).then(res => res.json()).then(data => console.log(data));
 */

/* 
todo —————————————————————————————————————————————————————————————————————————————————————
todo HERE

Try to sign up with more invalid fields to test out the checks in the validateSignup middleware. 
Make sure to cover each of the following test cases which should give back a Bad Request error:

email field is an empty string
email field is not an email
username field is an empty string
username field is only 3 characters long
username field is an email
password field is only 5 characters long
If you don't see the Bad Request error for any of these, check your syntax for the validateSignup middleware.

Commit your code once you're done testing!
*/
// ! —————————————————————————————————————————————————————————————————————————————————————

module.exports = router;