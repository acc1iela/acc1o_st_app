const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('default', () => {
  return gulp.watch('scss/style.scss', () => {
    return (
      gulp
        .src('scss/style.scss')
        .pipe(
          sass({
            outputStyle: 'expanded',
          })
            .on('error', sass.logError)
        )
        .pipe(gulp.dest('css'))
    );
  });
});
