describe('Player Controller', function() {

  describe('Listing players', function() {

    var scope;
    var players = [
      {
        id: "14",
        fullName: "Gilberto SILVA",
        firstName: "Gilberto",
        lastName: "SILVA",
        photo: "http://cdn.soccerwiki.org/images/player/14.jpg",
        position: "GK"
      },
      {
        id: "1124",
        fullName: "José KLÉBERSON",
        firstName: "José",
        lastName: "KLÉBERSON",
        photo: "http://cdn.soccerwiki.org/images/player/1124.jpg",
        position: "RB"
      }
    ];

    var formations = [
      '4-4-2',
      '4-5-1',
      '4-3-3',
      '3-4-3',
      '3-5-2',
      '5-3-2',
      '5-4-1'
    ];

    beforeEach(angular.mock.inject(function ($rootScope, $controller) {
      scope = $rootScope.$new();
      $controller('PlayerController', {
        $scope: scope,
        WorldSoccerAPI: { get: function(uri, success) { success(players); } }
      });
    }));

    it('should add players to scope', function() {
      expect(scope.team.players).toBe(players);
    });

    it('should add formations to scope', function() {
      expect(scope.team.formations).toEqual(formations);
    });

    it('should select 4-4-2 by default', function() {
      expect(scope.formation).toEqual('4-4-2');
    });

  });

});

