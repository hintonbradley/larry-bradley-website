(function() {
	//We're adding data to the angular module so it must begin with angular.module
		angular.module('LarryBradley')
		.controller('MainController', ['$scope','$state','$log', function($scope, $state, $log) {

			  // $scope.status = {
			  //   isopen: false
			  // };

			  // $scope.toggled = function(open) {
			  //   $log.log('Dropdown is now: ', open);
			  // };

			  // $scope.toggleDropdown = function($event) {
			  //   $event.preventDefault();
			  //   $event.stopPropagation();
			  //   $scope.status.isopen = !$scope.status.isopen;
			  // };

		}]);
	}());