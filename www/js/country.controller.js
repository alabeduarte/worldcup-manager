angular.module('worldcup-manager')
.controller('CountryController', ['$scope', 'WorldSoccerAPI', function ($scope, WorldSoccerAPI) {
  WorldSoccerAPI.get('/countries', function (countries) {
    $scope.countries = countries;
  });
}]);