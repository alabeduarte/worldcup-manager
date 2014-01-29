angular.module('worldcup-manager')
.controller('PlayerController', ['$scope', '$routeParams', 'WorldSoccerAPI', function ($scope, $routeParams, WorldSoccerAPI) {
  var countryId = $routeParams.countryId;
  var formations = [
      '4-4-2',
      '4-5-1',
      '4-3-3',
      '3-4-3',
      '3-5-2',
      '5-3-2',
      '5-4-1'
  ];
  WorldSoccerAPI.get('/countries/' + countryId + '/players', function (players) {
    $scope.team = {
      players        :  players,
      formations  :  formations
    };
    $scope.formation = formations[0];
  });
  // $scope.icon = 'ion-ios7-arrow-back';
}]);