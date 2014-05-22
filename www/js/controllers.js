angular.module('angularapp.controllers', []).
controller('step1RegController', ['$scope','$http', 'RegisterUser', function ($scope, $http, RegisterUser) {
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

}]).
controller('step2RegController', ['$scope','$http','RegisterUser', function ($scope, $http, RegisterUser) {

    $scope.errors = [];
    $scope.msgs = [];
    $scope.user = RegisterUser;

    $scope.msgs.push($scope.user.user_email);

}]).
controller('contactController', function($scope) {
	$scope.message = 'Contact us page redirect.';
});