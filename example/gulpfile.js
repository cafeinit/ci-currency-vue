/**
 * @fileoverview gulpfile
 * @author burning (www.cafeinit.com)
 * @version 2017.07.15
 */

'use strict'

const gulp = require('gulp')
// const cleanCSS = require('gulp-clean-css')
// const less = require('gulp-less')
// const LessAutoprefix = require('less-plugin-autoprefix')
//
// const autoprefix = new LessAutoprefix({ browsers: ['last 5 versions'] })

// tasks
gulp.task('default', ['copy'])

gulp.task('copy', () => {
  return gulp.src([
    '../dist/*'
  ]).pipe(gulp.dest('./'))
})
