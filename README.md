# PodcastApp
Link del proyecto: https://podcastapp-luisjpr.netlify.app/
### GUIA
#### Descargar e instalar Node.js
##### Para trabajar con SASS y Gulp tenemos que crear el package.json (sirve para ejecutar comandos de npm y para instalar dependencia de npm), escribir en la terminal:
-  npm init
##### Para instalar la dependencia de SASS (permite compilar las hojas de estilo de sass) con NPM, escribir en la terminal:
-  npm i --save-dev sass gulp-sass
##### Instalamos la Dependencia de desarrollo gulp (nos permite tener acceso a la API de gulp para compilar la hoja de estilo y guardarla en otro lugar)
-  npm i --save-dev gulp
##### OBS: Ejecutamos como administrador PowerShell y escribimos el siguiente comando:
-  npm i -g gulp-cli
##### Luego de ello creamos una carpeta llamada gulpfile.js
##### Instalamos la Dependencia de desarrollo imagemin (permite tener imagenes mas ligeras)
-  npm i --save-dev gulp-imagemin@7.1.0
##### Instalamos la Dependencia de desarrollo bootstrap
-  npm i --save-dev bootstrap
##### Finalizando el proyecto
##### Instalamos la Dependencia de desarrollo purgecss
-  npm i --save-dev gulp-purgecss gulp-rename
