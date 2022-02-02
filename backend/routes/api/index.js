const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');


router.use('/session', sessionRouter);
router.use('/users', usersRouter);

// todo ——————————————————————————————————————————————————————————————————————————————————


router.post('/test', function(req, res) {
  res.json({ requestBody: req.body });
});




module.exports = router;











/*
// todo ——————————————————————————————————————————————————————————————————————————————————
//todo Testing API routes

fetch('/api/test', {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `Lh2ObvS1-UWftESa5wxo3N4yDw-BTvDKN6AM`
  },
  body: JSON.stringify({ hello: 'world' })
}).then(res => res.json()).then(data => console.log(data));


// GET /api/set-token-cookie
const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');

router.get('/set-token-cookie', asyncHandler(async (_req, res) => {
  const user = await User.findOne({
      where: {
        username: 'demoUser1'
      }
    });
  setTokenCookie(res, user);
  return res.json({ user });
}));

// GET /api/restore-user
const { restoreUser } = require('../../utils/auth.js');
router.get(
  '/restore-user',
  restoreUser,
  (req, res) => res.json(req.user)
);

// GET /api/require-auth
const { requireAuth } = require('../../utils/auth.js');
router.get(
  '/require-auth',
  requireAuth,
  (req, res) => res.json(req.user)
);
 */