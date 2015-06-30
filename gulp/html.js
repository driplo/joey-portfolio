var gulp = require('gulp'),
    w3cjs = require('gulp-w3cjs');

gulp.task('w3cjs', function () {
    gulp.src('*.html')
        .pipe(w3cjs());
});