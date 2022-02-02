const router = require('express').Router();

// todo ——————————————————————————————————————————————————————————————————————————————————
//todo Testing API routes

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

// POST /api/test
router.post('/test', function(req, res) {
  res.json({ requestBody: req.body });
});


// todo ——————————————————————————————————————————————————————————————————————————————————




module.exports = router;




// fetch('/api/test', {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "XSRF-TOKEN": `Lh2ObvS1-UWftESa5wxo3N4yDw-BTvDKN6AM`
//   },
//   body: JSON.stringify({ hello: 'world' })
// }).then(res => res.json()).then(data => console.log(data));