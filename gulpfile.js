'use strict';

const gulp = require('gulp');
const minifyCss = require('gulp-minify-css');
const rimraf = require('gulp-rimraf');
const rename = require('gulp-rename');

const config = {
	"css": ["github-markdown.css"]
};

gulp.task('clean-dist', () => {
	return gulp.src('dist/**', { read: false })
		.pipe(rimraf({ force: true }));
});

gulp.task('minify-css', function () {
	return gulp.src(config.css)
		.pipe(minifyCss())
		.pipe(rename(path => {
			path.basename += ".min";
			return path;
		}))
		.pipe(gulp.dest('dist'));
});

gulp.task('default', ['clean-dist', 'minify-css'],function () {
	gulp.watch(config.css, ['minify-css']);
});