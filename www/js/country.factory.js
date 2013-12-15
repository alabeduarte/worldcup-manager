angular.module('worldcup-manager').factory('Country',
  ['$http', 'localStorageService', function ($http, localStorage) {
    return {
      all: function (success) {
        if (!localStorage.get('countries')) {
          $http.get('http://worldsoccer-api.herokuapp.com/countries', {
            transformResponse: function (data) {
              localStorage.add('countries', data);
              success(data);
            }
          });
        } else success(localStorage.get('countries'));
      }
    };
}]);