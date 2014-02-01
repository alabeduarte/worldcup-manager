angular.module('worldcup-manager')
.controller('FormationController', ['$scope', '$routeParams', 'WorldSoccerAPI', 'Formations', function ($scope, $routeParams, WorldSoccerAPI, Formations) {
  var countryId = $routeParams.countryId;
  var formations = Formations.list();

  WorldSoccerAPI.get('/countries/' + countryId + '/players', function (players) {
    $scope.team = {
      players     :  players,
      formations  :  formations
    };
    $scope.selectedFormation = formations[0];
    $scope.getNumber = function (number) {
      return new Array(number);
    }
  });
}]);