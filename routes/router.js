const router = require('express').Router();

// Services

const servicesRouter = require('./services');

router.use('/', servicesRouter);

// Parties

const partysRouter = require('./parties');

router.use('/', partysRouter);

module.exports = router;