import sourcemaps from 'gulp-sourcemaps'
import gulpSass from 'gulp-sass'
import defaultSass from 'sass'
import autoprefixer from 'gulp-autoprefixer'
import rename from 'gulp-rename'
import cleanCss from 'gulp-clean-css'
import webpCss from 'gulp-webpcss'
import groupCssMediaQueries from 'gulp-group-css-media-queries'

const sass = gulpSass(defaultSass)

export const scss = _ => {
	return (
		app.gulp
			.src(app.path.src.scss)
			.pipe(sourcemaps.init())
			.pipe(app.plugins.replace(/@img\//g, '../img/'))
			.pipe(
				sass({
					outputStyle: 'expanded',
				})
			)
			.pipe(groupCssMediaQueries())
			.pipe(
				webpCss({
					webpClass: '.webp',
					noWebpClass: '.no-webp',
				})
			)
			.pipe(
				autoprefixer({
					grid: true,
					overrideBrowserslist: ['last 3 versions'],
					cascade: false,
				})
			)
			// Не сжатый css =>
			.pipe(app.gulp.dest(app.path.dest.css))
			.pipe(
				cleanCss({
					level: 2,
				})
			)
			.pipe(
				rename({
					extname: '.min.css',
				})
			)
			.pipe(sourcemaps.write('.'))
			.pipe(app.gulp.dest(app.path.dest.css))
			.pipe(app.plugins.browserSync.stream())
	)
}
