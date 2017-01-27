var mongoose = require('mongoose');

var ulrserver =
  'mongodb://mongo_server:server00@ds133249.mlab.com:33249/mongo_server'
mongoose
  .connect(ulrserver);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("Conexion exitosa!!!");
});
