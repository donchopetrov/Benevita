angular.module('angularapp.services', []).
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
    }).
    factory('runkeeperAPIservice', function($http) {

    var runkeeperAPIservice = {};

    runkeeperAPIservice.getUser = function() {
        return $http.get('http://api.runkeeper.com/user', {headers: {'Authorization':'Bearer 6f39114bf0ed427aa7fe9d9a7a71a064','Accept':'application/vnd.com.runkeeper.User+json'}});
    }

    return runkeeperAPIservice;
  });