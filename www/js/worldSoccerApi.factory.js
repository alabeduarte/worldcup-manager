angular.module('worldcup-manager').factory('WorldSoccerAPI',
  ['$http', 'localStorageService', function ($http, localStorage) {
    return {
      all: function (key, success) {
        if (localStorage.get(key)) return success(localStorage.get(key));

        $http.get('http://worldsoccer-api.herokuapp.com/' + key, {
            transformResponse: function (data) {
              localStorage.add(key, data);
              success(localStorage.get(key));
            }
          });
      }
    };
}]);