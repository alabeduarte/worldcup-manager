describe('Formations Factory', function() {
  var Formations;

  beforeEach(function () {
    angular.module('worldcup-manager');
  });

  describe('Listing Formations', function() {
    var expectedFormations = [
      {
        back  : 4,
        middle: 4,
        foward: 2,
        scheme: '4-4-2'
      }
    ];

    it('should list formation 4-4-2', function() {
      inject(function (Formations) {
        var formations = Formations.list();
        expect(expectedFormations).toEqual(formations);
      });
    });

  });
});