var app = {
  initialize: function() {
    var fixiOSStatusBarIssue = function () {
      if (cordova) {
        if (parseFloat(window.device.version) === 7.0) document.body.style.marginTop = "20px";
      }
    };
    var bootStrapApp = function () {
      fixiOSStatusBarIssue();
      angular.element(document).ready(function () {
        console.log('angular ready!');
        angular.bootstrap(document, ['worldcup-manager']);
      });
    };

    if (cordova) document.addEventListener('deviceready', bootStrapApp, false);
    else bootStrapApp();
  }
};