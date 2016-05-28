(function() {
	//We're adding data to the angular module so it must begin with angular.module
	angular.module('LarryBradley')
	.controller('MailboxesController', ['$scope','$state','$http',function($scope, $state, $http) {
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