angular.module('angularapp.services', []).
factory("RegisterUser",function(){
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