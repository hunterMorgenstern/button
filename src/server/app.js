const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const data = require('./db');

const app = express();
const router = express.Router();
const port = process.env.PORT || 5000;

require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../../public')));
app.use('/api', router);

router.route('/quotes').get((req, res) => {
  res.json(data);
});

app.get('/', (req, res) => res.send(200));

app.listen(port, () => console.log(`Example app listening on port ${port}`));
