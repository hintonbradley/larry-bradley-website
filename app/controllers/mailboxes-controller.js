(function() {
	//We're adding data to the angular module so it must begin with angular.module
	angular.module('LarryBradley')
	.controller('MailboxesController', ['$scope','$state','$http',function($scope, $state, $http) {
		
		$scope.myInterval = 5000;
		  var siding = $scope.siding = [
			  {
			  	"image":"app/images/mailboxes/mbx1.jpg","active":true
			  },
			  {
			  	"image":"app/images/mailboxes/mbx2.jpg","active":false
			  },
			  {
			  	"image":"app/images/mailboxes/mbx3.jpg","active":false
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

		$scope.sendComment = function(event) {
			console.log('this.newComment.$valid is: ', this.newComment.$valid)
			console.log('this.newComment.name is: ', this.newComment.name);
			if (this.newComment.$valid) {
				$scope.showFields = false;
				$scope.addComment = false;
				$scope.errorMessage = false;
				$scope.addedComment = true;
				var request = {
					name: $scope.newComment.name,
					description: $scope.newComment.description,
					// comments submitted from the mailboxes page have a 'project' value of 1:
					project: 1
				};
				$http.post('api/mailboxes/post', request).success(function(response) {
					$scope.comments = response;
				}).error(function(error) {
					console.error(error);
				})
			} else {
				$scope.errorMessage = "Fields may not be blank."
			}
		};

		function getComments(initial) {
			$http.get('api/mailboxes/get').success(function (response) {
				if (initial) {
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