"use strict";
// modules
const gulp = require("gulp")
const autoprefixer = require("gulp-autoprefixer")
const browserSync = require("browser-sync").create()
const cleanCSS = require("gulp-clean-css")
const critical = require("critical").stream
const concat = require("gulp-concat")
const del = require("del")
const imagemin = require("gulp-imagemin")
const include = require("posthtml-include")
const plumber = require("gulp-plumber")
const posthtml = require("gulp-posthtml")
const htmlmin = require("gulp-htmlmin")
const rename = require("gulp-rename")
const sass = require("gulp-sass")
const sourcemaps = require("gulp-sourcemaps")
// const svgstore = require("gulp-svgstore")
const webp = require("gulp-webp")
sass.compiler = require("node-sass")

const terser = require('gulp-terser')
// const responsive = require('gulp-responsive');

// tasks
// подготовка css
gulp.task("styling", async () => {
  gulp.src([
      "source/sass/mixins.scss",
      "source/sass/style.scss"
    ], {
      allowEmpty: true
    })
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(concat("style.min.scss"))
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write("./"))
    .pipe(plumber.stop())
    .pipe(gulp.dest("./build/css"))
    .pipe(browserSync.stream());
});

// Копирование
gulp.task("copy", async () => {
  gulp.src([
      "./source/img/**",
      "./source/robots.txt"
    ], {
      base: "source"
    })
    .pipe(gulp.dest("./build"));
});

// удаление файлов и директорий
gulp.task("clean", () => del("build/*"));

// обработка html
gulp.task("html", () => {
  return gulp.src("./source/*.html")
    .pipe(posthtml([
      include()
    ]))
    .pipe(htmlmin({
      // collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest("./build"));
});

// живой сервер
gulp.task("browser-sync", () => {
  browserSync({
    notify: false,
    server: {
      baseDir: "./build",
      port: 3000
    }
  });
});

// IMGs
// images processing в source
gulp.task("images", async () => {
  gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({
        optimizationLevel: 3
      }),
      imagemin.jpegtran({
        progressive: true
      }),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("./source/img"));
});

// преобразуем необходимые изображения в webp в source
gulp.task("webp", async () => {
  gulp.src("./source/img/**/*.{png,jpg}")
    .pipe(webp({
      quality: 90
    }))
    .pipe(gulp.dest("./build/img"));
});


// JS
gulp.task("scripts", () => {
  return gulp.src([
    "source/js/appData.js",
    "source/js/viewer.js",
    "source/js/app.js"
    ])
    .pipe(sourcemaps.init())
    .pipe(concat("app.js"))
    .pipe(terser())
    .pipe(rename({
      prefix: "",
      suffix: ".min"
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest("./build/js"));
});






// watchers
gulp.task("serve", () => {
  browserSync.init({
    browser: "chrome",
    server: "./build",
    notify: false,
    port: 3000
  })

  gulp.watch("./source/sass/**/*.scss", gulp.series("styling"))
  gulp.watch("./source/js/**/*.js", gulp.series("scripts"))
  gulp.watch("./source/**/*.html", gulp.series("html")).on("change", browserSync.reload)
})









// final
gulp.task("build",
  gulp.series("clean",
    gulp.parallel(
      "images",
      "styling",
      "scripts"
    ),
    "copy",
    "webp",
    "html"
  )
);