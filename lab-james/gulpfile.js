const gulp = require('gulp');
const eslint = require('gulp-eslint');

gulp.task('default', () => {
  // var testFiles = ['test/*.js'];
  return gulp.src(['**/*.js', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format());
});
