var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    config = require('../config');

gulp.task('watch-js', ['lint:js'], browserSync.reload);

gulp.task('watch', function () {
    gulp.watch(config.sass.src, ['sass']);
    gulp.watch(config.js.src, ['watch-js']);
    gulp.watch([
        config.pages.src,
        config.templates.src
    ], ['nunjucks']);
});
