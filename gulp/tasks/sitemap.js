import gulp from 'gulp';
import plugins from 'gulp-load-plugins';
import config from '../config';

const $ = plugins();

gulp.task('sitemap', () => {
  return gulp.src(config.dest + '/**/*.html')
    .pipe($.sitemap({
      siteUrl: 'http://your-site.com'
    }))
    .pipe(gulp.dest(config.dest));
})
