'use strict';

var gulp   = require('gulp');
var plugins = require('gulp-load-plugins')();

var paths = {
  lint: ['./gulpfile.js', './lib/**/*.js'],
  watch: ['./gulpfile.js', './index.js', './lib/**', './test/**/*.js', '!test/{temp,temp/**}'],
  tests: ['./test/**/*.js', '!test/{temp,temp/**}']
};

gulp.task('lint', function () {
  return gulp.src(paths.lint)
    .pipe(plugins.jshint('.jshintrc'))<% if (jscsModule) { %>
    .pipe(plugins.jscs())<% } %>
    .pipe(plugins.jshint.reporter('jshint-stylish'));
});

gulp.task('lab', function () {
  gulp.src(paths.tests, {cwd: __dirname})
    .pipe(plugins.plumber())
    .pipe(plugins.lab('-v -l -c'));
});

gulp.task('bump', ['test'], function () {
  var bumpType = plugins.util.env.type || 'patch'; // major.minor.patch

  return gulp.src(['./package.json'])
    .pipe(plugins.bump({ type: bumpType }))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
  gulp.run('test');
  gulp.watch(paths.watch, ['test']);
});

gulp.task('default', ['test']);
gulp.task('test', ['lint', 'lab']);
<% if (releaseModule) { %>gulp.task('release', ['bump']);<% } %>
