## Flujo de trabajo con Git

- [Crear un repositorio en GitHub](#crear-un-repositorio-en-github)
- [Realizar cambios usando Git](#realizar-cambios-usando-git)

## Crear un repositorio en GitHub

1. Iniciamos sesión en GitHub si no hemos iniciado la sesión previamente
1. Abrimos [la página para crear un nuevo repositorio](https://github.com/new) en nuestro navegador web
1. En la página que hemos abierto, escribimos el nombre y la descripción que queremos usar en nuestro repositorio
1. Marcamos la casilla de _Initialize this repository with a README_ para que, al crear el repositorio, se añada un archivo README.md y no aparezca el repositorio vacio
1. Pulsamos el botón _Create repository_, esperamos a que GitHub termine de crearlo y ya estará listo

## Realizar cambios en un repositorio

1. Antes de empezar a hacer cambios, debemos tener listo un repositorio en nuestro ordenador. Para ello:
  - Podemos clonar un repositorio ya existente desde alguna plataforma como GitHub
  - Podemos crear un repositorio a partir de una carpeta de nuestro ordenador
  - Podemos crear un repositorio en GitHub y despues clonarlo en nuestro ordenador
1. Despues, nos situamos en la carpeta de nuestro repositorio usando `cd`. (Ejemplo `cd Escritorio/mi-repositorio`)
1. Hacemos `git pull` para descargar los últimos cambios del repositorio remoto, por si hubiese alguno.
1. Modificamos archivos, los añadimos a la carpeta donde tenemos nuestro repositorio o los eliminamos.
1. Utilizamos `git add <nombreDelArchivo>` para marcar que cambios que meteremos en la siguiente versión cuando hagamos el commit. Si queremos añadir todos los cambios realizados en la carpeta del repositorio usaremos `git add .`.
1. Usamos `git commit -m "Mensaje del commit"` para realizar el commit.
1. Utilizamos `git push` para mandar los cambios al servidor
1. Si al ejecutar `git push` nos dice Git que hay conflictos, realizaremos los pasos para resolver un conflicto.
