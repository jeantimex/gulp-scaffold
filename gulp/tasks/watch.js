import gulp from 'gulp';
import browserSync from 'browser-sync';
import config from '../config';

gulp.task('watch-js', ['lint:js'], browserSync.reload);

gulp.task('watch', () => {
    gulp.watch(config.sass.src, ['sass']);
    gulp.watch(config.js.src, ['watch-js']);
    gulp.watch([
        config.pages.src,
        config.templates.src
    ], ['nunjucks']);
});
