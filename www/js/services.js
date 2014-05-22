angular.module('angularapp.services', []).
factory('RegisterUser', ['$location', function ($location) {

    var data =[];

    function redirectURL(url){
        $location.path(url);
    };

    return {
        getData: function () {
            //console.log('getData called');
            //console.log(data);
            return data;
        },
        setDataStep1: function (username,pass,mail) {
            //console.log('setData Called');
            data.push({
                'user_name':username,
                'user_email':mail,
                'user_pass':pass
            }); 
        },
        setDataStep2: function (gender,dateofbirth,units,height,currentweight,goalweight) {
           // console.log('step2 setData Called');
            data.push({
                'gender':gender,
                'dateofbirth':dateofbirth,
                'units':units,
                'height':height,
                'currentweight':currentweight,
                'goalweight':goalweight
            }); 
        },
        setDataStep3: function (optCal,shakeitOption,latestbenevita) {
            //console.log('step3 setData Called');
            data.push({
                'optCal':optCal,
                'shakeitOption':shakeitOption,
                'latestbenevita':latestbenevita
            }); 
        },
        setDataStep4: function (optCal,shakeitOption,latestbenevita) {
            //console.log('step4 setData Called');
            data.push({
                'optCal':optCal,
                'shakeitOption':shakeitOption,
                'latestbenevita':latestbenevita
            }); 
        }
    };

}]);

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