angular.module('angularapp.controllers', []).
controller('mainController', ['$scope', 'testAPIservice', function ($scope, testAPIservice) {

	$scope.message = 'Home page message!';

	$scope.message2 = testAPIservice.testmsg;

}]).
controller('aboutController', function($scope) {
	$scope.message = 'About page redirect.';
}).
controller('contactController', function($scope) {
	$scope.message = 'Contact us page redirect.';
});