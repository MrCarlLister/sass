var gulp = require('gulp');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');

gulp.task('sass', function(){
    return gulp.src('scss/main.scss')
      .pipe(sass())
    //   .pipe(uglifycss({
    //     "maxLineLen": 0,
    //     "uglyComments": true
    //   }))
      .pipe(gulp.dest('css/'))
  });


gulp.task('default', ['sass'], function (){
  gulp.watch('scss/**/*.scss', ['sass']);
});


