var gulp = require('gulp');

var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var less = require('gulp-less');
var path = require('path');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var stripDebug = require('gulp-strip-debug');
var ngAnnotate = require('gulp-ng-annotate');

var imagemin = require('gulp-imagemin');

gulp.task('compile-css', function(){
    return gulp.src('styles.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest(''))
})

gulp.task('minify-css', ['compile-css'], function () {
    return gulp.src('styles.css')
        //.pipe(sourcemaps.init())
        .pipe(cleanCSS())
        //.pipe(sourcemaps.write())
        .pipe(rename("styles.min.css"))
        .pipe(gulp.dest(''))
});

gulp.task('concat-modules-js', function(){
    return gulp.src([
        'node_modules/angular/angular.js', 
        'node_modules/angular-route/angular-route.js',
        'node_modules/angular-sanitize/angular-sanitize.js',
        'node_modules/angular-animate/angular-animate.js',
        'node_modules/angular-touch/angular-touch.js'
        ])
        .pipe(concat('ngModules.min.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('app'))
});

gulp.task('concat-js', function(){
    return gulp.src(['app/app.js', 'app/*/*.js'])
        .pipe(concat('all.min.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(stripDebug())
        .pipe(gulp.dest('app'))
});

gulp.task('concat-admin-modules-js', function(){
    return gulp.src([
        'node_modules/angular/angular.js', 
        'node_modules/angular-route/angular-route.js',
        'node_modules/angular-sanitize/angular-sanitize.js',
        'node_modules/angular-cookies/angular-cookies.js'
        ])
        .pipe(concat('ngModules.min.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('admin'))
});

gulp.task('concat-admin-js', function(){
        return gulp.src(['admin/app.js', 'admin/*/*.js'])
        .pipe(concat('all.min.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('admin'))
});

gulp.task('minify-images', function(){
    return gulp.src('images/**/*')
        .pipe(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}]
        }))
        .pipe(gulp.dest('content'))
})