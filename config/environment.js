/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'robodash-browser',
    environment: environment,
    baseURL: '/',
    locationType: process.env.EMBER_CLI_ELECTRON ? 'hash' : 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    emberPouch: {
      //pouchdb config
    },

    //CHANGE THIS
    contentSecurityPolicy: {
      "connect-src": "*",
      "frame-src":"*",
      "style-src":"*",
      "font-src":"*"
    }
  };


  if (environment === 'development') {
    //ENV.APP.LOG_RESOLVER = true;
    //ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    //PouchDB conf
    ENV.emberPouch.localDb = 'robodash';
    ENV.emberPouch.remoteDb = 'http://localhost:5984/robodash';

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

  if (environment === 'production') {
    //PouchDB conf
    ENV.emberPouch.localDb = 'robodash';
    ENV.emberPouch.remoteDb = 'http://localhost:5984/robodash';

  }



  return ENV;
};
