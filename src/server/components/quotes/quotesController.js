// import model
const Quotes = require('../../mongo/models/quoteModel');

const quoteController = async (req, res) => {
  try {
    const data = await Quotes.find({});
    return res.status(200).send(data);
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = quoteController;
