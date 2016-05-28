(function() {
	//We're adding data to the angular module so it must begin with angular.module
		angular.module('LarryBradley')
		// .controller('SlideshowController', ['$scope','$state',function($scope, $state) {

		  // $scope.myInterval = 3000;
		  // $scope.noWrapSlides = false;
		  // var slides = $scope.slides = [
		  // {
		  // 	"image":"app/images/garage.jpg","text":"My Garage","state":"garage", "active":true
		  // },
		  // {
		  // 	"image":"app/images/mbx3.jpg","text":"Mailboxes","state":"mailboxes","active":false
		  // },
		  // {
		  // 	"image":"app/images/gnomehome.jpg","text":"Miniature Houses","state":"minihouses","active":false
		  // },
		  // {
		  // 	"image":"app/images/birdhouse1.png","text":"Birdhouses","state":"birdhouses","active":false
		  // }
		  // ];


.controller('SlideshowController', ['$scope','$state',function($scope, $state) {
  $scope.myInterval = 5000;
  var slides = $scope.slides = [
		  {
		  	"image":"app/images/garage.jpg","text":"My Garage","state":"garage", "active":true
		  },
		  {
		  	"image":"app/images/mbx3.jpg","text":"Mailboxes","state":"mailboxes","active":false
		  },
		  {
		  	"image":"app/images/gnomehome.jpg","text":"Miniature Houses","state":"minihouses","active":false
		  },
		  {
		  	"image":"app/images/birdhouse1.png","text":"Birdhouses","state":"birdhouses","active":false
		  }
		  ];
  // $scope.addSlide = function() {
  //   var newWidth = 600 + slides.length + 1;
  //   slides.push({
  //     image: 'http://placekitten.com/' + newWidth + '/300',
  //     text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
  //       ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
  //   });
  // };
  // for (var i=0; i<4; i++) {
  //   $scope.addSlide();
  // }

  $scope.items = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];

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


		}]);
	}());

