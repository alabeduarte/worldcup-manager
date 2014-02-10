describe('Coach', function () {
  var formations = [ new Formation(4, 4, 2), new Formation(3, 4, 3) ];

  it('should get an instance of Coach factory', inject(function (Coach) {
    expect(Coach).toBeDefined();
  }));

  describe('Selecting Formations', function () {
    it('should change selected formation', inject(function (Coach) {
      var formation343 = formations[1];
      var selectedFormation = Coach.selectFormation(formations, formation343);

      expect(selectedFormation.scheme).toBe('3-4-3');
    }));
  });

});