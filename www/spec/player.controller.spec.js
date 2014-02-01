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
      {
        back  : 4,
        middle: 4,
        foward: 2,
        scheme: '4-4-2'
      }
    ];

    beforeEach(angular.mock.inject(function ($rootScope, $controller) {
      scope = $rootScope.$new();
      $controller('PlayerController', {
        $scope: scope,
        WorldSoccerAPI: {
          get: function(uri, success) {
            success(players);
          }
        },
        Formations: {
          list: function() {
            return formations;
          }
        }
      });
    }));

    it('should add players to scope', function() {
      expect(scope.team.players).toBe(players);
    });

    it('should add formations to scope', function() {
      expect(scope.team.formations).toEqual(formations);
    });

    it('should select 4-4-2 by default', function() {
      expect(scope.formation.scheme).toBe('4-4-2');
    });

  });

});

