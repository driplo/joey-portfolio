var gulp = require('gulp'),
    w3cjs = require('gulp-w3cjs'),
    concat = require('gulp-concat');

gulp.task('w3cjs', function () {
    gulp.src('pilote/src/*.html')
        .pipe(w3cjs())
        .pipe(concat('index.html'))
        .pipe(gulp.dest('pilote/public/'));
});