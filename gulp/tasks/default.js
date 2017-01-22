import gulp from 'gulp';
import config from '../config';
import runSequence from 'run-sequence';

gulp.task('default', (callback) => {
  if (config.env === 'dev') {
    runSequence(
      ['clean', 'lint:js'],
      ['sass', 'nunjucks'],
      ['browserSync', 'watch'],
      callback
    )
  }
  else if (config.env === 'prod') {
    runSequence(
      ['clean', 'lint:js'],
      ['sass', 'nunjucks'],
      'useref',
      'sitemap',
      callback
    )
  }
});
