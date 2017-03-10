// Modules
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

// Input Sources
var jsSources = ['js/**.js'],
    sassSources = ['scss/**.scss'],
    htmlSources = ['**/*.html'],
    outputDir = './';


gulp.task('log', function() {
    gutil.log('== My First Task ==');
});

gulp.task('copy', function() {
    gulp.src('index.html')
        .pipe(gulp.dest(outputDir));
});

gulp.task('sass', function() {
    gulp.src(sassSources)
        .pipe(sass({
            outputStyle: 'compressed',
        }))
        .on('error', gutil.log)
        .pipe(gulp.dest('./'))
        .pipe(connect.reload());
});

gulp.task('js', function() {
    gulp.src(jsSources)
        .pipe(uglify())
        .pipe(concat('main.js'))
        .pipe(gulp.dest(outputDir))
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch(jsSources, ['js']);
    gulp.watch(sassSources, ['sass']);
    gulp.watch(htmlSources, ['html']);
});

gulp.task('connect', function() {
    connect.server({
        root: '.',
        livereload: true
    });
});

gulp.task('html', function() {
    gulp.src(htmlSources)
        .pipe(connect.reload());
});

gulp.task('default', ['html', 'js', 'sass', 'connect', 'watch']);
