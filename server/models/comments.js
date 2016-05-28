var mongoose = require('mongoose');

module.exports = mongoose.model('Comment', {
	name: String,
	description: String,
	project: Number,
	date: {type: Date, default: Date.now}
});