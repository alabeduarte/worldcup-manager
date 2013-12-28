describe('Home Controller', function() {

  describe('Listing groups', function() {

    var scope;
    var countries = [{
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

    beforeEach(angular.mock.module('worldcup-manager'));

    beforeEach(angular.mock.inject(function ($rootScope, $controller) {
      scope = $rootScope.$new();
      $controller('Home', {
        $scope: scope,
        WorldSoccerAPI: { all: function(key, suc) {suc(countries);} }
      });
    }));

    it('should add groups to scope', function() {
      expect(scope.countries).toBe(countries);
    });

  });

});

