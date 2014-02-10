describe('FormationController', function () {
  var scope;
  var GilbertoSilva = {
    id: "14",
    fullName: "Gilberto SILVA",
    firstName: "Gilberto",
    lastName: "SILVA",
    photo: "http://cdn.soccerwiki.org/images/player/14.jpg",
    position: "GK"
  };
  var Kleberson = {
    id: "1124",
    fullName: "José KLÉBERSON",
    firstName: "José",
    lastName: "KLÉBERSON",
    photo: "http://cdn.soccerwiki.org/images/player/1124.jpg",
    position: "RB"
  };
  var players;
  var formations;

  beforeEach(angular.mock.inject(function ($rootScope, $controller) {
    players = [ GilbertoSilva, Kleberson ];
    formations = [ new Formation(4, 4, 2), new Formation(3, 4, 3) ];

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

  describe('Selecting a player', function () {
    describe('Selecting slot to receive a player', function () {
      it('should fill a empty slot with a player selection at foward position', function () {
        scope.selectPlayer(GilbertoSilva);
        expect(scope.selectedPlayer).toBe(GilbertoSilva);
        expect(scope.selectedSlot).toBeUndefined();

        scope.selectFowardSlot(0);

        var slots = scope.selectedFormation.fowardSlots;

        expect(slots[0]).toBe(GilbertoSilva);
        expect(slots[0].id).toBeDefined();
      });
    });
    describe('Selecting slot to receive a player', function () {
      var assertPlayerSelection = function (slots, player) {
        expect(slots[0].id).toBe(undefined);
        scope.selectPlayer(player);

        expect(scope.selectedSlot).toBeUndefined();
        expect(slots[0]).toBe(player);
        expect(slots[0].id).toBeDefined();
      };

      it('should select a empty slot', function () {
        expect(scope.selectedSlot).toBeUndefined();

        scope.selectFowardSlot(0);

        expect(scope.selectedSlot).toBeDefined();
        expect(scope.selectedSlot.filled).toBe(true);
      });
      it('should fill a empty slot with a player selection at foward position', function () {
        scope.selectFowardSlot(0);
        expect(scope.selectedSlot).toBeDefined();

        assertPlayerSelection(scope.selectedFormation.fowardSlots, GilbertoSilva);
      });
      it('should fill a empty slot with a player selection at middle position', function () {
        scope.selectMiddleSlot(0);
        expect(scope.selectedSlot).toBeDefined();

        assertPlayerSelection(scope.selectedFormation.middleSlots, GilbertoSilva);
      });
      it('should fill a empty slot with a player selection at back postion', function () {
        scope.selectBackSlot(0);
        expect(scope.selectedSlot).toBeDefined();

        assertPlayerSelection(scope.selectedFormation.backSlots, GilbertoSilva);
      });
      describe('Goalkeeper selection', function () {
        it('should fill a empty slot with a goalkeeper selection', function () {
          scope.selectGoalkeeperSlot();
          expect(scope.selectedSlot).toBeDefined();

          var emptySlot = scope.selectedFormation.goalkeeperSlot
          expect(emptySlot.id).toBe(undefined);

          scope.selectPlayer(Kleberson);
          var filledSlot = scope.selectedFormation.goalkeeperSlot

          expect(scope.selectedSlot).toBeUndefined();
          expect(filledSlot).toBe(Kleberson);
          expect(filledSlot.id).toBeDefined();
        });
      });
    });
  });

});

