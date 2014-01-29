angular.module('worldcup-manager')
.controller('PlayerController', ['$scope', '$routeParams', 'WorldSoccerAPI', function ($scope, $routeParams, WorldSoccerAPI) {
  $scope.loading = true;
  var countryId = $routeParams.countryId;
  WorldSoccerAPI.all('/countries/' + countryId + '/players', function (players) {
    $scope.players = players;
    $scope.loading = false;
  });
  // $scope.icon = 'ion-ios7-arrow-back';
}]);