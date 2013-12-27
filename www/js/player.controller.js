angular.module('worldcup-manager')
.controller('PlayerController', ['$scope', '$routeParams', 'WorldSoccerAPI', function ($scope, $routeParams, WorldSoccerAPI) {
  console.log('--------->', 'PlayerController');
  var countryId = $routeParams.countryId;
  WorldSoccerAPI.all('countries/' + countryId + '/players', function (players) { $scope.players = players; });
}]);