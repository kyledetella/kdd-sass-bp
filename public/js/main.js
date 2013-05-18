requirejs.config({
  paths: {
    'jquery' : 'lib/jquery-1.9.1.min',
    'underscore' : 'lib/lodash',
    'backbone' : 'lib/backbone',
    'handlebars' : 'lib/handlebars'
  },
  shim: {
    'backbone' : {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'underscore' : {
      exports: '_'
    },
    'handlebars' : {
      exports: 'Handlebars'
    }
  }
});

require([
  'app',
  'handlebars',
  'router'

], function(app, Handlebars, Router) {
  // Run this through a configure() in app.js for more dynamic injection
  app.$injectionPoint = $('#app');

  app.router = new Router();
  Backbone.history.start();

});