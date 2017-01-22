import config from '../config';
import gulp from 'gulp';
import browserSync from 'browser-sync';

gulp.task('browserSync', () => {
  browserSync(config.browserSync)
});
