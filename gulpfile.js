var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');

var paths = {
	scripts: 'public/scripts/lib/**/*.js',
	scriptsDest: 'public/scripts'
};

gulp.task('scripts', function(){
	gulp.src(paths.scripts)
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(gulp.dest(paths.scriptsDest))
		.pipe(livereload({auto: false}))
});

gulp.task('watch', function () {
	livereload.listen();
	gulp.watch(paths.scripts, ['scripts']);
	gulp.watch(paths.styles, ['styles']);
});