const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User } = require('../../db/models');
const router = express.Router();





router.route('/')
.post(
  asyncHandler(async (req, res, next) => {
    const { credential, password } = req.body;

    const user = await User.login({ credential, password });

    if (!user) {
      const err = new Error('Login failed');
      err.status = 401;
      err.title = 'Login failed';
      err.errors = ['The provided credentials were invalid.'];
      return next(err);
    }

    await setTokenCookie(res, user);

    return res.json({
      user
    });
  })
)
.get(
  restoreUser,
  (req, res) => {
    const { user } = req;
    if (user) {
      return res.json({
        user: user.toSafeObject()
      });
    }
    return res.json({});
  }
)
.delete(
  (_req, res) => {
    res.clearCookie('token');
    return res.json({ message: 'success' });
  }
);


// fetch('/api/session', {
//   method: 'POST',
//   headers: {
//     "Content-Type": "application/json",
//     "XSRF-TOKEN": `Lh2ObvS1-UWftESa5wxo3N4yDw-BTvDKN6AM`
//   },
//   body: JSON.stringify({ credential: 'demo@user.io', password: 'demo8' })
// }).then(res => res.json()).then(data => console.log(data));





module.exports = router;