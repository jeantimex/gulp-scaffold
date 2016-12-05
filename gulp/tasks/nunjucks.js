var config      = require('../config'),
    gulp        = require('gulp'),
    path        = require('path'),
    browserSync = require('browser-sync'),
    plugins     = require('gulp-load-plugins'),
    $           = plugins();

gulp.task('nunjucks', function() {
    $.nunjucksRender.nunjucks.configure(['src/templates/'], {
        watch: false
    });

    return gulp.src('src/pages/**/*.html')
        .pipe($.tap(function (file, t) {
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
