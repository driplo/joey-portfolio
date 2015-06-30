var gulp = require('gulp');

require('require-dir')('./gulp');
gulp.task('default', [
  'images',
  'styles',
  'vendors',
  'scripts',
  'fonts',
  /*'jslint',*/
  'w3cjs'
]);
