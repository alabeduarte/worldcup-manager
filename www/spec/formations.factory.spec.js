describe('Formations Factory', function() {
  var factory;

  beforeEach(function () {
    angular.module('worldcup-manager');
    inject(function (Formations) {
      factory = Formations;
    });
  });

  describe('Listing Formations', function() {
    var expectedFormations = [
      {
        back  : 4,
        middle: 4,
        foward: 2
      },
      {
        back  : 4,
        middle: 5,
        foward: 1
      },
      {
        back  : 4,
        middle: 3,
        foward: 3
      },
      {
        back  : 3,
        middle: 4,
        foward: 3
      },
      {
        back  : 3,
        middle: 5,
        foward: 2
      },
      {
        back  : 5,
        middle: 3,
        foward: 2
      },
      {
        back  : 5,
        middle: 4,
        foward: 1
      }
    ];

    it('should list all formations', function() {
      var formations = factory.list();
      expect(expectedFormations).toEqual(formations);
    });

  });

  describe('Listing Formations', function() {

  });

});