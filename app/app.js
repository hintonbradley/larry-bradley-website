// Wrapping in anonymous function in order prevent global variables from colliding (or to prevent ports from running into each other?) when code is minified.

// Defining angular module. All other additions to the angular module need to begin with 'angular.module('LarryBradley').<new_code>'
(function() {
angular.module('LarryBradley', ['ui.router','angular-parallax','ui.bootstrap','ngAnimate'])
	.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('mailboxes', {
			url: '/mailboxes',
			templateUrl: 'app/views/mailboxes.html',
			controller: 'ProjectController'
		})
	    .state('main', {
            url: "/",
            templateUrl: "app/views/main.html",
            controller: "MainController"
        })
        .state('birdhouses', {
            url: "/birdhouses",
            templateUrl: "app/views/birdhouses.html",
            controller: "ProjectController"
        })
        .state('minihouses', {
            url: "/miniaturehouses",
            templateUrl: "app/views/mini-houses.html",
            controller: "ProjectController"
        })
        .state('pethouses', {
            url: "/pethouses",
            templateUrl: "app/views/pethouses.html",
            controller: "ProjectController"
        })
	})
}());