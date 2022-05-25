export const path = {
	src: {
		files: './src/files/**/*.*',
		html: './src/*.html',
		scss: './src/scss/style.scss',
		js: './src/js/app.js',
		fonts: './src/fonts/',
	},
	dest: {
		files: './dist/',
		html: './dist',
		css: './dist/css',
		js: './dist/js',
		fonts: './dist/fonts/',
	},
	watch: {
		files: './src/**/*.*',
		html: './src/**/*.*',
		scss: './src/scss/**/*.scss',
		js: './src/js/**/*.js',
	},
	clean: './dist',
}
