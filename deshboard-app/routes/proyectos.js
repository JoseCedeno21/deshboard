var express = require('express');
var router = express.Router();
var Proyecto = require('../models/proyecto');
var Tarea = require('../models/tarea');

router.get('/', function(req, res, next) {
  Proyecto.find(function(err, bears) {
    if (err) {
      res.send(err);
    }
    res.json(bears);
  });
});

router.get('/', function(req, res, next) {

      // ejemplo save

      var proyecto = new Proyecto({
        nombre: "proyecto1"
      });

      proyecto.save(function(err) {

        if (err)
          return handleError(err);
        var tarea1 = new Tarea({
          titulo: "tarea1",
          descripcion: "esto es un ejemplo",
          responsable: "juanito pelaez",
          estado: 1,
          proyecto: proyecto._id
        });
        var tarea2 = new Tarea({
          titulo: "tarea2",
          descripcion: "esto es un ejemplo 2",
          responsable: "juanito pelaez el segundo",
          estado: 2,
          proyecto: proyecto._id
        });

        // setea las tareas como individuales
        tarea1.save(function(err) {
          if (err)
            return handleError(err);
        });

        tarea2.save(function(err) {
          if (err)
            return handleError(err);
        });

        res.send("EXITOSAMENTE INGRESADOS");

      });
