// Keyword 'require' is used in Node to import modules.

// adding express to handle our routing and api calls:
var express = require('express');
// Adding Mongoose (a Node library that allows Node to interface with a Mongo db by translating data in the database to JavaScript objects to be used in the app)
var mongoose = require('mongoose');

// bodyParser to use when we send data from the front end to the server. 
var bodyParser = require('body-parser');

var app = express();

//CONNECT TO DATABASE:
// Old code (post mLabs):
// mongoose.connect('mongodb://localhost:27017/larrybradley');

// New code for mLabs:
var mongodbUri = process.env.MONGODB_URI;

// mongoose.connect(mongodbUri);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'there is a connection error with the mLabs db:'));
// End of db code.

app.use(bodyParser.json());

// Invoking middleware for paths for app and node_modules directories:
app.use('/app', express.static(__dirname + "/app"));
app.use('/node_modules', express.static(__dirname + "/node_modules"));

// For parallax
app.use('/bower_components', express.static(__dirname + "/bower_components"));
app.use('/images', express.static(__dirname + "/app/images"));


// Requiring controllers:
var commentsController = require('./server/controllers/comments-controller');

// GET REQUESTS - handled by express
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

// API CALLS - handled by express
// Creating get and post requests equal to the get/post routes created in the project-controller (client side), and then calling the get/post functions inside the commentsController (server side)
app.post('/api/mailboxes/post', commentsController.postMailboxComment);
app.get('/api/mailboxes/get', commentsController.getMailboxComments);
app.post('/api/birdhouses/post', commentsController.postBirdhouseComment);
app.get('/api/birdhouses/get', commentsController.getBirdhouseComments);
app.post('/api/minihouses/post', commentsController.postMinihouseComment);
app.get('/api/minihouses/get', commentsController.getMinihouseComments);
app.post('/api/pethouses/post', commentsController.postPethouseComment);
app.get('/api/pethouses/get', commentsController.getPethouseComments);

// original:
// app.listen('3000', function(){
// 	console.log("I'm listening");
// });

// for heroku:
app.listen(process.env.PORT || 3000), function () {
  console.log("SERVER RUNNING");
};