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
			controller  : 'step1RegController'
		})

        .when('/step2', {
            templateUrl : 'partials/step2.html',
            controller  : 'step2RegController'
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