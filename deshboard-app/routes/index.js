var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'deshboard'
  });
});

// POST a new blob
router.post(function(req, res, next) {
  // Get values from POST request. These can be done through forms or REST
  // calls. These rely on the "name" attributes for forms
  var titulo = req.body.inputTitulo;
  var descripcion = rep.body.comment;
  var responsable = rep.body.inputResponsable;
  // var estado = rep.body.;

  // call the create function for our database
  mongoose.model('tarea').create({
      titulo: titulo,
      descripcion: descripcion,
      responsable: responsable
        // estado: estado
    },
    function(err, tarea) {
      if (err) {
        res.send("No podemos ingresar los datos a la base de Datos.");
      } else {
        // Blob has been created
        res.send("EXITO");
        console.log('POST creating new Tarea: ' + tarea);
        res.format({
          // HTML response will set the location and redirect back to the
          // home page. You could also create a 'success' page if that's
          // your thing
          html: function() {
            // If it worked, set the header so the address bar doesn't
            // still say /adduser
            res.location("/");
            // And forward to success page
            res.redirect("/");
          },
          // JSON response will show the newly created blob
          json: function() {
            res.json(tarea);
          }
        });
      }
    })
});

module.exports = router;
