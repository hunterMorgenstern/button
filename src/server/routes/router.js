const express = require('express');
const quoteController = require('../components/quotes/quotesController');

const router = express.Router();

router.route('/quotes').get(quoteController);

module.exports = router;
