var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

CONNECT TO DATABASE:
Old code (post mLabs):
mongoose.connect('mongodb://localhost:27017/larrybradley');

// New code for mLabs:
// var mongodbUri = process.env.MONGODB_URI;
// mongoose.connect(mongodbUri);
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'there is a connection error with the mLabs db:'));
// End of db code.

app.use(bodyParser.json());

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

// Requiring controllers:
var commentsController = require('./server/controllers/comments-controller');


// POST COMMENTS
// Authentication
// Creating a post request equal to the post route created in the signup-controller (api/user/signup), and then calling the signup function inside the commentsController
app.post('/api/mailboxes/post', commentsController.postMailboxComment);
app.get('/api/mailboxes/get', commentsController.getMailboxComments);
app.post('/api/birdhouses/post', commentsController.postBirdhouseComment);
// (from the birdhouse-controller) defining the get route to grab all the birdhouse comments from the db, and calling getBirdhouseComments function in the comments-controller
app.get('/api/birdhouses/get', commentsController.getBirdhouseComments);
app.post('/api/minihouses/post', commentsController.postMinihouseComment);
app.get('/api/minihouses/get', commentsController.getMinihouseComments);

// original:
// app.listen('3000', function(){
// 	console.log("I'm listening for Larry!");
// });

// for heroku:
app.listen(process.env.PORT || 3000), function () {
  console.log("SERVER RUNNING");
};