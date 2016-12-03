/*eslint-env node*/
'use strict';

var autoprefixer   = require('gulp-autoprefixer'),
    browserSync    = require('browser-sync'),
    del            = require('del'),
    gulp           = require('gulp'),
    jshint         = require('gulp-jshint'),
    nunjucksRender = require('gulp-nunjucks-render'),
    path           = require('path'),
    runSequence    = require('run-sequence'),
    sass           = require('gulp-sass'),
    scssLint       = require('gulp-scss-lint'),
    sourcemaps     = require('gulp-sourcemaps');

// Compiles Sass to CSS
gulp.task('sass', function () {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('.tmp/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// Linting Scss
gulp.task('lint:scss', function () {
    return gulp.src('src/scss/*.scss')
        .pipe(scssLint())
        .pipe(scssLint.reporter())
        .pipe(scssLint.reporter('fail'))
});

// Linting JavaScript
gulp.task('lint:js', function () {
    return gulp.src('src/scripts/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail', {
            ignoreWarning: true,
            ignoreInfo: true
        }));
});

// Templating
gulp.task('nunjucks', function() {
    nunjucksRender.nunjucks.configure(['src/templates/'], {
        watch: false
    });

    return gulp.src('src/pages/**/*.html')
        .pipe(nunjucksRender({
            path: ['src/templates']
        }))
        .pipe(gulp.dest('.tmp'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// Clean
gulp.task('clean:dev', function () {
    return del.sync('.tmp');
});

gulp.task('clean:dist', function () {
    return del.sync('dist');
});

// Watchers files for changes

// Browser Sync
gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: ['.tmp', 'src']
        }
    });
});

gulp.task('watch', function() {
    gulp.watch('src/scss/**/*.scss', ['sass']);
    gulp.watch('src/scripts/**/*.js', ['watch-js']);
    gulp.watch([
        'src/pages/**/*.html',
        'src/templates/**/*.tmpl'
    ], ['nunjucks']);
});

gulp.task('watch-js', ['lint:js'], browserSync.reload);

// Consolidated dev phase task
gulp.task('clean', ['clean:dev', 'clean:dist']);

gulp.task('test', ['lint:scss', 'lint:js']);

gulp.task('dev', function (callback) {
    runSequence(
        'clean',
        ['sass', 'nunjucks'],
        ['browserSync', 'watch'],
        callback
    );
});
