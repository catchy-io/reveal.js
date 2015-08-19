var gulp = require('gulp');

var less = require('gulp-less');

gulp.task('css', function () {
    gulp.src('css/catchy.less')
        .pipe(less())
        .pipe(require('gulp-minify-css')({compatibility: 'ie8'}))
        .pipe(gulp.dest('css/'));
});

gulp.task("default", function () {
    gulp.start("css");
    gulp.watch([
        'css/*.less',
    ], function (event) {
        gulp.run('css');
    });
});
