angular.module('angularapp.controllers', []).
controller('mainController', ['$scope','$http', 'testAPIservice', function ($scope, $http, testAPIservice) {

	$scope.errors = [];
    $scope.msgs = [];

    $scope.signup = function() {

        $scope.errors.splice(0, $scope.errors.length); // remove all error messages
        $scope.msgs.splice(0, $scope.msgs.length);

        $http.get('http://project.evgeni.svn.webfactory.bg/api/new_user.php', {'uname': $scope.user_name, 'pswd': $scope.user_password, 'email': $scope.user_email}
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

}]).
controller('aboutController', ['$scope', '$http', 'runkeeperAPIservice', function($scope, $http, runkeeperAPIservice) {
	$scope.errors = [];
    $scope.msgs = [];
/*    $scope.signup = function() {
        $scope.errors.splice(0, $scope.errors.length); // remove all error messages
        $scope.msgs.splice(0, $scope.msgs.length);

        
    }*/
    runkeeperAPIservice.getUser().success(function (data) {
        $scope.userInfo = data;
        $scope.userInfo.push(data);
    });
	$scope.message = 'about page message!';
}]).
controller('contactController', function($scope) {
	$scope.message = 'Contact us page redirect.';
});