import config from '../config';
import gulp from 'gulp';
import plugins from 'gulp-load-plugins';

const $ = plugins();

gulp.task('useref', () => {
  return gulp.src(config.useref.src)
    .pipe($.useref(config.useref.opts))
    .pipe($.if('*.css', $.cssnano()))
    .pipe($.if('*.js', $.uglify()))
    .pipe(gulp.dest(config.useref.dest));
});
