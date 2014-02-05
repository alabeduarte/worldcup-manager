var SelectedFormation = function (formation) {
  for (var property in formation) {
    if (formation.hasOwnProperty(property)) {
        this[property] = formation[property];
    }
  }
  this.fowards = new Array(formation.foward);
}
SelectedFormation.prototype.addFoward = function (player) {
  this.fowards[0] = player;
}