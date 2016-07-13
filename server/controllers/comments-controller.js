// Requiring Comment model from models directory
var Comment = require('../models/comments');

// Old code (sync):
// module.exports.postMailboxComment = function (req, res) {
// 	var comment = new Comment(req.body);
// 	comment.save();

// 	Comment.find({"project":1})
// 		.sort({date: -1}).exec(function(err, allComments){
// 		if (err) {
// 			res.error(error);
// 		} else {
// 			res.json(allComments);
// 		}
// 	});
// }

// New code (async):
module.exports.postMailboxComment = function (req, res) {
	var comment = new Comment(req.body);
	comment.save()
	.then(function(response){
		if(response._id) {
			Comment.find({"project":1})
			.sort({date: -1})
			.exec(function(err, allComments){
				if (err) {
					res.error(error);
				} 
				else {
				res.json(allComments);
				}
			})
		}
	})
};

module.exports.getMailboxComments = function (req, res) {
	Comment.find({"project":1})
	.sort({date: -1})
	.exec(function(err, allComments) {
		if (err) {
			res.error(err)
		} else {
			res.json(allComments);
		}
	})
}

// Old Code (sync):
// module.exports.postBirdhouseComment = function (req, res) {
// 	var comment = new Comment(req.body);
// 	comment.save();

// 	Comment.find({"project":2})
// 		.sort({date: -1}).exec(function(err, allComments){
// 		if (err) {
// 			res.error(error);
// 		} else {
// 			res.json(allComments);
// 		}
// 	});
// }

// New Code (async):
module.exports.postBirdhouseComment = function (req, res) {
	var comment = new Comment(req.body);
	comment.save()
	.then(function(response){
		if(response._id) {
			Comment.find({"project":2})
				.sort({date: -1})
				.exec(function(err, allComments){
				if (err) {
					res.error(error);
				} else {
					res.json(allComments);
				}
			});
		}
	})
}

// creating the function that will grab all the birdhouse comments from the database
module.exports.getBirdhouseComments = function (req, res) {
	// grabbing all comments that have a project value of 2 (comments made on birdhouses page)
	Comment.find({"project":2})
	// sorting by date, descending
	.sort({date: -1})
	.exec(function(err, allComments) {
		if (err) {
			console.log ("there is a birdhouse err: ", err)
			res.error(err)
		} else {
			console.log("all comments from the comments controller are: ", allComments);
			res.json(allComments);
		}
	})
}

// Old code (sync):
// module.exports.postMinihouseComment = function (req, res) {
// 	var comment = new Comment(req.body);
// 	comment.save();

// 	Comment.find({"project":3})
// 		.sort({date: -1}).exec(function(err, allComments){
// 		if (err) {
// 			res.error(error);
// 		} else {
// 			res.json(allComments);
// 		}
// 	});
// }

// New code (async):
module.exports.postMinihouseComment = function (req, res) {
	var comment = new Comment(req.body);
	comment.save()
	.then(function(response){
		if(response._id) {
			Comment.find({"project":3})
				.sort({date: -1})
				.exec(function(err, allComments){
				if (err) {
					res.error(error);
				} else {
					res.json(allComments);
				}
			});
		}
	})
}

// creating the function that will grab all the minihouses comments from the database
module.exports.getMinihouseComments = function (req, res) {
	// grabbing all comments that have a project value of 2 (comments made on birdhouses page)
	Comment.find({"project":3})
	// sorting by date, descending
	.sort({date: -1})
	.exec(function(err, allComments) {
		if (err) {
			console.log ("there is a minihouse err: ", err)
			res.error(err)
		} else {
			console.log("all comments from the comments controller are: ", allComments);
			res.json(allComments);
		}
	})
}

// sync (old):
// module.exports.postPethouseComment = function (req, res) {
// 	var comment = new Comment(req.body);
// 	comment.save();

// 	Comment.find({"project":4})
// 		.sort({date: -1}).exec(function(err, allComments){
// 		if (err) {
// 			res.error(error);
// 		} else {
// 			res.json(allComments);
// 		}
// 	});
// }

// asycn (new):
module.exports.postPethouseComment = function (req, res) {
	var comment = new Comment(req.body);
	console.log('the comment is: ', comment);
	comment.save()
	.then(function(response){
		console.log("the response is: ", response);
		console.log(response._id);
		if(response._id) {
			Comment.find({"project":4})
				.sort({date: -1})
				.exec(function(err, allComments){
				if (err) {
					res.error(error);
				} else {
					res.json(allComments);
				}
			});
		}
	})
}

module.exports.getPethouseComments = function (req, res) {
	// grabbing all comments that have a project value of 4 (comments made on birdhouses page)
	Comment.find({"project":4})
	// sorting by date, descending
	.sort({date: -1})
	.exec(function(err, allComments) {
		if (err) {
			console.log ("there is a pethouse err: ", err)
			res.error(err)
		} else {
			console.log("all comments from the comments controller are: ", allComments);
			res.json(allComments);
		}
	})
}