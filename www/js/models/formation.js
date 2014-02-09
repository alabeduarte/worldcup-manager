var Formation = function (back, middle, foward) {
  this.back = back;
  this.middle = middle;
  this.foward = foward;
  this.scheme = this.back + '-' + this.middle + '-' + this.foward;

  this.fowards = new Array(this.foward);
}
Formation.prototype.addFoward = function (player) {
  this.fowards[0] = player;
}