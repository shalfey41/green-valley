'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const mqpacker = require('css-mqpacker');
const cleanss = require('gulp-cleancss');
const sourcemaps = require('gulp-sourcemaps');

// Компиляция LESS
gulp.task('less', function () {
  return gulp.src('./less/style.less')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(postcss([
        autoprefixer({browsers: ['last 2 version']}),
        mqpacker
    ]))
    .pipe(sourcemaps.write())
    .pipe(cleanss())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('./css'));
});
