var gulp = require("gulp");
var autoprefixer = require("gulp-autoprefixer");

gulp.task("styles", function() {
  gulp.src("css/style6.css")
    .pipe(autoprefixer())
    .pipe(gulp.dest("build"))
});

gulp.task("watch", function() {
  gulp.watch("css/styles6.css", ["styles"]);
})