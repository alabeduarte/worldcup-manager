describe('Formations', function() {

  it('should get an instance of Formations factory', inject(function (Formations) {
    expect(Formations).toBeDefined();
  }));

  describe('Formations list', function () {
    var allFormations;
    var expectedFormations = [
      {
        back  : 4,
        middle: 4,
        foward: 2,
        scheme: '4-4-2'
      },
      {
        back  : 4,
        middle: 5,
        foward: 1,
        scheme: '4-5-1'
      }
    ];

    beforeEach(inject(function (Formations) { allFormations = Formations.list(); }));

    it('should list all formations', inject(function (Formations) {
      expect(expectedFormations[0]).toEqual(allFormations[0]);
      expect(expectedFormations[1]).toEqual(allFormations[1]);
    }));

    it('should format a scheme', inject(function (Formations) {
      expect(allFormations[0].scheme).toBe('4-4-2');
      expect(allFormations[1].scheme).toBe('4-5-1');
    }));
  });

});