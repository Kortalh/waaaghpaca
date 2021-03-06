/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'wpca',
    environment: environment,
    baseURL: '/',
    apiURL: '/api',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.apiURL = 'http://server.kortalh.com/wpca/public/api';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'staging') {
    ENV.baseURL = '/wpca/';
    ENV.locationType = 'hash';
  }

  if (environment === 'production') {

  }

  // Allow external sources; specifically, livereload & google fonts
  ENV.contentSecurityPolicy = {
    'default-src': "'none'",
    'script-src': "'self' 'unsafe-eval' server.kortalh.com:35729 http://*.googleapis.com http://maps.gstatic.com",
    'font-src': "'self' data: http://fonts.gstatic.com",
    'connect-src': "'self' http://server.kortalh.com ws://server.kortalh.com:35729 http://maps.gstatic.com",
    'img-src': "'self' http://*.googleapis.com http://maps.gstatic.com http://csi.gstatic.com",
    'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com http://maps.gstatic.com",
    'media-src': "'self'"
  };

  return ENV;
};
