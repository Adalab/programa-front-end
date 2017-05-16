## Flujo de trabajo con Git

- [Realizar cambios usando Git](#realizar-cambios-usando-git)

## Realizar cambios en un repositorio

1. Nos colocamos con la Terminal en la carpeta de nuestro repositorio usando `cd`.
1. Hacemos `git pull` para descargar los últimos cambios del repositorio remoto
1. Realizamos los cambios en los archivos que deseemos y los guardamos
1. Utilizamos `git add <nombreDelArchivo>` para marcar que cambios meteremos en la siguiente versión cuando hagamos el commit
1. Usamos `git commit -m "Mensaje del commit"`
1. Utilizamos `git push` para mandar los cambios al servidor
1. Si al ejecutar `git push` nos dice Git que hay conflictos:
    1. Al hacer `git push` me da error porque hay un conflicto
    1. Compruebo los archivos que hay en conflicto, los modifico para que se queden tal y como quiero y los guardo.
    1. Utilizamos `git add <nombreDelArchivo>` para marcar los conflictos en los archivos como resueltos y añadir los cambios al saco para cuando hagamos el siguiente commit.
    1. Usamos `git commit -m "Mensaje del commit"`
    1. Utilizamos `git push` para mandar los cambios al servidor
