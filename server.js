var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

//CONNECT TO DATABASE:
mongoose.connect('mongodb://localhost:27017/larrybradley');

// Invoking middleware for paths for app and node_modules directories:
app.use('/app', express.static(__dirname + "/app"));
app.use('/node_modules', express.static(__dirname + "/node_modules"));

// For parallax
app.use('/bower_components', express.static(__dirname + "/bower_components"));
app.use('/images', express.static(__dirname + "/app/images"));

// GET REQUESTS
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});


app.listen('3000', function(){
	console.log("I'm listening for Larry!");
});