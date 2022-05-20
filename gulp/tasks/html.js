import fileinclude from 'gulp-file-include'
import webpHtml from 'gulp-webp-html-nosvg'
import versionNumber from 'gulp-version-number'
import prettier from 'gulp-prettier'

export const html = _ => {
	return app.gulp
		.src(app.path.src.html)
		.pipe(fileinclude())
		.pipe(app.plugins.replace(/@img\//g, 'img/'))
		.pipe(webpHtml())
		.pipe(
			versionNumber({
				value: '%DT%',
				append: {
					key: '_v',
					cover: 0,
					to: ['css', 'js'],
				},
				output: {
					file: 'gulp/version.json',
				},
			})
		)
		.pipe(prettier())
		.pipe(app.gulp.dest(app.path.dest.html))
		.pipe(app.plugins.browserSync.stream())
}
