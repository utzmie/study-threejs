'use strict';

const browserSync  = require('browser-sync').create();
const gulp         = require('gulp');


// Directory
const PATHS = {
	root: './',
	css:  './css',
	js:   './js',
	img:  './img',
}


//
// Watch
//

// Browser-Sync
gulp.task('browser-sync', function() {

	var files = [
		PATHS.root + '**/*.html',
		PATHS.css  + '/*.css', 
		PATHS.js   + '/*.js',
		PATHS.img  + '/**/*.{png,jpg,gif,svg,webp}',
	];

	// Browser-Sync
	browserSync.init(files, {
		notify: false,
		watchEvents: ['add', 'change'],
		server: {
			baseDir: PATHS.root
		}
	});

	// gulp.watch( PATHS.js + '/**/*.js', ['site-js']);
	gulp.watch( files ).on('change', browserSync.reload);
});

// Without Browser-Sync
gulp.task('watch', function() {
	gulp.watch( PATHS.js + '/{common,home}.js', ['site-js']);
}); 

gulp.task('default', function() {
	gulp.start('browser-sync');
});