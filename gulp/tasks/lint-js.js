var gulp = require('gulp'),
    config = require('../config'),
    plugins = require('gulp-load-plugins'),
    $ = plugins();

gulp.task('lint:js', function () {
    return gulp.src(config.js.src)
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'))
        .pipe($.jshint.reporter('fail', {
            ignoreWarning: true,
            ignoreInfo: true
        }));
});