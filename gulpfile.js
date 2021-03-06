import gulp from 'gulp'
import { path } from './gulp/config/path.js'
import { plugins } from './gulp/config/plugins.js'

global.app = {
	path: path,
	gulp: gulp,
	plugins: plugins,
}

import { clean } from './gulp/tasks/clean.js'
import { copy } from './gulp/tasks/copy.js'
import { html } from './gulp/tasks/html.js'
import { server } from './gulp/tasks/server.js'
import { scss } from './gulp/tasks/scss.js'
import { js } from './gulp/tasks/js.js'
import { otfToTtf, ttfToWoff } from './gulp/tasks/fonts.js'

const watcher = _ => {
	gulp.watch(path.watch.files, copy)
	gulp.watch(path.watch.html, html)
	gulp.watch(path.watch.scss, scss)
	gulp.watch(path.watch.js, js)
}

const fonts = gulp.series(otfToTtf, ttfToWoff)
const mainTasks = gulp.parallel(fonts, gulp.parallel(copy, html, scss, js))
const dev = gulp.series(clean, mainTasks, gulp.parallel(watcher, server))

gulp.task('default', dev)
