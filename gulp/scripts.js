var gulp = require('gulp'),
    path = require('path'),
    concat = require('gulp-concat'),
    rename = require("gulp-rename"),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    jslint = require('gulp-jslint'),
    htmlmin = require('gulp-htmlmin');

exports.paths = [
  'bower_components/jquery/dist/jquery.js',
  'bower_components/bootstrap/dist/js/bootstrap.js',
  'bower_components/transition.js/js/transition.js',
  'bower_components/jquery-mousewheel/jquery.mousewheel.min.js',
  'bower_components/animsition/dist/js/jquery.animsition.min.js',
  'bower_components/lazyloadxt/dist/jquery.lazyloadxt.js',
  'pilote/src/js/jquery.interactive_bg.min.js'
];

gulp.task('vendors', function() {
  gulp.src(exports.paths)
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write())
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('pilote/public/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('pilote/public/js'))
});

gulp.task('scripts', function() {
  gulp.src('pilote/src/js/**/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('pilote/public/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('pilote/public/js'))
});
