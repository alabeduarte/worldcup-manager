angular.module('worldcup-manager')
.controller('FormationController', ['$scope', '$routeParams', 'WorldSoccerAPI', 'FormationList', '_', function ($scope, $routeParams, WorldSoccerAPI, FormationList, _) {
  var countryId = $routeParams.countryId;
  $scope.formations =  FormationList.list();
  $scope.selectedFormation = $scope.formations[0];

  $scope.getNumber = function (number) { return new Array(number); }
  $scope.selectFormation = function (formation) {
    var formations = $scope.formations;
    var index = _.indexOf(formations, formation);
    $scope.selectedFormation = formations[index];
  };
  $scope.wantToSelect = function (index) {
    console.log('index', index);
    $scope.selectedFormation.wantToSelect = true;
  };

  $scope.playerAlreadySelected = function (index) {
    if ($scope.selectedFormation.wantToSelect && index === 0) {
      return true;
    } else return false;
  };

  WorldSoccerAPI.get('/countries/' + countryId + '/players', function (players) {
    $scope.players = players;
  });
}]);