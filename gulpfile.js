var gulp = require('gulp');
var concat = require('gulp-concat');

var publicPath = "./app";
var nodePath = "./node_modules"
var vendorPath = publicPath + "/assets";


var paths = {
    jquery: {
        src: nodePath + "/jquery/dist/jquery.min.js",
        dest: vendorPath
    },
    bootstrap: {
        src: nodePath + "/bootstrap/dist/**/*",
        dest: vendorPath
    }
};

gulp.task('vendor', function() {
  return gulp.src([
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
  ]).pipe(concat('bundle.js'))
    .pipe(gulp.dest('app'));
});

gulp.task('default', ['vendor']);
