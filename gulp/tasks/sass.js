import config from '../config';
import gulp from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import browserSync from 'browser-sync';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';

// Compiles Sass to CSS
gulp.task('sass', () => {
  return gulp.src(config.sass.src)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.sass.dest))
    .pipe(browserSync.reload({
      stream: true
    }));
});
