angular.module('worldcup-manager').factory('Player',
['$http', 'localStorageService', function ($http, localStorage) {
  return { all: function () {
    return localStorage.get('players') || $http.get(
    'http://secure-everglades-2636.herokuapp.com/players/brazil', { transformResponse: function (data) {
      localStorage.add('players', data);
      return data;
    }});
    }
  };
}]);