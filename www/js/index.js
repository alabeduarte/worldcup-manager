var app = {
  initialize: function() {
    this.bindEvents();
  },
  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, true);
  },

  onDeviceReady: function() {
    angular.element(document).ready(function() {
      alert('app:deviceready');
      angular.bootstrap(document);
    });
  },
};