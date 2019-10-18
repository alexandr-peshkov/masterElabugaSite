var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var csso = require('gulp-csso');

gulp.task('compress', function(){
return gulp.src('./images/**/*.svg')
.pipe(imagemin())
.pipe(gulp.dest('./images'));
});

gulp.task('default', function () {
    return gulp.src('./sass/style.css')
        .pipe(csso())
        .pipe(gulp.dest('./css'));
});