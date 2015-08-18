var gulp = require('gulp');
var browserSync = require('browser-sync').create();

var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var uncss = require('gulp-uncss');
var prefix = require('gulp-autoprefixer');

var concat = require("gulp-concat");
var uglify = require("gulp-uglify");

var sourcemaps = require("gulp-sourcemaps");

var cp = require('child_process');

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build',
    sassTask: '<span style="color: grey">Running:</span> $ sassTask'
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn('jekyll', ['build', '--config', '_config.yml,_config_dev.yml'], {stdio: 'inherit'})
        .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['sass', 'jekyll-build'], function () {
    browserSync.init({
        server: '_site',
        ui: {
            port: 8080
        }
    });
});

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function () {
    console.log(messages.sassTask);
    return gulp.src('_sass/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: ['_sass'],
            onError: browserSync.notify
        }))
        .pipe(prefix(['last 2 versions', '> 5%'], {cascade: true}))
        .pipe(minifyCSS({keepBreaks: false, keepSpecialComments: false}))
        .pipe(gulp.dest('css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('_site/css'))
        .pipe(browserSync.reload({stream: true}));
});


gulp.task("scripts", function () {
    return gulp.src(['js/vendor/jquery.min.js', 'js/vendor/foundation.min.js', 'js/vendor/fastclick.js', 'js/vendor/article.js', 'js/vendor/infinite-jekyll.js', 'js/vendor/placeholder.js', 'js/vendor/readingTime.min.js', 'js/vendor/app.js'])
        .pipe(sourcemaps.init())
        .pipe(concat("app.min.js"))
        .pipe(gulp.dest('js/'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('_site/js'));
});

gulp.task('scripts-watch', ['scripts'], browserSync.reload);

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch('_sass/**/*.scss', ['sass']);
    gulp.watch('js/vendor/*.js', ['scripts-watch']);
    gulp.watch(['index.html', '_layouts/*.html', '_includes/*.html', '_posts/*'], ['jekyll-rebuild']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'scripts', 'watch']);
