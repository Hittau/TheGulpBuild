import webpack from 'webpack-stream'
import sourcemaps from 'gulp-sourcemaps'
import babel from 'gulp-babel'

export const js = _ => {
	return app.gulp
		.src(app.path.src.js)
		.pipe(sourcemaps.init())
		.pipe(
			babel({
				presets: ['@babel/env'],
			})
		)
		.pipe(
			webpack({
				mode: 'development',
				output: {
					filename: 'app.min.js',
				},
			})
		)
		.pipe(sourcemaps.write('.'))
		.pipe(app.gulp.dest(app.path.dest.js))
		.pipe(app.plugins.browserSync.stream())
}
