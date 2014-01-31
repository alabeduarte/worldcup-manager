angular.module('worldcup-manager')
.controller('PlayerController', ['$scope', '$routeParams', 'WorldSoccerAPI', 'Formations', function ($scope, $routeParams, WorldSoccerAPI, Formations) {
  var countryId = $routeParams.countryId;
  var formations = Formations.list();
  WorldSoccerAPI.get('/countries/' + countryId + '/players', function (players) {
    $scope.team = {
      players     :  players,
      formations  :  formations
    };
    $scope.formation = formations[0];
  });
}]);