angular.module('a.vaca', ['ngRoute', 'ngTouch'])
.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider
  .when('/:name', {
    templateUrl: 'templates/one.html',
    controller: 'funding'
  })
  .otherwise({ templateUrl: 'templates/home.html' });

}])

.controller('home', ['$scope', function ($scope) {

  $scope.all = [
    { name: 'new-shoes', amount: 1000 },
    { name: 'washing-machine', amount: 2500 }
  ];

}])

.controller('funding', [ '$scope', '$routeParams', function ($scope, $routeParams) {

}]);
