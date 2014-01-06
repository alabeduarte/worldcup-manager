angular.module('worldcup-manager')
.controller('Home', ['$scope', 'WorldSoccerAPI', function ($scope, WorldSoccerAPI) {
  WorldSoccerAPI.all('countries', function (countries) {
    $scope.countries = countries;
  });
}]);