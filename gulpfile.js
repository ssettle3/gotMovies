// gulp.task("watch", ["browserSync", "sass", "browserify"], function () {
//   gulp.watch("app/styles/**/*.scss", ["sass"]);
//   gulp.watch("app/*.html", browserSync.reload);
//   gulp.watch("app/scripts/**/*.jsx", ["browserify"]);
// });

// Require modules
require('es6-promise').polyfill();

var gulp        = require('gulp');
var sass        = require("gulp-sass");
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var browserify  = require('browserify');
var source      = require('vinyl-source-stream');
var gutil       = require('gulp-util');
var babelify    = require('babelify');
var useref      = require('gulp-useref');
var uglify      = require('gulp-uglify');
var gulpIf      = require('gulp-if');
var cssnano     = require('gulp-cssnano');
var del         = require('del');
var runSequence = require('run-sequence');
var prompt      = require('gulp-prompt');
var exec        = require('child_process').exec;


var dependencies = [
  'react',
    'react-dom'
];

var scriptsCount = 0;

gulp.task("sass", function () {
  return gulp.src("app/styles/main.scss")
    .pipe(sass())
    .pipe(gulp.dest("app/styles"))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task("browserSync", function () {
  browserSync.init({
    server: {
      baseDir: "app",
      routes: {
        "/web" : "web",
        "/node_modules" : "node_modules"
      }
    },
  });
});

gulp.task('scripts', function () {
    bundleApp(false);
    browserSync.reload;
});

gulp.task('deploy', function (){
  bundleApp(true);
});

gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'));
});

gulp.task('clean:dist', function() {
  return del.sync('dist');
});

gulp.task('build', function (callback) {
  runSequence('clean:dist',
    ['sass', 'useref'],
    callback
  );
});

gulp.task('watch', ["browserSync", "sass", "scripts"], function () {
  gulp.watch(['./app/*.js'], ['scripts']);
  gulp.watch("app/styles/**/*.scss", ["sass"]);
  gulp.watch("app/*.html", browserSync.reload);
});

gulp.task('deploy', function() {

  gulp.src('/')
    .pipe(prompt.prompt({
        type: 'confirm',
        name: 'task',
        message: 'This will deploy to GitHub Pages. Have you already built your application and pushed your updated master branch?'
    }, function(res){
      if (res.task){
        console.log('Attempting: "git subtree push --prefix dist origin gh-pages"');
        exec('git subtree push --prefix dist origin gh-pages', function(err, stdout, stderr) {
            console.log(stdout);
            console.log(stderr);
        });
      } else { console.log('Please do this first and then run `gulp deploy` again.'); }
    }));

});



gulp.task('default', ['scripts','watch']);

// Private Functions
function bundleApp(isProduction) {
  scriptsCount++;

  var appBundler = browserify({
      entries: './app/app.js',
      debug: true
    });

    if (!isProduction && scriptsCount === 1){
      browserify({
      require: dependencies,
      debug: true
    })
      .bundle()
      .on('error', gutil.log)
      .pipe(source('vendors.js'))
      .pipe(gulp.dest('./web/js/'));
    }
    if (!isProduction){
      dependencies.forEach(function(dep){
        appBundler.external(dep);
      });
    }

    appBundler
      .transform("babelify", {presets: ["es2015", "react"]})
      .bundle()
      .on('error',gutil.log)
      .pipe(source('bundle.js'))
      .pipe(gulp.dest('./web/js/'));
}
