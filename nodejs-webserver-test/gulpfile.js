let gulp = require('gulp')
let del = require('del')
let uglify = require('gulp-uglify')
let concat = require('gulp-concat')


gulp.task('scripts', function () {
  del.sync(['build/alljs*'])

  return gulp.src([
    'content/libs/jquery/dist/jquery.js'
  ])
    .pipe(uglify())
    .pipe(concat('alljs.min.js'))
      .pipe(gulp.dest('build'))
})

gulp.task('default', ['scripts'], function () { })

