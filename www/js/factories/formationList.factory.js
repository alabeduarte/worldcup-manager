angular.module('worldcup-manager').factory('FormationList', function () {
  return {
    list: function () {
      return [
        new Formation(4, 4, 2),
        new Formation(4, 5, 1),
        new Formation(4, 3, 3),
        new Formation(3, 4, 3),
        new Formation(3, 5, 2),
        new Formation(5, 3, 2),
        new Formation(5, 4, 1)
      ];
    }
  }
});