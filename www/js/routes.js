angular.module('worldcup-manager', ['ngRoute', 'LocalStorageModule'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
      when('/countries', {
        templateUrl: 'partials/countries.html',
        controller: 'CountryController'
      }).
      when('/countries/:countryId/players', {
        templateUrl: 'partials/players.html',
        controller: 'PlayerController'
      }).
      otherwise({
        redirectTo: '/countries'
      });
  }]);