angular.module('worldcup-manager')
  .factory('WorldSoccerAPI', ['CustomHttpRequest', function (CustomHttpRequest) {
    return {
      get: function (uri, success) {
        CustomHttpRequest.get('http://worldsoccer-api.herokuapp.com' + uri, success);
      }
    };
  }]);