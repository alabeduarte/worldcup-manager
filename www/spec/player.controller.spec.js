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

    beforeEach(angular.mock.inject(function ($rootScope, $controller) {
      scope = $rootScope.$new();
      $controller('PlayerController', {
        $scope: scope,
        WorldSoccerAPI: { get: function(uri, success) { success(players); } }
      });
    }));

    it('should add players to scope', function() {
      expect(scope.players).toBe(players);
    });

  });

});

