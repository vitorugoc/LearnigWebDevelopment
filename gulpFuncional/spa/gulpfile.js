const gulp = require('gulp')
const series = gulp.series
const parallel = gulp.parallel

const { appHtml, appCss, appImg, appJs } = require('./gulpTasks/app')
const { depsFonts, depsCss } = require('./gulpTasks/deps')
const { watchArq, server } = require('./gulpTasks/server')

module.exports.default = series(
    parallel(
        series(appHtml, appCss, appJs, appImg),
        series(depsCss, depsFonts)
    ),
    server,
    watchArq
)