angular.module('worldcup-manager')
  .factory('CustomHttpRequest',
    ['$http', '$rootScope', 'localStorageService',
    function ($http, $rootScope, localStorage) {
      return {
        get: function (url, success) {
          $rootScope.loading = true;
          localStorage.clearAll();
          // if (localStorage.get(url)) return success(localStorage.get(url));

          $http.get(url, {
              transformResponse: function (data) {
                localStorage.add(url, data);
                success(localStorage.get(url));
                $rootScope.loading = false;
              }
            });
        }
      };
    }]);