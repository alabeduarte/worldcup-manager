describe('FormationController', function() {
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
    $controller('FormationController', {
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

  describe('Listing players', function() {
    it('should add players to scope', function() {
      expect(scope.players).toBe(players);
    });
  });

  describe('Listing formations', function() {
    it('should add formations to scope', function() {
      expect(scope.formations).toEqual(formations);
    });

    it('should select 4-4-2 by default', function() {
      expect(scope.selectedFormation.scheme).toBe('4-4-2');
    });
  });

});

