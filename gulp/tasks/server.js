export const server = done => {
	app.plugins.browserSync.init({
		server: {
			baseDir: `${app.path.dest.html}`,
			port: 3000,
		},
		notify: false,
	})
}
