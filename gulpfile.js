const {dest,src,parallel, series,watch} = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const pug = require("gulp-pug");
const browserSync = require("browser-sync").create();
const browserJob = () =>{
    browserSync.init({
        server:"build/"
    });
}
const buildPug = () =>{
    console.log("buildPug запущен");
    return src("dist/pages/*.pug")
    .pipe(pug())
    .pipe(dest("build/"))
    .pipe(browserSync.stream());
    
}
const buildSaas = () =>{
    console.log("buildSass запущен");
    return src("dist/scss/*.scss")
    .pipe(sass())
    .pipe(dist("build/styles"));
}

 const img = () =>{
     return src('dist/img/*.png')
     .pipe(dest('build/styles'));
 };
 const optimize = () =>{
     console.log("Фото оптимизированы");
 }


 const example = () =>{
    return console.log("123");
 };
 const changes = () =>{
     return console.log("Что-то изменилось");
 }

 const watcher = () => {
     watch("dist/scss/index.scss",changes);
 }



 //exports.default = parallel(copy,img,optimize);
//exports.styles = copy;
exports.img = series(img,optimize);
 exports.watch = watcher;
 exports.server = browserJob;
 exports.builder = parallel(buildPug,buildSaas);
