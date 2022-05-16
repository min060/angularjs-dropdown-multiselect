/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are split into several files in the gulp directory
 *  because putting it all here was too long
 */

'use strict';

var fs = require('fs');
var gulp = require('gulp');

/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
require('./gulp/conf');
require('./gulp/scripts');
require('./gulp/styles');
require('./gulp/inject');
require('./gulp/build');
require('./gulp/watch');
require('./gulp/server');
require('./gulp/unit-tests');

/**
 *  Default task clean temporaries directories and launch the
 *  main optimization build task
 */
gulp.task('default', gulp.series(['clean'], function () {
  gulp.start('build');
}));
