'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;
var _ = require('lodash');

gulp.task('styles', function() {
  return buildStyles();
});

gulp.task('styles-reload', gulp.series(['styles'], function() {
  return buildStyles()
    .pipe(browserSync.stream());
}));

const sass = require('gulp-sass')(require('sass'));
var buildStyles = function() {
  var sassOptions = {
    outputStyle: 'expanded',
    precision: 10
  };

  var injectFiles = gulp.src([
    path.join('src/app/**/*.scss'),
    path.join('!' + 'src/app/index.scss'),
		path.join('!' + 'src/app/component/index.scss'),
  ], { read: false });

  var injectOptions = {
    transform: function(filePath) {
    	filePath = filePath.replace(conf.paths.src + '/' + conf.paths.cssRoot, '');
      return '@import "' + filePath + '";';
    },
    starttag: '// injector',
    endtag: '// endinjector',
    addRootSlash: false
  };

  return gulp.src([
    path.join(conf.paths.src, conf.paths.cssRoot + '/index.scss')
  ])
    .pipe($.inject(injectFiles, injectOptions))
    .pipe(wiredep(_.extend({}, conf.wiredep)))
    .pipe($.sourcemaps.init())
    .pipe(sass.sync(sassOptions)).on('error', conf.errorHandler('Sass'))
    .pipe($.autoprefixer()).on('error', conf.errorHandler('Autoprefixer'))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app/')));
};
