angular.module('worldcup-manager')
.controller('Home', ['$scope', 'Player', function ($scope, Player) {
  $scope.players = Player.all();
}]);