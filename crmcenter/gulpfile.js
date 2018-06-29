var gulp     = require('gulp'),
    minCSS   = require('gulp-clean-css'),
    concat   = require('gulp-concat'),
    uglify   = require('gulp-uglifyjs'),
    del      = require('del'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant');


gulp.task('clean', function(){
	return del.sync('vendor');
});
gulp.task('clear', function(){
	return cache.clearAll();
});
gulp.task('img', function() {
	return gulp.src('app/img/**/*')
	.pipe(imagemin({
		interlaced: true,
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],
		une: [pngquant()]
	}))
	.pipe(gulp.dest('vendor/img'));


});

gulp.task('min', function() {
	gulp.src('app/css/*.css')
	.pipe(minCSS())
	.pipe(gulp.dest('vendor/css'))
});

gulp.task('scripts', function() {
	return gulp.src([
		'app/js/custom.js'
		])
	.pipe(concat('custom.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'));
});


gulp.task('build',['clean', 'img', 'min'], function(){
	var buildCss = gulp.src([
		'app/css/*.css',
		])


});