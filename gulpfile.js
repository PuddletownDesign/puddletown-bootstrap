/*
  Gulp Modules
*/

const gulp = require('gulp')
const gutil = require('gulp-util')
const sourcemaps = require('gulp-sourcemaps')
const sass = require('gulp-sass')
const connect = require('gulp-connect')
const uglify = require('gulp-uglify')
// const concat = require('gulp-concat')
const autoprefixer = require('gulp-autoprefixer')
// const filter = require('gulp-filter')
// const mainBowerFiles = require('main-bower-files')
const useref = require('gulp-useref')
const csso = require('gulp-csso')
const gulpIf = require('gulp-if')
// const imagemin = require('gulp-imagemin')

/*
  Input Sources
*/

const jsSources = ['src/js/**/*.js']
const sassSources = ['src/scss/**/*.scss']
const htmlSources = ['src/**/*.html']
const imageSources = ['src/images/**/*.+(png|jpg|gif|svg)', '*.ico']
const txtSources = ['src/.htaccess', 'src/robots.txt']
const fontSources = ['src/fonts/**/*']
const outputDir = 'build/'

/*
  Files to watch for updates to reload the page
*/

gulp.task('watch', function () {
  gulp.watch(jsSources, ['js'])
  gulp.watch(sassSources, ['sass'])
  gulp.watch(htmlSources, ['html'])
  gulp.watch(imageSources, ['(png|jpg|gif|svg|ico)'])
  gulp.watch(txtSources, ['(htaccess|txt)'])
})

/*
  How to connect to the gulp server
*/
gulp.task('connect', function () {
  connect.server({
    root: 'build/',
    livereload: true
  })
})

// File Tasks ------------------------

/* Copy Files */
gulp.task('copy', function () {
  gulp.src(txtSources)
    .pipe(gulp.dest(outputDir))
    .pipe(connect.reload())
})

/* Images */
gulp.task('images', function () {
  gulp.src(imageSources)
         .pipe(gulp.dest(outputDir + 'images/'))
         .pipe(connect.reload())
})

/* Fonts */
gulp.task('fonts', function () {
  gulp.src(fontSources)
          .pipe(gulp.dest(outputDir + 'fonts/'))
          .pipe(connect.reload())
})
/* HTML */

gulp.task('html', function () {
  gulp.src(htmlSources)
        .pipe(gulp.dest(outputDir))
        .pipe(connect.reload())
})

/* SCSS */

gulp.task('sass', function () {
  gulp.src(sassSources)
        .pipe(sourcemaps.init())
        .pipe(sass({
          outputStyle: 'compressed'
        }))
        .on('error', gutil.log)
        .pipe(autoprefixer({
          browsers: ['last 3 versions'],
          cascade: false
        }))
        .pipe(csso())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(outputDir))
        .pipe(connect.reload())
})

/* Javascript */
gulp.task('js', function () {
  gulp.src(jsSources)
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulp.dest(outputDir))
        .pipe(connect.reload())
})

/* Set the default task */

gulp.task('default', ['html', 'js', 'sass', 'images', 'fonts', 'copy', 'connect', 'watch'])
