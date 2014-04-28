var gulp = require('gulp');
var _ = require('lodash');
var mocha = require('gulp-mocha');
var karma = require('gulp-karma');

function clientTest() {
  // Invoking with func.bind sets context to a config object.
  // If no object is passed, context is gulp
  // which we do not want
  config = _.isFunction(this) ? {} : this;

  config = _.defaults(config, {
    configFile: 'karma-local.coffee',
    watch: 'run'
  });

  return gulp.src('test/client/*-test')
    .pipe(karma(config))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });
}

gulp.task('test:client', clientTest);
gulp.task('test:client:sauce', clientTest.bind({configFile: './karma-sauce.coffee'}));
gulp.task('test:server', function() {
  return gulp.src('test/server/*-test.js')
    .pipe(mocha())
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });
});

gulp.task('test:all', ['test:client', 'test:server']);
gulp.task('default', clientTest.bind({'action': 'watch'}));
