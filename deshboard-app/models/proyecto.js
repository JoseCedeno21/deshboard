var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var Tarea = mongose.model('Tarea');

var proyectos = new Schema({

  nombre: String

});

mongoose.model('Proyecto', proyectos);

module.exports = Proyecto;
