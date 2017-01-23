var gulp        = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass        = require('gulp-sass');

gulp.task('browser-sync', ['sass'], function() {
    browserSync.init({
        server: "./app",
        notify: false,
        port: 8080,
        ui: {
            port: 8081
        }
    });
});

gulp.task('sass', function() {
    return gulp.src("app/scss/*.scss")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});

gulp.task('watch', ['browser-sync'], function(){
    gulp.watch("app/scss/**/*.scss", ['sass']);
    gulp.watch("app/**/**/*.js").on('change', browserSync.reload);
    gulp.watch("app/*/*.js").on('change', browserSync.reload);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['watch']);