import config from '../config';
import gulp from 'gulp';
import path from 'path';
import browserSync from 'browser-sync';
import plugins from 'gulp-load-plugins';

const $ = plugins();

gulp.task('nunjucks', () => {
  $.nunjucksRender.nunjucks.configure(['src/templates/'], {
    watch: false
  });

  return gulp.src('src/pages/**/*.html')
    .pipe($.tap((file, t) => {
      var filename = path.basename(file.path, '.html');
      return gulp.src(file.path)
        // Renders template with nunjucks
        .pipe($.nunjucksRender({
          data: {
            filename: filename
          },
          path: ['src/templates']
        }))
        .pipe(gulp.dest(config.dest))
        .pipe(browserSync.reload({
          stream: true
        }));
    }));
});
