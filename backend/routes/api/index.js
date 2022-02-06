const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const propertiesRouter = require('./properties.js');

//* ARCHITECTURE CHOICE: Do I want to condense my routers and include bookings with user and reviews with property?
// const bookingsRouter = require('./bookings.js');
// const reviewsRouter = require('./reviews.js');


router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/properties', propertiesRouter);

module.exports = router;