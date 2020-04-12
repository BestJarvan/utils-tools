const gulp = require("gulp")
const ts = require("gulp-typescript");
const uglify = require("gulp-uglify")
const del = require("del")
const tsFile = "src/**/*.ts"


function task_clean(done) {
  del.sync(['dist', 'docs'])
  done()
}

function task_ts(){
  return gulp
    .src(tsFile)
    .pipe(ts({
      // declaration: true,
      removeComments: true,
      allowJs: true
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
}

gulp.task("default",
  gulp.parallel(
    task_clean,
    task_ts
  )
)