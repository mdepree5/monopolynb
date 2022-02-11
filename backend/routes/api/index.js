const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const propertiesRouter = require('./properties.js');
const reviewsRouter = require('./reviews.js');


router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/properties', propertiesRouter);
router.use('/reviews', reviewsRouter);

module.exports = router;