(function() {
	//We're adding data to the angular module so it must begin with angular.module
	angular.module('LarryBradley')
	.controller('ProjectController', ['$scope','$state','$http',function($scope, $state, $http) {
		
		// PROJECT SLIDESHOWS
		$scope.myInterval = 5000;
		// Birdhouses
		var siding = $scope.fiveChamber = [
			{
				"image":"app/images/birdhouses/1front.jpg","active":true
			},
			{
				"image":"app/images/birdhouses/birdhouse1.png","active":false
			},
			{
				"image":"app/images/birdhouses/1back.jpg","active":false
			}
		];

		var brick = $scope.cylindrical = [
			{
				"image":"app/images/birdhouses/barrys.jpg","active":true
			}
		];

		// Mailboxes
		var siding = $scope.siding = [
			{
				"image":"app/images/mailboxes/mbx1.jpg","active":true
			},
			{
				"image":"app/images/mailboxes/mbx2.jpg","active":false
			},
			{
				"image":"app/images/mailboxes/mbx3.jpg","active":false
			}
		];

		var brick = $scope.brick = [
			{
				"image":"app/images/mailboxes/mbx2.1.jpg","active":true
			},
			{
				"image":"app/images/mailboxes/mbx2.2.jpg","active":false
			}
		];

		// Miniature Houses
		var siding = $scope.halfTimber = [
			{
				"image":"app/images/mini-homes/gnomehome.jpg","active":true
			},
			{
				"image":"app/images/mini-homes/ghome-front.jpg","active":false
			},
			{
				"image":"app/images/mini-homes/ghome-left.jpg","active":false
			},
		];

		var brick = $scope.minihouse2 = [
			{
				"image":"app/images/mailboxes/mbx2.1.jpg","active":true
			},
			{
				"image":"app/images/mailboxes/mbx2.2.jpg","active":false
			}
		];

		//Pet Houses
		$scope.catHouse = [
			{
				"image":"app/images/pethouses/catCenter.jpg","active":true
			},
			{
				"image":"app/images/pethouses/catLeft.jpg","active":false
			},
			{
				"image":"app/images/pethouses/catRight.jpg","active":false
			}
			// {
			// 	"image":"app/images/pethouses/catHead.jpg","active":false
			// }
		];

		$scope.dogHouse = [
			{
				"image":"app/images/pethouses/dogFront.JPG","active":true
			},
			{
				"image":"app/images/pethouses/dogSide.JPG","active":false
			},
			{
				"image":"app/images/pethouses/dogBack.JPG","active":false
			}
		];


		// COMMENTS
		$scope.showFields = false;
		$scope.addComment = true;
		$scope.errorMessage = false;
		$scope.addedComment = false;

		$scope.leaveComment = function() {
			$scope.showFields = true;
			$scope.addComment = false;
		}

		$scope.cancelComment = function() {
			$scope.addComment = true;
			$scope.showFields = false;
			$scope.errorMessage = false;
		}

		$scope.sendComment = function(projectNum, location) {
			if (this.newComment.$valid) {
				$scope.showFields = false;
				$scope.addComment = false;
				$scope.errorMessage = false;
				$scope.addedComment = true;
				var request = {
					name: $scope.newComment.name,
					description: $scope.newComment.description,
					// comments submitted from the mailboxes page have a 'project' value of 1:
					project: projectNum
				};
				$http.post('api/' + location + '/post', request).success(function(response) {
					$scope.comments = response;
				}).error(function(error) {
					console.error(error);
				})
			} else {
				$scope.errorMessage = "Fields may not be blank."
			}
		};

		// Creating request to grab all comments for the birdhouse page
		function getComments(initial, state) {
			// Creating the route for when request is made, which will have to be defined in the server.js file.
			$http.get('api/' + state + '/get').success(function (response) {
				if (initial) {
					console.log("comments are: ", $scope.comments)
					$scope.comments = response;
				} else {
					$scope.incomingComments = response;
				}
			})
		};

		function findState() {
			if ($state.$current.includes.mailboxes===true) {
				getComments(true, 'mailboxes');
			}
			else if ($state.$current.includes.birdhouses===true) {
				getComments(true, 'birdhouses');
			}
			else if ($state.$current.includes.minihouses===true) {
				getComments(true, 'minihouses');
			}
			else if ($state.$current.includes.pethouses===true) {
				getComments(true, 'pethouses');
			}
			else {
				console.log("No state");
			}
		}

		findState();
	}]);
}());