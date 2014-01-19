angular.module('worldcup-manager')
.controller('CountryController', ['$scope', 'WorldSoccerAPI', function ($scope, WorldSoccerAPI) {
  WorldSoccerAPI.all('countries', function (countries) {
    $scope.countries = countries;
  });
}]);