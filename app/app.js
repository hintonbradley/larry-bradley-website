(function() {
angular.module('LarryBradley', ['ui.router','angular-parallax','ui.bootstrap','ngAnimate'])
	.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('mailboxes', {
			url: '/mailboxes',
			templateUrl: 'app/views/mailboxes.html',
			controller: 'MailboxesController'
		})
	    .state('main', {
            url: "/",
            templateUrl: "app/views/main.html",
            controller: "MainController"
        })
        .state('birdhouses', {
            url: "/birdhouses",
            templateUrl: "app/views/birdhouses.html",
            controller: "BirdhousesController"
        })
        .state('slideshow', {
            url: "/slideshow",
            templateUrl: "app/views/slideshow.html",
            controller: "SlideshowController"
        })
        .state('minihouses', {
            url: "/miniaturehouses",
            templateUrl: "app/views/mini-houses.html",
            controller: "MinihousesController"
        })
	})
}());