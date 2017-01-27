var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var Tarea = mongose.model('Tarea');

var tareaSchema = new Schema({
  titulo: String,
  descripcion: String,
  responsable: String,
  estado: {
    type: Number,
    enum: [1, 2, 3]
  },
  proyecto: {
    type: Schema.Types.ObjectId,
    ref: 'Proyecto'
  }
});

var Tarea = mongoose.model('tarea', tareaSchema);
module.exports = Tarea;
