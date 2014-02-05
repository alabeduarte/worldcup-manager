angular.module('worldcup-manager')
.controller('FormationController', ['$scope', '$routeParams', 'WorldSoccerAPI', 'Formations', function ($scope, $routeParams, WorldSoccerAPI, Formations) {
  var countryId = $routeParams.countryId;
  var formations = Formations.list();

  WorldSoccerAPI.get('/countries/' + countryId + '/players', function (players) {
    $scope.players = players;
    $scope.formations =  formations;
    $scope.selectedFormation = new SelectedFormation(formations[0]);

    $scope.getNumber = function (number) {
      return new Array(number);
    }

  });
}]);