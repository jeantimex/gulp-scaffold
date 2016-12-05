var config  = require('../config'),
    gulp    = require('gulp'),
    plugins = require('gulp-load-plugins'),
    $       = plugins();

gulp.task('useref', () => {
    return gulp.src(config.useref.src)
        .pipe($.useref(config.useref.opts))
        .pipe($.if('*.css', $.cssnano()))
        .pipe($.if('*.js', $.uglify()))
        .pipe(gulp.dest(config.useref.dest));
});
