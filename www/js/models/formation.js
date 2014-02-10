var Formation = function (back, middle, foward) {
  this.back = back;
  this.middle = middle;
  this.foward = foward;
  this.scheme = this.back + '-' + this.middle + '-' + this.foward;

  this.fowardSlots = this.initSlot(this.foward);
  this.middleSlots = this.initSlot(this.middle);
  this.backSlots = this.initSlot(this.back);
  this.goalkeeperSlot = new EmptySlot();
};
var EmptySlot = function (index) {
  this.index = index;
  this.filled = false;
};
var Foward = function(formation, index) {
  this.formation = formation;
  this.slot = formation.fowardSlots[index];
};
var Middle = function(formation, index) {
  this.formation = formation;
  this.slot = formation.middleSlots[index];
};
var Back = function(formation, index) {
  this.formation = formation;
  this.slot = formation.backSlots[index];
};
var Goalkeeper = function(formation) {
  this.formation = formation;
  this.slot = formation.goalkeeperSlot;
};

Foward.prototype.add = function (player) {
  this.formation.addPlayerToSlot(player, this.slot, this.formation.fowardSlots);
  return this.formation;
};
Middle.prototype.add = function (player) {
  this.formation.addPlayerToSlot(player, this.slot, this.formation.middleSlots);
  return this.formation;
}
Back.prototype.add = function (player) {
  this.formation.addPlayerToSlot(player, this.slot, this.formation.backSlots);
  return this.formation;
}
Goalkeeper.prototype.add = function (player) {
  this.formation.goalkeeperSlot = player;
  return this.formation;
}

Formation.prototype.initSlot = function (length) {
  var slot = new Array(length);
  for (var index = 0; index < length; index++) {
    slot[index] = new EmptySlot(index);
  };
  return slot;
};

Formation.prototype.addPlayerToSlot = function (player, slot, position) {
  var index = slot.index;
  position[index] = player;
};