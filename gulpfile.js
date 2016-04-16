var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var react = require('gulp-react');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Parse and compress JS and JSX files

gulp.task('babel-eiei', function() {
  // Listen to every JS file in ./frontend/javascript
  return gulp.src('src/*.js')
    // Turn React JSX syntax into regular javascript
    .pipe(react())
    // Output each file into the ./build/javascript/ directory
    .pipe(gulp.dest('public/js/'));
    // Optimize each JavaScript file
    //.pipe(uglify())
    // Add .min.js to the end of each optimized file
    //.pipe(rename({suffix: '.min'}))
    // Output each optimized .min.js file into the ./build/javascript/ dir
    //.pipe(gulp.dest('build/javascript/'));
});


//gulp.task('watch', ['clean'], function() {
gulp.task('watch', function() {
      // Watch for changes in frontend js and run the 'javascript' task
      gulp.watch('src/*.js', ['babel-eiei']);
      // Run the 'browserify_nodep' task when client.js changes
      //gulp.watch('build/javascript/client.js', ['browserify_nodep']);
      // Watch for .less file changes and re-run the 'styles' task
      //gulp.watch('frontend/**/*.less', ['styles']);
      // Start up the server and have it reload when anything in the
      // ./build/ directory changes
      nodemon({script: 'app.js', watch: 'src'});
});
