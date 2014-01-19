var app = {
  initialize: function() {
    document.addEventListener('deviceready', function() {
      console.log('device ready!');

      angular.element(document).ready(function() {
        console.log('angular ready!');

        angular.bootstrap(document, ['worldcup-manager']);
      });
    }, true);
  }
};