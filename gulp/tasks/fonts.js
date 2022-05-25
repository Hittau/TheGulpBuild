import fs from 'fs'
import fonter from 'gulp-fonter'
import ttf2woff2 from 'gulp-ttf2woff2'

export const otfToTtf = _ => {
	return app.gulp
		.src(`${app.path.src.fonts}/*.otf`)
		.pipe(
			fonter({
				formats: ['ttf'],
			})
		)
		.pipe(app.gulp.dest(app.path.src.fonts))
}

export const ttfToWoff = _ => {
	return app.gulp
		.src(`${app.path.src.fonts}/*.ttf`)
		.pipe(
			fonter({
				formats: ['woff'],
			})
		)
		.pipe(app.gulp.dest(app.path.dest.fonts))
		.pipe(app.gulp.src(`${app.path.src.fonts}/*.ttf`))
		.pipe(ttf2woff2())
		.pipe(app.gulp.dest(app.path.dest.fonts))
}
