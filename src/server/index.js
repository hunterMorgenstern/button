const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./routes/router');

const app = express();
const port = process.env.PORT || 5000;

require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../../public')));

app.use('/api', router);

app.get('/', (req, res) => res.send(200));

app.listen(port, () => console.log(`Button listening on port ${port}`));
