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
});


/*routeApp.config(function($httpProvider){
	$httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});*/

routeApp.controller('step1RegController', ['$scope','$http','RegisterUser', function ($scope, $http, RegisterUser) {

    $scope.user = RegisterUser;
    $scope.user.user_name = $scope.user_name;   
    $scope.user.user_password = $scope.user_password;
    $scope.user.user_email = $scope.user_email;

    $scope.errors = [];
    $scope.msgs = [];
    $scope.step2 = function() {
        myService.set($scope);

        $scope.errors.splice(0, $scope.errors.length); // remove all error messages
        $scope.msgs.splice(0, $scope.msgs.length);

    }

}]);

routeApp.controller('step2RegController', ['$scope','$http','RegisterUser', function ($scope, $http, RegisterUser) {

    $scope.errors = [];
    $scope.msgs = [];
    $scope.user = RegisterUser;

    $scope.msgs.push($scope.user.user_email);

}]);

routeApp.controller('contactController', function($scope) {
	$scope.message = 'Contact us page redirect.';
});


routeApp.factory("RegisterUser",function(){
        return {};
});

// working POST to access and INSERT into DB user info
/*        $http.post('http://project.evgeni.svn.webfactory.bg/api/new_user.php', {'uname': $scope.user_name, 'pswd': $scope.user_password, 'email': $scope.user_email}
        ).success(function(data, status, headers, config) {
            if (data.msg != '')
            {
                $scope.msgs.push(data.msg);
            }
            else
            {
                $scope.errors.push(data.error);
            }
        }).error(function(data, status) { 
            $scope.errors.push(status);
        });*/