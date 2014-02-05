describe('SelectedFormation', function() {
  var selectedFormation;
  var formation442 = {
    back  : 4,
    middle: 4,
    foward: 2,
    scheme: '4-4-2'
  }
  var player = { fullName: "Ronaldo" };

  beforeEach(function () {
    selectedFormation = new SelectedFormation(formation442);
  });

  it('should have the same structure of the formation', function() {
    expect(selectedFormation.scheme).toBe('4-4-2');
    expect(selectedFormation.back).toBe(4);
    expect(selectedFormation.middle).toBe(4);
    expect(selectedFormation.foward).toBe(2);
  });

  it('should add a selected player to the foward position at the formation', function () {
    selectedFormation.addFoward(player);

    var selectedPlayer = selectedFormation.fowards[0];
    expect(player).toBe(selectedPlayer);
  });
});