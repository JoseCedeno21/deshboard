var mongoose = require('mongoose');

var urlx =
  'mongodb://mongo_server:server00@ds127389.mlab.com:27389/proyectosdaw';

var urlz = 'mongodb://mongo_server:server00@ds131099.mlab.com:31099/proyectos';
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
