'use strict';


angular.module('angularapp', [
  'angularapp.controllers',
  'angularapp.services',
]);

var routeApp = angular.module('angularapp', ['ngRoute']);

routeApp.config(function($routeProvider) {
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
});


routeApp.config(function($httpProvider){
	$httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

routeApp.controller('mainController', ['$scope','$http','testAPIservice', function ($scope, $http, testAPIservice) {

    $scope.errors = [];
    $scope.msgs = [];

    $scope.signup = function() {

        $scope.errors.splice(0, $scope.errors.length); // remove all error messages
        $scope.msgs.splice(0, $scope.msgs.length);

        $http.get('include/new_user.php', {'uname': $scope.user_name, 'pswd': $scope.user_password, 'email': $scope.user_email}
        ).success(function(data, status, headers, config) {
            if (data.msg != '')
            {
                $scope.msgs.push(data.msg);
            }
            else
            {
                $scope.errors.push(data.error);
                $scope.msgs.push('nosuccess');
            }
        }).error(function(data, status) { // called asynchronously if an error occurs
// or server returns response with an error status.
            $scope.errors.push(status);
        });
    }

	$scope.message = 'Home page message!';

	$scope.message2 = testAPIservice.testmsg;

}]);

routeApp.controller('aboutController', function($scope) {
	$scope.message = 'About page redirect.';
});

routeApp.controller('contactController', function($scope) {
	$scope.message = 'Contact us page redirect.';
});

routeApp.factory('testAPIservice', function($http) {

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

