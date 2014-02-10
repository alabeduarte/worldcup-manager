describe('Formation', function () {
  var selectedFormation;
  var bebeto = { fullName: "Bebeto" };
  var romario = { fullName: "Romario" };
  var players = [bebeto, romario];

  beforeEach(function () {
    selectedFormation = new Formation(4, 4, 2);
  });

  it('should have initialize with correct attributes', function() {
    expect(selectedFormation.scheme).toBe('4-4-2');
    expect(selectedFormation.back).toBe(4);
    expect(selectedFormation.middle).toBe(4);
    expect(selectedFormation.foward).toBe(2);

    expect(selectedFormation.fowardSlots[0].index).toBe(0);
    expect(selectedFormation.fowardSlots[0].filled).toBe(false);

    expect(selectedFormation.fowardSlots.length).toBe(2);
    expect(selectedFormation.middleSlots.length).toBe(4);
    expect(selectedFormation.backSlots.length).toBe(4);
  });

  describe('Adding foward slots', function () {
    it('should add a selected player to the foward position at the formation', function () {
      var index = 0;
      var position = new Foward(selectedFormation, index);
      var formation = position.add(bebeto, position);

      expect(formation.fowardSlots[index]).toBe(bebeto);
    });
  });

  describe('Adding middle slots', function () {
    it('should add a selected player to the middle position at the formation', function () {
      var index = 0;
      var position = new Middle(selectedFormation, index);
      var formation = position.add(bebeto);

      expect(formation.middleSlots[index]).toBe(bebeto);
    });
  });

  describe('Adding back slots', function () {
    it('should add a selected player to the back position at the formation', function () {
      var index = 0;
      var position = new Back(selectedFormation, index);
      var formation = position.add(bebeto);

      expect(formation.backSlots[index]).toBe(bebeto);
    });
  });

  describe('Adding goalkeeper slots', function () {
    it('should add a selected player to the goalkeeper position at the formation', function () {
      var position = new Goalkeeper(selectedFormation);
      var formation = position.add(bebeto);

      expect(formation.goalkeeperSlot).toBe(bebeto);
    });
  });

});