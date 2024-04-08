//Extraemos ciertas funciones de GULP
const {src, dest, watch, series} = require('gulp');
//Extraemos la funcion de SASS para compilar CSS
const sass = require('gulp-sass')(require('sass'));
//Extraemos gulp-purgecss para minimizar el peso de nuestro archivo CSS
const purgecss = require('gulp-purgecss');
//Extraemos gulp-rename para renombrar nuestro archivo de gulp
const rename = require('gulp-rename');
//Imaganes
const imagemin = require('gulp-imagemin');

//Funciones o Workflow
function css(done) {
    src('src/scss/app.scss') //Identificar el archivo principal
        .pipe(sass()) //Compilar SASS
        .pipe(dest('build/css')) //Exportarlo o guardarlo en una ubicacion

    done(); //Callback que avisa a gulp cuando llegamos al final
}

function cssbuild(done) {
    src('build/css/app.css') //Identificar el archivo
        .pipe(rename({ //Renombramos el archivo
            suffix: '.min' //Crea el archivo app.min.css
        }))
        .pipe(purgecss({
            content: ['index.html'] //Pasamos el archivo HTML, donde encontrara el codigo que va a comparar para ver si se esta utilizando alguna clase de CSS
        }))
        .pipe(dest('build/css')) //Exportarlo o guardarlo en una ubicacion
    done();
}

function dev() {
    watch('src/scss/**/*.scss', css); //Actualiza todos los cambios del scss, watch nunca se detiene
}

function imagenes(done) {
    src('src/img/**/*') //Identificamos el archivo donde estan las imagenes
        .pipe(imagemin({optimizationLevel: 3})) //Minificamos las imaganes, los valores van del 1 al 5, siendo el 5 el mas alto
        .pipe(dest('build/img')) //Guardar el archivo en una ubicacion

    done();
}

//Ejecutamos la funcion (en la terminal -> gulp name (name es el nombre de la funcion))
exports.css = css;
exports.dev = dev;
exports.imagenes = imagenes;

//Para ejecutar series (permite ejecutar multiples tareas al mismo tiempo) en la terminal -> gulp
exports.default = series(imagenes, css, dev);
exports.build = series(cssbuild);