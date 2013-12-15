angular.module('worldcup-manager')
.controller('Home', ['$scope', 'Player', function ($scope, Player) {
  Player.all(function (players) { $scope.players = players; });
}]);