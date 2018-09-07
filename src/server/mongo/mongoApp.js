const mongoose = require('mongoose');
require('dotenv').config();

const uri = `mongodb://${process.env.MLAB_USER}:${
  process.env.MLAB_PW
}@ds039125.mlab.com:39125/heroku_h2sht8qv`;
// use for local db
// 'mongodb://localhost/button';
// use for mlab
// 'mongodb://<dbuser>:<dbpassword>@<host1>:<port1>,<host2>:<port2>/<dbname>?replicaSet=<replicaSetName>';

// mlab options to compensate for heroku sandbox level plan
const options = {
  socketOptions: {
    keepAlive: 300000,
    connectTimeoutMS: 30000,
  },
};

mongoose.connect(
  uri,
  options
);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

module.exports = mongoose;
