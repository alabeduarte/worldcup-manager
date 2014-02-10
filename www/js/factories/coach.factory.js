angular.module('worldcup-manager').factory('Coach', ['_', function (_) {
  return {
    selectFormation: function (formations, formation) {
      var index = _.indexOf(formations, formation);
      return formations[index];
    }
  }
}]);