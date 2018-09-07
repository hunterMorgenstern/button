const { Schema } = require('mongoose');
const mongoose = require('../mongoApp');

const quotes = require('./seedDb');

const quoteSchema = new Schema({
  quote: String,
  name: String,
});

const Quotes = mongoose.model('quote', quoteSchema);

// // Seeds db
// Quotes.insertMany(quotes.map(q => new Quotes({ quote: q.quote, name: q.name })))
//   .then(docs => {
//     // console.log('stored dummy data', docs);
//     // response.json(docs);
//   })
//   .catch(err => {
//     console.error(err);
//     // response.status(500).send(err);
//   });

module.exports = Quotes;
