var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var Tarea = mongose.model('Tarea');


var tareaSchema = new Schema({
  _idTarea: Number,
  nombre: String
});

mongoose.model('tarea', tareaSchema);
