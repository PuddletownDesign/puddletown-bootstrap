/*
	Gulp Modules
 	*/


var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    filter = require('gulp-filter'),
    mainBowerFiles = require('main-bower-files'),
	useref = require('gulp-useref'),
    csso = require('gulp-csso'),
	gulpIf = require('gulp-if'),
	imagemin = require('gulp-imagemin');

/*
	Input Sources
	*/

var jsSources = ['js/**/*.js'],
    sassSources = ['scss/**/*.scss'],
    htmlSources = ['**/*.html'],
	imageSources = ['images/**/*.+(png|jpg|gif|svg)', '*.ico'],
	txtSources = ['.htaccess', 'robots.txt'],
	fontSources = ['fonts/**/*'],
    outputDir = '../build/';


/*
	Files to watch for updates to reload the page
	*/

gulp.task('watch', function() {
    gulp.watch(jsSources, ['js']);
    gulp.watch(sassSources, ['sass']);
	gulp.watch(htmlSources, ['html']);
    gulp.watch(imageSources, ['(png|jpg|gif|svg|ico)']);
	gulp.watch(txtSources, ['(htaccess|txt)']);
});

/*
	How to connect to the gulp server
 	*/
gulp.task('connect', function() {
    connect.server({
        root: '../',
        livereload: true
    });
});


// File Tasks ------------------------

/*	Copy*/
gulp.task('copy', function() {
	gulp.src(txtSources)
		.pipe(gulp.dest(outputDir))
		.pipe(connect.reload());
});

/*
	Images
 	*/
 gulp.task('images', function() {
     gulp.src(imageSources)
         .pipe(gulp.dest(outputDir+'images/'))
         .pipe(connect.reload());
 });
 /*
 	Images
  	*/
  gulp.task('fonts', function() {
      gulp.src(fontSources)
          .pipe(gulp.dest(outputDir+'images/'))
          .pipe(connect.reload());
  });
/*
	HTML
 	*/

gulp.task('html', function() {
    gulp.src(htmlSources)
        .pipe(gulp.dest(outputDir))
        .pipe(connect.reload());
});

/*
	SCSS
 	*/

gulp.task('sass', function() {
    gulp.src(sassSources)
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed',
        }))
        .on('error', gutil.log)
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(csso())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(outputDir))
        .pipe(connect.reload());
});

/*
	Javascript
 	*/

gulp.task('js', function() {
    gulp.src(htmlSources)
        .pipe(useref())
		.pipe(gulpIf('*.js', uglify()))
        .pipe(gulp.dest(outputDir))
        .pipe(connect.reload());
});


/*
	Set the default task
	*/

gulp.task('default', ['html', 'js', 'sass', 'images', 'fonts', 'copy', 'connect', 'watch']);
