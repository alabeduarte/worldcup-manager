angular.module('worldcup-manager').factory('Player',
  ['$http', 'localStorageService', function ($http, localStorage) {
    return {
      all: function (success) {
        if (!localStorage.get('players')) {
          $http.get('http://worldsoccer-api.herokuapp.com/players/brazil', {
            transformResponse: function (data) {
              localStorage.add('players', data);
              success(data);
            }
          });
        } else success(localStorage.get('players'));
      }
    };
}]);