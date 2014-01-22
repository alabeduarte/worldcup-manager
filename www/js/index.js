var app = {
  initialize: function() {
    var angularBootStrap = function () {
      angular.element(document).ready(function () {
        console.log('angular ready!');
        angular.bootstrap(document, ['worldcup-manager']);
      });
    };

    if (cordova) {
      document.addEventListener('deviceready', angularBootStrap, true);
    } else {
      angularBootStrap();
    }
  }
};