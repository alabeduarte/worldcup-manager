describe('FormationController', function () {
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

  var formations = [ new Formation(4, 4, 2), new Formation(3, 4, 3) ];

  beforeEach(angular.mock.inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    $controller('FormationController', {
      $scope: scope,
      WorldSoccerAPI: {
        get: function(uri, success) {
          success(players);
        }
      },
      FormationList: {
        list: function () {
          return formations;
        }
      }
    });
  }));

  describe('Listing players', function () {
    it('should add players to scope', function () {
      expect(scope.players).toBe(players);
    });
  });

  describe('Listing formations', function () {
    it('should add formations to scope', function () {
      expect(scope.formations).toEqual(formations);
    });

    it('should select 4-4-2 by default', function () {
      expect(scope.selectedFormation.scheme).toBe('4-4-2');
    });

    it('should change selected formation', function () {
      var formation343 = formations[1];
      scope.selectFormation(formation343);

      expect(scope.selectedFormation.scheme).toBe('3-4-3');
    });
  });

});

