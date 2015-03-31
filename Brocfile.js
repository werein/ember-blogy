/* jshint node: true */
/* global require, module */

var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

var app = new EmberAddon();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

// i18n
app.import(app.bowerDirectory + '/ember-i18n/lib/i18n.js', {
  exports: {
    'ember-i18n': [
      'default'
    ]
  }
});
app.import(app.bowerDirectory + '/ember-i18n/lib/i18n-plurals.js');

// Bootstrap
app.import('bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js');

// Summernote
app.import('bower_components/summernote/dist/summernote.js');

// Font awesome
app.import('bower_components/fontawesome/fonts/fontawesome-webfont.eot', {destDir: 'assets/fonts/fontawesome'});
app.import('bower_components/fontawesome/fonts/fontawesome-webfont.svg', {destDir: 'assets/fonts/fontawesome'});
app.import('bower_components/fontawesome/fonts/fontawesome-webfont.ttf', {destDir: 'assets/fonts/fontawesome'});
app.import('bower_components/fontawesome/fonts/fontawesome-webfont.woff', {destDir: 'assets/fonts/fontawesome'});
app.import('bower_components/fontawesome/fonts/FontAwesome.otf', {destDir: 'assets/fonts/fontawesome'});

module.exports = app.toTree();
