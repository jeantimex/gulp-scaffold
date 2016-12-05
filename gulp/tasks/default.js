var gulp        = require('gulp'),
    config      = require('../config'),
    runSequence = require('run-sequence');

gulp.task('default', function (callback) {
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
