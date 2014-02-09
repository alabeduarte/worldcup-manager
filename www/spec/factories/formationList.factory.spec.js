describe('FormationList', function() {

  it('should get an instance of FormationList factory', inject(function (FormationList) {
    expect(FormationList).toBeDefined();
  }));

  describe('Listing', function () {
    var allFormations;
    var expectedFormations = [ new Formation(4, 4, 2), new Formation(4, 5, 1) ];

    beforeEach(inject(function (FormationList) { allFormations = FormationList.list(); }));

    it('should list all formations', inject(function (FormationList) {
      expect(expectedFormations[0]).toEqual(allFormations[0]);
      expect(expectedFormations[1]).toEqual(allFormations[1]);
    }));

    it('should format a scheme', inject(function (FormationList) {
      expect(allFormations[0].scheme).toBe('4-4-2');
      expect(allFormations[1].scheme).toBe('4-5-1');
    }));
  });

});