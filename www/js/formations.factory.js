angular.module('worldcup-manager').factory('Formations', function () {
  return {
    format: function (formations) {
      for (var i = 0; i < formations.length; i++) {
        var formation = formations[i];
        formation.scheme = formation.back + '-' + formation.middle + '-' + formation.foward;
      };
      return formations;
    },
    list: function () {
      return this.format([
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
      ]);
    }
  }
});