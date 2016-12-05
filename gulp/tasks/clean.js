var config = require('../config'),
    gulp   = require('gulp'),
    del    = require('del');

gulp.task('clean', function () {
    return del.sync([config.dest])
});
