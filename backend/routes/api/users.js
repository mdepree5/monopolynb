const router = require('express').Router()
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const {validateSignup} = require('../middleware/formValidators');
const { User, Property } = require('../../db/models');

// todo ——————————————————————————————————————————————————————————————————————————————————

router.route('/')
.post(validateSignup, asyncHandler
  (async (req, res) => {
    const user = await User.signup(req.body);
    
    await setTokenCookie(res, user);

    return res.json({user});
  })
)

router.route('/:userId')
.get(asyncHandler
  (async (req, res) => res.json(await User.getUserById(req.params.userId)))
)

router.route('/:userId/properties')
.get(asyncHandler
  (async (req, res) => res.json(await Property.getPropertiesByUserId(req.params.userId)))
)

module.exports = router;