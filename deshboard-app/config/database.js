var mongoose = require('mongoose');

module.exports = function() {
  var db = mongoose.connect(
    'mongodb://mongo_server:server00@ds133249.mlab.com:33249/mongo_server',
    function(err) {
      if (err) {
        console.log("Error de Conexión");
      } else {
        console.log("Conexión establecida");
      }
    });

  // definir los modelos
  require('../models/proyecto');
  require('../models/tarea');

  return db;
};
