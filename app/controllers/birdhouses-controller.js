(function() {
	//We're adding data to the angular module so it must begin with angular.module
	angular.module('LarryBradley')
	.controller('BirdhousesController', ['$scope','$state','$http',function($scope, $state, $http) {
		
		$scope.myInterval = 5000;
		  var siding = $scope.siding = [
			  {
			  	"image":"app/images/birdhouses/1front.jpg","active":true
			  },
			  {
			  	"image":"app/images/birdhouses/1side.jpg","active":false
			  },
			  {
			  	"image":"app/images/birdhouses/1back.jpg","active":false
			  },
			  ];

		$scope.myInterval = 5000;
		  var brick = $scope.brick = [
			  {
			  	"image":"app/images/mailboxes/mbx2.1.jpg","active":true
			  },
			  {
			  	"image":"app/images/mailboxes/mbx2.2.jpg","active":false
			  }
			  ];

		$scope.errorMessage = false;
		$scope.showFields = false;
		$scope.addComment = true;
		$scope.addedComment = false;

		$scope.leaveComment = function() {
			$scope.showFields = !$scope.showFields;
			$scope.addComment = false;
		}

		$scope.cancelComment = function() {
			$scope.addComment = true;
			$scope.showFields = false;
			$scope.errorMessage = false;
		}

		$scope.sendComment = function(event) {
			console.log('this.newComment.$valid is: ', this.newComment.$valid)
			console.log('this.newComment.name is: ', this.newComment.name);
			if (this.newComment.$valid) {
				$scope.errorMessage = false;
				$scope.showFields = false;
				$scope.addComment = false;
				$scope.addedComment = true;
				var request = {
					name: $scope.newComment.name,
					description: $scope.newComment.description,
					// comments submitted from the birdhouses page have a 'project' value of 2:
					project: 2
				};
				$http.post('api/birdhouses/post', request).success(function(response) {
					console.log("this is the response from the controller", response);
					$scope.comments = response;
					console.log("now we're getting comments that include new comment from controller");
					getComments(false);
				}).error(function(error) {
					console.error(error);
				})
			}
			else {
				$scope.errorMessage = "Fields may not be blank."
			}
			console.log('getting all birdhouse comments now');
			getComments();
		}

		// Creating request to grab all comments for the birdhouse page
		function getComments(initial) {
			// Creating the route for when request is made, which will have to be defined in the server.js file.
			$http.get('api/birdhouses/get').success(function (response) {
				if (initial) {
					console.log("this is comments on initialize", response)
					$scope.comments = response;
				} else {
					$scope.incomingComments = response;
				}
			})
		};
		// Initializing:
		getComments(true);
	}]);
}());