const router = require('express').Router()
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const {validateSignup} = require('../middleware/formValidators');
const { User, Property } = require('../../db/models');

// todo ——————————————————————————————————————————————————————————————————————————————————

router.route('/')
.post(validateSignup, asyncHandler
  (async (req, res) => {
    const { username, firstName, lastName, email, password, bio, isHost } = req.body;
    const user = await User.signup({ username, firstName, lastName, email, password, bio, isHost });

    await setTokenCookie(res, user);

    return res.json({user});
  })
)

router.route('/:userId/properties')
.get(asyncHandler
  (async (req, res) => res.json(await Property.getPropertiesByUserId(req.params.userId)))
)

module.exports = router;