(function() {
	//We're adding data to the angular module so it must begin with angular.module
		angular.module('LarryBradley')
		.controller('MainController', ['$scope','$state','$log', function($scope, $state, $log) {

			  $scope.status = {
			    isopen: false
			  };

			  $scope.toggled = function(open) {
			    $log.log('Dropdown is now: ', open);
			  };

			  $scope.toggleDropdown = function($event) {
			    $event.preventDefault();
			    $event.stopPropagation();
			    $scope.status.isopen = !$scope.status.isopen;
			  };

			  $scope.myInterval = 5000;
			  var slides = $scope.slides = [
				  {
				  	"image":"app/images/garage/garage.jpg","text":"My Garage","state":"garage", "active":true
				  },
				  {
				  	"image":"app/images/mailboxes/mbx3.jpg","text":"Mailboxes","state":"mailboxes","active":false
				  },
				  {
				  	"image":"app/images/mini-homes/gnomehome.jpg","text":"Miniature Houses","state":"minihouses","active":false
				  },
				  {
				  	"image":"app/images/birdhouses/birdhouse1.png","text":"Birdhouses","state":"birdhouses","active":false
				  }
				  ];
		}]);
	}());