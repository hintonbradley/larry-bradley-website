var Comment = require('../models/comments');

module.exports.postComment = function (req, res) {
	var comment = new Comment(req.body);
	comment.save();

	Comment.find({})
		.sort({date: -1}).exec(function(err, allComments){
		if (err) {
			res.error(error);
		} else {
			res.json(allComments);
		}
	});
}

module.exports.getComments = function (req, res) {
	Comment.find({})
		.sort({date: -1})
		.exec(function(err, allComments) {
			if (err) {
				res.error(err)
			} else {
				res.json(allComments);
			}
		})
}