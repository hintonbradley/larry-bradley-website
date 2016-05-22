(function() {
angular.module('LarryBradley', ['ui.router','angular-parallax'])
	.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('mailboxes', {
			url: '/mailboxes',
			templateUrl: 'app/mailboxes/mailboxes.html',
			controller: 'MailboxesController'
		})
	    .state('main', {
            url: "/",
            templateUrl: "app/main/main.html",
            controller: "MainController"
        })
	})
}());