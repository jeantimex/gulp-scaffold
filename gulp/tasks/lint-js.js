import gulp from 'gulp';
import config from '../config';
import plugins from 'gulp-load-plugins';

const $ = plugins();

gulp.task('lint:js', () => {
  return gulp.src(config.js.src)
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.jshint.reporter('fail', {
      ignoreWarning: true,
      ignoreInfo: true
    }));
});
