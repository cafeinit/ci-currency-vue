/**
 * @fileoverview gulpfile
 * @author burning (www.cafeinit.com)
 * @version 2017.07.14
 */

'use strict'

const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const less = require('gulp-less')
const LessAutoprefix = require('less-plugin-autoprefix')

const autoprefix = new LessAutoprefix({ browsers: ['last 5 versions'] })

// tasks
gulp.task('default', ['build'])

gulp.task('build', () => {
  return gulp.src([
    './src/ci-currency.less'
  ])
    .pipe(less({
      plugins: [ autoprefix ]
    }))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('./dist'))
})
