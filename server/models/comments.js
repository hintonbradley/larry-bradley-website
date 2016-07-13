// Injecting mongoose as a dependancy:
var mongoose = require('mongoose');

// Creating a module and defining the Comment model while exporting to be used in the comments-controller:
module.exports = mongoose.model('Comment', {
	name: String,
	description: String,
	project: Number,
	date: {type: Date, default: Date.now}
});