angular.module('worldcup-manager')
.controller('CountryController', ['$scope', 'WorldSoccerAPI', function ($scope, WorldSoccerAPI) {
  $scope.loading = true;
  WorldSoccerAPI.all('/countries', function (countries) {
    $scope.countries = countries;
    $scope.loading = false;
  });
}]);