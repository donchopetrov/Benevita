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
    });