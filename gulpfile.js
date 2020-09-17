const gulp = require("gulp");
const sass = require("gulp-sass");

gulp.task("sass", () => {
    return gulp.src("./src/sass/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./src/css"))
});