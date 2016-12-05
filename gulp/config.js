var environment = require('../env');

var env  = environment.env,
    src  = environment.src,
    dest = environment.dest;

var config = {
    env: env,
    src: src,
    dest: dest,

    autoprefixer: {
        browsers: ['last 2 versions']
    },

    browserSync: {
        server: {
            baseDir: [dest, src, '.']
        },
        host: 'localhost',
        port: 3000,
        open: false
    },

    pages: {
        src: src + '/pages/**/*.html'
    },

    templates: {
        src: src + '/templates/**/*.tmpl'
    },

    sass: {
        src: src + '/scss/**/*.{scss,sass}',
        dest: dest + '/css',
        opts: {
            includePaths: ['./node_modules']
        }
    },

    js: {
        src: src + '/js/**/*.js'
    },

    useref: {
        src: dest + '/**/*.html',
        dest: dest,
        opts: {
            transformPath: function(path) {
                path = path.replace(dest + '/node_modules/', dest + '/../node_modules/');
                path = path.replace(dest + '/js/', src + '/js/');
                return path;
            }
        }
    },
};

module.exports = config;
