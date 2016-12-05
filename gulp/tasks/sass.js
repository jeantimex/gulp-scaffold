var config       = require('../config'),
    gulp         = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync  = require('browser-sync'),
    sass         = require('gulp-sass'),
    sourcemaps   = require('gulp-sourcemaps');

// Compiles Sass to CSS
gulp.task('sass', function () {
    return gulp.src(config.sass.src)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer(config.autoprefixer))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.sass.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
});
