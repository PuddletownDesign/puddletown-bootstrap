/**
 * Gulp Modules
 */
const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const sourcemaps = require('gulp-sourcemaps')
const gutil = require('gulp-util')
const htmlmin = require('gulp-htmlmin')
const imagemin = require('gulp-imagemin')
const svgmin = require('gulp-svgmin')
const webpack = require('webpack-stream')
const connect = require('gulp-connect')

/**
 * Input Sources
 */
const txtSources = ['src/robots.txt', 'src/favicon.ico']
const htmlSources = ['src/**/*.html']
const cssSources = ['src/scss/**/*.scss']
const imageSources = ['src/images/**/*']
const fontSources = ['src/fonts/**/*']
const jsSources = ['src/js/app.js']

/**
 * Output
 * build - build testing
 * dist - final production site
 */
const build = 'build/'
const dist = 'dist/'

/**
 * --------------------------------
 * Development File Tasks - /build/
 * --------------------------------
 */

/**
 * Server (webpack Dev server)
 */
gulp.task('server', () => {
  connect.server({
    root: build,
    livereload: true
  })
})

/**
 * Deafult
 */
gulp.task('default', ['html', 'js', 'sass', 'fonts', 'images', 'txt', 'watch', 'server'])

/**
 * Dev Watchers
 */
gulp.task('watch', () => {
  gulp.watch(txtSources, ['txt'])
  gulp.watch(jsSources, ['js'])
  gulp.watch(htmlSources, ['html'])
  gulp.watch(cssSources, ['sass'])
  gulp.watch(imageSources, ['images'])
  gulp.watch(fontSources, ['fonts'])
})

/**
 * Javascript (Webpack)
 */
gulp.task('js', () => {
  gulp.src(jsSources)
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest(build))
    .pipe(connect.reload())
})

/**
 * CSS / SASS (Dev)
 */
gulp.task('sass', () => {
  gulp.src(cssSources)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on('error', gutil.log)
    .pipe(autoprefixer({
      browsers: ['last 5 versions'],
      cascade: false
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(build))
    .pipe(connect.reload())
})
/**
 * Text Sources
 */
gulp.task('txt', () => {
  gulp.src(txtSources)
    .pipe(gulp.dest(build))
    .pipe(connect.reload())
})

/**
 * Html Sources (Dev)
 */
gulp.task('html', () => {
  gulp.src(htmlSources)
    .pipe(gulp.dest(build))
    .pipe(connect.reload())
})

/**
 * Image Sources
 */
gulp.task('images', () => {
  gulp.src(imageSources)
    .pipe(gulp.dest(build + 'images/'))
    .pipe(connect.reload())
})

/**
 * Font Sources
 */
gulp.task('fonts', () => {
  gulp.src(fontSources)
    .pipe(gulp.dest(build + 'fonts/'))
    .pipe(connect.reload())
})

/**
 * --------------------------------
 * Build File Tasks - /dist/
 * clean dist directory
 * production javascript/ shaken, transpiled
 * compress/shake css ( no source maps)
 * compress images
 * minify html
 * --------------------------------
 */
gulp.task('build', () => {
  // js - called from npm scripts webpack -p

  // css
  gulp.src(cssSources)
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(autoprefixer({
      browsers: ['last 5 versions'],
      cascade: false
    }))
    .pipe(gulp.dest(dist))

  // txt
  gulp.src(txtSources)
    .pipe(gulp.dest(dist))

  // html
  gulp.src(htmlSources)
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest(dist))

  // images
  gulp.src(imageSources)
    .pipe(imagemin())
    .pipe(gulp.dest(dist + 'images/'))

  // svgs
  gulp.src(imageSources + '**/*.svg')
    .pipe(svgmin())
    .pipe(gulp.dest(dist + 'images/'))

  // fonts
  gulp.src(fontSources)
    .pipe(gulp.dest(dist + 'fonts/'))
})
