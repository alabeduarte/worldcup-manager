angular.module('worldcup-manager', ['LocalStorageModule', 'ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
      when('/countries', {
        templateUrl: 'partials/countries.html',
        controller: 'Home'
      }).
      when('/countries/:countryId/players', {
        templateUrl: 'partials/players.html',
        controller: 'PlayerController'
      }).
      otherwise({
        redirectTo: '/countries'
      });
  }]);