// Karma configuration
// Generated on Tue Dec 24 2013 19:01:51 GMT-0300 (BRT)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',


    // frameworks to use
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      '../components/angular/angular.js',
      '../components/angular-local-storage/angular-local-storage.js',
      '../components/angular-mocks/angular-mocks.js',
      '../components/angular-route/angular-route.min.js',
      '../components/angular-touch/angular-touch.min.js',
      '../components/angular-local-storage/angular-local-storage.min.js',
      '../components/underscore/underscore-min.js',
      '../components/angular-underscore-module/angular-underscore-module.js',
      '../components/snapjs/snap.min.js',
      '../components/angular-snap/angular-snap.min.js',
      '../js/index.js',
      '../js/routes.js',
      '../js/**/*.js',
      'testHelper.js',
      '**/*.spec.js'
    ],


    // list of files to exclude
    exclude: [

    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['Chrome'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true
  });
};
