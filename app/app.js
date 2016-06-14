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