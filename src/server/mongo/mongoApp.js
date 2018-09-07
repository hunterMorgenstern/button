const mongoose = require('mongoose');

const uri = 'mongodb://localhost/button';
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
