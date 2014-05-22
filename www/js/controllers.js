angular.module('angularapp.controllers', []).
controller('step1RegController', ['$scope','$location','RegisterUser', function ($scope, $location, RegisterUser) {

    $scope.getData = function () {
        return RegisterUser.getData();
    };
    $scope.setData= function () {
        return RegisterUser.setDataStep1($scope.step1.user_name,$scope.step1.user_password,$scope.step1.user_email );
        
    };
    $scope.redirect = function(arg){
        $location.path(arg);
    };
}]).
controller('step2RegController', ['$scope','$location','RegisterUser', function ($scope, $location, RegisterUser) {

    $scope.getData = function () {
        $scope.data = RegisterUser.getData();
        return $scope.data;      
    };
    $scope.setData= function () {
        return RegisterUser.setDataStep2($scope.step2.gender,$scope.step2.dateofbirth,$scope.step2.units,$scope.step2.height,$scope.step2.currentweight,$scope.step2.goalweight );
        
    };
    $scope.redirect = function(arg){
        $location.path(arg);
    };


}]).
controller('step3RegController', ['$scope','$location','RegisterUser', function ($scope, $location, RegisterUser) {

    $scope.getData = function () {
        $scope.data = RegisterUser.getData();
        return $scope.data;      
    };
    $scope.setData= function () {
        return RegisterUser.setDataStep3();
        
    };
    $scope.redirect = function(arg){
        $location.path(arg);
    };
    $scope.calculateAge = function(birthday) {
        var curYear = new Date().getUTCFullYear();
        var age = curYear - birthday;
        var test1 = ( 9.6 * $scope.test[1].currentweight) + (1.8 * $scope.test[1].height) - (4.7 * age) +655;
        //$scope.step3.optCal = test1;
        //console.log(test1);
        //console.log($scope.step3.optCal);
/*        var elem = document.getElementById("testId");
        elem.value = test1;
        elem.style.display = 'block';*/
        return test1;
    };

    $scope.test = $scope.getData();
    $scope.age = $scope.test[1].dateofbirth;
    var calories = $scope.calculateAge($scope.age);
    $scope.cal = calories;
    
}]).
controller('step4RegController', ['$scope','$location','RegisterUser', function ($scope, $location, RegisterUser) {

    $scope.getData = function () {
        $scope.data = RegisterUser.getData();
        return $scope.data;      
    };
    $scope.setData= function () {
        return RegisterUser.setDataStep4();
        
    };
    $scope.redirect = function(arg){
        $location.path(arg);
    };


}]).
controller('contactController', function($scope) {
	$scope.message = 'Contact us page redirect.';
});