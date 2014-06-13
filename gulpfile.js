var gulp = require('gulp');
var _ = require('lodash');
var mocha = require('gulp-mocha');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var jshint = require('gulp-jshint');
var karma = require('gulp-karma');

var MAIN_FILE = 'deep-pluck.js';
var MODULE_NAME = 'deepPluck';

function clientTest() {
  // Invoking with func.bind sets context to a config object.
  // If no object is passed, context is gulp
  // which we do not want
  config = _.isFunction(this) ? {} : this;

  config = _.defaults(config, {
    configFile: 'karma-local.coffee',
    watch: 'run'
  });

  return gulp.src('test/*-test.js')
    .pipe(karma(config))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });
}

gulp.task('test:client', clientTest);
gulp.task('test:client:sauce', clientTest.bind({configFile: './karma-sauce.coffee'}));
gulp.task('test:client:all', clientTest.bind({configFile: './karma-local-all.coffee'}));
gulp.task('test:server', function() {
  return gulp.src('test/*-test.js')
    .pipe(mocha())
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });
});

gulp.task('jshint', function () {
  return gulp.src([MAIN_FILE, 'test/*-test.js'])
  .pipe(jshint());
});

gulp.task('browserify', function () {
  return gulp.src(MAIN_FILE)
  .pipe(browserify({
    standalone: MODULE_NAME
  }))
  .pipe(gulp.dest('./dist'));
});

gulp.task('uglify', ['browserify'], function () {
  return gulp.src('dist/' + MAIN_FILE)
  .pipe(uglify())
  .pipe(rename(MAIN_FILE.replace('.js', '.min.js')))
  .pipe(gulp.dest('dist/'));
});

gulp.task('build', ['jshint', 'browserify', 'uglify']);

gulp.task('test', ['test:client:all', 'test:server']);
gulp.task('default', clientTest.bind({'action': 'watch'}));
