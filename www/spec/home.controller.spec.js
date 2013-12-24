describe('Home Controller', function() {
  var angular = require('../components/angular/angular');
  beforeEach(angular.mock.module('worldcup-manager'));

  describe('Listing groups', function() {

    var scope;
    beforeEach(angular.mock.inject(function ($rootScope, $controller) {
      var countries, WorldSoccerAPI;

      countries = [{
        name: 'Brasil',
        flag: 'http://s.glbimg.com/es/sde/f/organizacoes/2013/12/05/Brasil30.png',
        countryId: 'BRA',
        group: 'A',
        points: 0,
        matches: {
          wins: 0,
          draws: 0,
          losses: 0
        }
      }];
      WorldSoccerAPI.all('countries', function (countries) { this.countries = countries; });

      scope = $rootScope.$new();
      $controller("Home", {
        $scope: scope,
        WorldSoccerAPI: WorldSoccerAPI
      });
    }));

    it("should add groups to scope", function() {
      expect(scope.countries).toBe(countries);
    });
  });
});
