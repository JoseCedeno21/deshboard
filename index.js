// agregar dependencias 
var express = require('express');
var http = require('http');

var app = express();
var server = http.createServer(app);

//motor de plantillas
app.set('views', __dirname + '/app/views');
app.set('view engine', 'jade');
app.locals.pretty = true; //nocompimir codigo

//archivos estaticos
app.use('/bower_components', express.static(__dirname + '/bower_components'))

//configurar ruta de la aplicación
app.get('/', function(request, response){
	response.render('index');
});

server.listen(3000, function(){
	console.log('servidor iniciado en localhost:3000');
});