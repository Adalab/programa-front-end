## Flujo de trabajo con Git

- [Crear un repositorio en GitHub](#crear-un-repositorio-en-github)
- [Realizar cambios en un repositorio](#realizar-cambios-en-un-repositorio)
- [Crear un repositorio en nuestro ordenador](#crear-un-repositorio-en-nuestro-ordenador)
- [Clonar un repositorio en nuestro ordenador](#clonar-un-repositorio-en-nuestro-ordenador)
- [Mostrar el código de nuestro repositorio en una web](#mostrar-el-código-de-nuestro-repositorio-en-una-web)

## Crear un repositorio en GitHub

1. Iniciamos sesión en GitHub si no hemos iniciado la sesión previamente
1. Abrimos [la página para crear un nuevo repositorio](https://github.com/new) en nuestro navegador web
1. En la página que hemos abierto, escribimos el nombre y la descripción que queremos usar en nuestro repositorio
1. Marcamos la casilla de _Initialize this repository with a README_ para que, al crear el repositorio, se añada un archivo README.md y este no aparezca vacio
1. Pulsamos el botón _Create repository_, esperamos a que GitHub termine de crear el repositorio y una vez acabado ya estará listo para que trabajemos con él.

## Clonar un repositorio en nuestro ordenador

1. Copiamos la URL del repositorio. En GitHub, esta URL la obtendremos abriendo en un navegador web la página de nuestro proyecto, pulsando el botón _Clone or download_ y copiando la ruta que aparece en la ventanita emergente. (Ejemplo: https://github.com/adalab/programa-front-end.git)
1. Abrimos el Terminal y, usando el comando `cd`, nos colocamos en la carpeta donde queramos clonar (copiar) el repositorio (Ejemplo: `cd Escritorio/proyectos`).
1. Ejecutamos el comando `git clone <URLDelRepositorio>`, donde `<URLDelRepositorio>` será la URL del repositorio que hemos copiado en el primer paso (Ejemplo: `git clone https://github.com/adalab/programa-front-end.git`). Una vez haya terminado el comando, ya tendremos clonado el repositorio y podremos trabajar con ello.

## Crear un repositorio en nuestro ordenador

1. Abrimos el Terminal y, usando el comando `cd`, nos colocamos dentro de la carpeta donde queramos inicializar (Ejemplo: `cd Escritorio/mi-repositorio`).
1. Ejecutamos desde la Terminal el comando `git init` para convertir la carpeta en un repositorio. Se creará la carpeta oculta `.git`.
1. Si no tenemos archivos en la carpeta podemos crear uno nuevo o pegar archivos desde otra carpeta. Debemos añadir al menos un archivo para poder hacer un commit.
1. Utilizamos `git add <nombreDelArchivo>` para marcar que cambios que meteremos en la siguiente versión cuando hagamos el commit. Si queremos añadir todos los cambios realizados en la carpeta del repositorio usaremos `git add .`.
1. Usamos `git commit -m "Mensaje del commit"` para realizar el primer commit del repositorio, la primera version.
1. Enlazamos nuestro repositorio con el servidor usando `git remote add origin <URLDelServidor>`. Donde `<URLDelServidor>` será la URL de nuestro repo seguida de `.git`. (Ejemplo: `git remote add origin https://github.com/adalab/programa-front-end.git`). Si no tenemos un repositorio remoto, podemos crearlo con los [pasos para crear un repositorio en GitHub](#crear-un-repositorio-en-github).
1. Ejecutamos `git push -u origin master` para subir la información de nuestro repositorio al servidor (GitHub u otra plataforma)


## Realizar cambios en un repositorio

1. Antes de empezar a hacer cambios, debemos tener listo un repositorio en nuestro ordenador. Para ello:
  - Podemos [clonar un repositorio](#clonar-un-repositorio-en-nuestro-ordenador) ya existente desde alguna plataforma como GitHub
  - Podemos [crear un repositorio](#crear-un-repositorio-en-nuestro-ordenador) a partir de una carpeta de nuestro ordenador
  - Podemos [crear un repositorio](#crear-un-repositorio-en-nuestro-ordenador) en GitHub y despues [clonarlo en nuestro ordenador]((#clonar-un-repositorio-en-nuestro-ordenador))
1. Despues, nos situamos en la carpeta de nuestro repositorio usando `cd`. (Ejemplo `cd Escritorio/mi-repositorio`)
1. Hacemos `git pull` para descargar los últimos cambios del repositorio remoto, por si hubiese alguno.
1. Modificamos archivos, los añadimos a la carpeta donde tenemos nuestro repositorio o los eliminamos.
1. Utilizamos `git add <nombreDelArchivo>` para marcar que cambios que meteremos en la siguiente versión cuando hagamos el commit. Si queremos añadir todos los cambios realizados en la carpeta del repositorio usaremos `git add .`.
1. Usamos `git commit -m "Mensaje del commit"` para realizar el commit.
1. Utilizamos `git push` para mandar los cambios al servidor
1. Si al ejecutar `git push` nos dice Git que hay conflictos, realizaremos los pasos para resolver un conflicto.


## Mostrar el código de nuestro repositorio en una web

**Nota:** Esta funcionalidad es una funcionalidad de GitHub, no de Git. Solo funcionará si usamos GitHub y es porque el servicio lo permite.

1. Antes de comenzar, debemos tener listo un repositorio en nuestro ordenador. Para ello:
  - Podemos [clonar un repositorio](#clonar-un-repositorio-en-nuestro-ordenador) ya existente desde alguna plataforma como GitHub
  - Podemos [crear un repositorio](#crear-un-repositorio-en-nuestro-ordenador) a partir de una carpeta de nuestro ordenador
  - Podemos [crear un repositorio](#crear-un-repositorio-en-nuestro-ordenador) en GitHub y despues [clonarlo en nuestro ordenador]((#clonar-un-repositorio-en-nuestro-ordenador))
1. Ejecutamos `git pull origin master` para descargar del servidor los últimos cambios realizados en el repositorio
1. Creamos una nueva rama llamada `gh-pages` ejecutando el comando `git checkout -b gh-pages`.
1. Utilizamos `git push -u origin gh-pages` para subir la nueva rama creada a nuestro repositorio remoto.
1. Usamos `git checkout -` para volver a colocarnos en la rama donde estabamos trabajando, suele ser la rama master normalmente.
