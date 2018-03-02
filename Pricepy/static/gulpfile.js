var gulp = require('gulp');

var util = require('gulp-util');

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

var config = {
    production: !!util.env.production
};

gulp.task('compile-css', function(){
    console.log("styles.min.css changed")
    return gulp.src('src/styles.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(config.production ? cleanCSS() : util.noop())
        .pipe(rename("styles.min.css"))
        .pipe(gulp.dest("dist"))
});


gulp.task('compile-admin-css', function(){
    return gulp.src([
        'node_modules/angularjs-datepicker/dist/angular-datepicker.min.css'
    ])
    .pipe(rename('libraries.admin.min.css'))
    .pipe(gulp.dest('dist'))
});

gulp.task('concat-modules-js', function(){
    return gulp.src([
        'node_modules/angular/angular.js', 
        'node_modules/angular-route/angular-route.js',
        'node_modules/angular-sanitize/angular-sanitize.js',
        'node_modules/angular-cookies/angular-cookies.js',
        'node_modules/angular-animate/angular-animate.js',
        'node_modules/angular-touch/angular-touch.js',
        'node_modules/ng-youtube-embed/src/ng-youtube-embed.js'
        ])
        .pipe(concat('ngModules.app.min.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
});

gulp.task('compile-js', function(){
    console.log("CREATING all.min.js file");
    return gulp.src(['src/app/app.js', 'src/app/*/*.js'])
        .pipe(concat('all.min.js'))
        .pipe(ngAnnotate())
        //.pipe(config.production ? uglify() : util.noop())
        //.pipe(config.production? stripDebug() : util.noop())
        .pipe(gulp.dest('dist'))
});


gulp.task('concat-admin-modules-js', function(){
    return gulp.src([
        'node_modules/angular/angular.js', 
        'node_modules/angular-route/angular-route.js',
        'node_modules/angular-sanitize/angular-sanitize.js',
        'node_modules/angular-cookies/angular-cookies.js',
        'node_modules/angular-animate/angular-animate.js',
        'node_modules/angularjs-datepicker/dist/angular-datepicker.js'
        ])
        .pipe(concat('ngModules.admin.min.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
});

gulp.task('compile-admin-js', function(){
        return gulp.src(['src/admin/app.js', 'src/admin/*/*.js'])
        .pipe(concat('all.admin.min.js'))
        .pipe(ngAnnotate())
        .pipe(config.production? uglify() : util.noop())
        .pipe(config.production? stripDebug() : util.noop())
        .pipe(gulp.dest('dist'))
});

// gulp.task('minify-images', function(){
//     return gulp.src('images/**/*')
//         .pipe(imagemin({
//             interlaced: true,
//             progressive: true,
//             svgoPlugins: [{removeViewBox: false}]
//         }))
//         .pipe(gulp.dest('content'))
// });

// console.log(util.env.production);
// console.log(config.production);