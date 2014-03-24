var app = {
  initialize: function() {
    var isCordovaDefined = typeof cordova != 'undefined';
    var fixiOSStatusBarIssue = function () {
      if (isCordovaDefined) {
        if (parseFloat(window.device.version) === 7.0) document.body.style.marginTop = "20px";
      }
    };
    var bootstrapApp = function () {
      fixiOSStatusBarIssue();
      angular.element(document).ready(function () {
        console.log('angular ready!');
        angular.bootstrap(document, ['worldcup-manager']);
      });
    };

    if (isCordovaDefined) document.addEventListener('deviceready', bootstrapApp, false);
    else bootstrapApp();
  }
};