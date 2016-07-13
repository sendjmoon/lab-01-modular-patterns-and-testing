const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');
// const watch = require('gulp-watch');

var allFiles = ['./**/*.js', '!./node_modules/**'];
var testFiles = ['./test/**/*.js'];

gulp.task('lint', () => {
  return gulp.src(allFiles)
   .pipe(eslint())
   .pipe(eslint.format());
});

gulp.task('mocha', () => {
  return gulp.src(testFiles)
  .pipe(mocha());
});

// gulp.task('watch', () => {
//   return watch(allFiles)
//   .pipe(gulp.dest('build'));
// });

gulp.task('default', ['lint', 'mocha']);
