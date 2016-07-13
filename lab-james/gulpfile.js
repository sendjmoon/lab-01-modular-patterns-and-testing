const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');
// const watch = require('gulp-watch');

var allFiles = ['./**/*.js', '!./node_modules/**'];
var testFiles = ['./test/**/*.js'];

gulp.task('lint', () => {
  return gulp.src(allFiles)
   .pipe(eslint({
     'rules': {
       'no-console': 0,
       'indent': [
         2,
         2
       ],
       'quotes': [
         2,
         'single'
       ],
       'linebreak-style': [
         2,
         'unix'
       ],
       'semi': [
         2,
         'always'
       ]
     },
     'env': {
       'es6': true,
       'node': true,
       'browser': true
     },
     'globals': {
       'describe': false,
       'it': false,
       'beforeEach': false,
       'afterEach': false,
       'before': false,
       'after': false
     },
     'ecmaFeatures': {
       'modules': true,
       'experimentalObjectRestSpread': true,
       'impliedStrict': true
     },
     'extends': 'eslint:recommended'
   }))
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
