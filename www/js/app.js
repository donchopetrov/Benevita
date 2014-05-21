'use strict';


//angular.module('angularapp', ['ngRoute']);
angular.module('angularapp', [
  'angularapp.controllers',
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
factory('testAPIservice', function($http) {

    var testAPI = [];

    testAPI.getUsers = function() {
      return $http({
        method: 'GET', 
        url: '/include/add_user.php?get_users=TRUE',
        isArray:true
      });

    }

    testAPI.setUser = function() {
    	$http.post('/include/add_user.php?set_user=TRUE', {uid: fbid})

    }
      
    

    testAPI.testmsg = "testmsg";

    return testAPI;
  });

