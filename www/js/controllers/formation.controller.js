angular.module('worldcup-manager')
.controller('FormationController', ['$scope', '$routeParams', 'WorldSoccerAPI', 'Formations', function ($scope, $routeParams, WorldSoccerAPI, Formations) {
  var countryId = $routeParams.countryId;

  $scope.formations =  Formations.list();
  $scope.selectedFormation = new SelectedFormation($scope.formations[0]);
  $scope.getNumber = function (number) { return new Array(number); }

  WorldSoccerAPI.get('/countries/' + countryId + '/players', function (players) {
    $scope.players = players;
  });
}]);