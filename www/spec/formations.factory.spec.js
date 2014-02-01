describe('Formations Factory', function() {

  it('should get an instance of Formations factory', inject(function (Formations) {
    expect(Formations).toBeDefined();
  }));

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

    it('should list all formations', inject(function (Formations) {
      expect(expectedFormations).toEqual(Formations.list());
    }));

  });

});