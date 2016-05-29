(function() {
	//We're adding data to the angular module so it must begin with angular.module
	angular.module('LarryBradley')
	.controller('MailboxesController', ['$scope','$state','$http',function($scope, $state, $http) {
		
		$scope.myInterval = 5000;
		  var siding = $scope.siding = [
			  {
			  	"image":"app/images/mbx1.jpg","active":true
			  },
			  {
			  	"image":"app/images/mbx2.jpg","active":false
			  },
			  {
			  	"image":"app/images/mbx3.jpg","active":false
			  },
			  ];

		$scope.myInterval = 5000;
		  var brick = $scope.brick = [
			  {
			  	"image":"app/images/mbx2.1.jpg","active":true
			  },
			  {
			  	"image":"app/images/mbx2.2.jpg","active":false
			  }
			  ];


		$scope.sendComment = function(event) {
			var request = {
				name: $scope.newComment.name,
				description: $scope.newComment.description
			};
			$http.post('api/mailboxes/post', request).success(function(response) {
				console.log(response);
				$scope.comments = response;
			}).error(function(error) {
				console.error(error);
			})
		}

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