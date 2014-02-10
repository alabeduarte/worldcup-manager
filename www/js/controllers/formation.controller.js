angular.module('worldcup-manager')
.controller('FormationController', ['$scope', '$routeParams', 'WorldSoccerAPI', 'FormationList', 'Coach', function ($scope, $routeParams, WorldSoccerAPI, FormationList, Coach) {
  var countryId = $routeParams.countryId;
  $scope.formations =  FormationList.list();
  $scope.selectedFormation = $scope.formations[0];

  $scope.getNumber = function (number) { return new Array(number); }
  $scope.selectFormation = function (formation) {
    var formations = $scope.formations;
    $scope.selectedFormation = Coach.selectFormation(formations, formation);
  };

  var selectSlot = function (Position, index) {
    var formation = $scope.selectedFormation;
    $scope.selectedSlot = new Position(formation, index);
    $scope.selectedSlot.filled = true;

    var player = $scope.selectedPlayer;
    if (player) $scope.selectPlayer(player);
    $scope.selectedPlayer = undefined;
  };
  $scope.selectFowardSlot = function (index) { selectSlot(Foward, index); };
  $scope.selectMiddleSlot = function (index) { selectSlot(Middle, index); };
  $scope.selectBackSlot = function (index) { selectSlot(Back, index); };
  $scope.selectGoalkeeperSlot = function () { selectSlot(Goalkeeper); };

  $scope.selectPlayer = function (player) {
    if ($scope.selectedSlot) $scope.selectedSlot.add(player);
    else $scope.selectedPlayer = player;

    $scope.selectedSlot = undefined;
  };

  WorldSoccerAPI.get('/countries/' + countryId + '/players', function (players) {
    $scope.players = players;
  });
}]);