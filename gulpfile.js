var gulp = require('gulp'),
imagemin = require('gulp-imagemin');


    gulp.task('optimizeImages', function() {
        return gulp.src('./img/*')
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            multipass: true
        }))
        .pipe(gulp.dest("./docs/img"));
    });

    gulp.task('copyVid',['optimizeImages'], function() {
        return gulp.src(["./img/*.mp4", "!./img/*.webm"])
        .pipe(gulp.dest("./docs/img"));
    });

 

    gulp.task('css',['optimizeImages', 'copyVid'], function() {
        return gulp.src("./css/**/**/*")
        .pipe(gulp.dest("./docs/css"));
    });

    gulp.task('html',['optimizeImages', 'copyVid', 'css'], function() {
        return gulp.src("./*.html")
        .pipe(gulp.dest("./docs"));
    });
    

    gulp.task('Build', ['optimizeImages', 'copyVid', 'css', 'html']);

  