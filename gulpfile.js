var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var nodemon = require('gulp-nodemon');

gulp.task('buildES6', function () {
    return browserify({entries: './src/app.jsx', extensions: ['.jsx'], debug: true})
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('client.js'))
        .pipe(gulp.dest('public/js'));
});

gulp.task('watch', ['buildES6'], function () {
  console.log("File Changes Detected : Recompiling Frontend . . .");
    gulp.watch('src/*.jsx', ['buildES6']);
    gulp.watch('*.js');
    nodemon({script: 'server.js', watch: 'src'});
});

gulp.task('default', ['watch']);
