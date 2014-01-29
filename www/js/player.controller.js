angular.module('worldcup-manager')
.controller('PlayerController', ['$scope', '$routeParams', 'WorldSoccerAPI', function ($scope, $routeParams, WorldSoccerAPI) {
  var countryId = $routeParams.countryId;
  WorldSoccerAPI.get('/countries/' + countryId + '/players', function (players) {
    $scope.players = players;
  });
  // $scope.icon = 'ion-ios7-arrow-back';
}]);