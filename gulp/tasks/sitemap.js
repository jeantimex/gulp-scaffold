var gulp = require('gulp'),
    plugins = require('gulp-load-plugins'),
    config = require('../config'),
    $ = plugins();

gulp.task('sitemap', () => {
  return gulp.src(config.dest + '/**/*.html')
    .pipe($.sitemap({
      siteUrl: 'http://your-site.com'
    }))
    .pipe(gulp.dest(config.dest))
})
