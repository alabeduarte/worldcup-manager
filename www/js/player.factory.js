angular.module('worldcup-manager').factory('Player',
['$http', 'localStorageService', 'X2JS', function ($http, localStorage, X2JS) {
  return { all: function () {
    return localStorage.get('players') || $http.get(
    'http://c3420952.r52.cf0.rackcdn.com/BRAplayerbasicdata.xml', { transformResponse: function (data) {
      var x2js = new X2JS();
      var json = x2js.xml_str2json(data);
      var players = json.PackData.PlayerData.P.map(function (player) {
        return {
          id: player._id,
          fullName: player._f + ' ' + player._s,
          firstName: player._f,
          lastName: player._s,
          photo: json.PackData.PlayerData._baseImageUrl + player._i
        };
      });
      localStorage.add('players', players);
      return players;
    }});
    }
  };
}]);