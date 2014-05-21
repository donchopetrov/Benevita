'use strict';

angular.module('angularapp', [
  'angularapp.controllers',
  'angularapp.services',
  'ngRoute',
]).
config(['$routeProvider', function($routeProvider) {
	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl : 'partials/home.html',
			controller  : 'mainController'
		})

		// route for the about page
		.when('/about', {
			templateUrl : 'partials/about.html',
			controller  : 'aboutController'
		})

		// route for the contact page
		.when('/contact', {
			templateUrl : 'partials/contact.html',
			controller  : 'contactController'
		});
}]).
config(function($httpProvider){
	$httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

