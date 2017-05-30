# Flujo de trabajo con Git

- [Añadir más cambios a un commit ya creado](#añadir_más_cambios_a_un_commit_ya_creado)
- [Clonar un repositorio en nuestro ordenador](#clonar_un_repositorio_en_nuestro_ordenador)
- [Crear un repositorio en GitHub](#crear_un_repositorio_en_github)
- [Crear un repositorio en nuestro ordenador](#crear_un_repositorio_en_nuestro_ordenador)
- [Deshacer los cambios realizados en un archivo](#deshacer_los_cambios_realizados_en_un_archivo)
- [Mostrar el código de nuestro repositorio en una web](#mostrar_el_código_de_nuestro_repositorio_en_una_web)
- [Realizar cambios en un repositorio](#realizar_cambios_en_un_repositorio)
- [Resolver conflictos generados al subir cambios al repositorio remoto](#resolver_conflictos_generados_al_subir_cambios_al_repositorio remoto)
- [Sacar un archivo de staging](#sacar_un_archivo_de_staging)
- [Ver los cambios internos de un archivo desde el último commit](#ver_los_cambios_internos_de_un_archivo_desde_el_último_commit)


## Añadir más cambios a un commit ya creado

**Importante:** Sólo haremos este paso si nos damos cuenta de que queremos añadir un cambio antes de haber subido los cambios al repositorio remoto. Si ya hemos ejecutado el comando `git push` y los cambios realizados ya están en el servidor, deberemos crear un nuevo commit. Para evitar este tipo de problemas, es **muy importante** revisar nuestro código antes de subirlo al servidor.

1. Si hemos creado un commit pero se nos ha olvidado meter algún cambio o hemos escrito algo mal y aún no hemos ejecutado `git push`, modificamos los archivos que deseemos y aplicamos los cambios que se nos hayan olvidado.
1. Tras aplicar los cambios, ejecutamos `git add <rutaDelArchivo>` por cada archivo o `git add --all .` si queremos añadir todos los cambios realizados.
1. Ejecutamos `git commit --amend -m "Mensaje del commit"`. Al usar `--amend` en el commit, lo que estamos haciendo es aplicar los cambios sobre el commit anterior. Estariamos añadiendo los nuevos cambios que hemos aplicado a los anteriores ya realizados, metiendo de  esa manera todos los cambios en el mismo commit. Es importante usar un mensaje del commit que refleje todos los cambios, tanto los que hicimos en el commit antes de hacer ejecutar el `--ammend`, como las correcciones que hemos hecho posteriormente.


## Clonar un repositorio en nuestro ordenador

1. Copiamos la URL del repositorio. En GitHub, esta URL la obtendremos abriendo en un navegador web la página de nuestro proyecto, pulsando el botón _Clone or download_ y copiando la ruta que aparece en la ventanita emergente. (Ejemplo: https://github.com/adalab/programa-front-end.git)
1. Abrimos el Terminal y, usando el comando `cd`, nos colocamos en la carpeta donde queramos clonar (copiar) el repositorio (Ejemplo: `cd Escritorio/proyectos`).
1. Ejecutamos el comando `git clone <URLDelRepositorio>`, donde `<URLDelRepositorio>` será la URL del repositorio que hemos copiado en el primer paso (Ejemplo: `git clone https://github.com/adalab/programa-front-end.git`). Una vez haya terminado el comando, ya tendremos clonado el repositorio y podremos trabajar con ello.


## Crear un repositorio en GitHub

1. Si no tenemos iniciada sesión en GitHub, [iniciamos sesión](https://github.com/login)
1. Abrimos [la página para crear un nuevo repositorio](https://github.com/new) en nuestro navegador web
1. En la página que hemos abierto, escribimos el nombre y la descripción que queremos usar en nuestro repositorio
1. Si queremos crear un repositorio que no esté vacio, marcamos la casilla de _Initialize this repository with a README_. Esto hará que, al crear el repositorio, se añada un archivo `README.md` y, por lo no tanto, no aparezca vacío
1. Pulsamos el botón _Create repository_, esperamos a que GitHub termine de crear el repositorio y una vez acabado ya estará listo para que trabajemos con él.


## Crear un repositorio en nuestro ordenador

1. Abrimos el Terminal y, usando el comando `cd`, nos colocamos dentro de la carpeta donde queramos inicializar (Ejemplo: `cd Escritorio/mi-repositorio`).
1. Ejecutamos desde la Terminal el comando `git init` para convertir la carpeta en un repositorio. Se creará la carpeta oculta `.git`.
1. Si no tenemos archivos en la carpeta podemos crear uno nuevo o pegar archivos desde otra carpeta. Debemos añadir al menos un archivo para poder hacer un commit.
1. Utilizamos `git add <nombreDelArchivo>` para marcar que cambios que meteremos en la siguiente versión cuando hagamos el commit. Si queremos añadir todos los cambios realizados en la carpeta del repositorio usaremos `git add .`.
1. Usamos `git commit -m "Mensaje del commit"` para realizar el primer commit del repositorio, la primera version.
1. Enlazamos nuestro repositorio con el servidor usando `git remote add origin <URLDelServidor>`. Donde `<URLDelServidor>` será la URL de nuestro repo seguida de `.git`. (Ejemplo: `git remote add origin https://github.com/adalab/programa-front-end.git`). Si no tenemos un repositorio remoto, podemos crear un vacío en GitHub usando los [pasos para crear un repositorio en GitHub](#crear-un-repositorio-en-github).
1. Ejecutamos `git push -u origin master` para subir la información de nuestro repositorio al servidor (GitHub u otra plataforma)


## Deshacer los cambios realizados en un archivo

1. Si hemos realizado cambios en un archivo, ya sea borrar el archivo o modificarlo, y queremos deshacerlos, podremos ejecutar los siguientes pasos:
  - Si aún no lo hemos añadido a staging, podremos ejecutar `git checkout <rutaDelArchivo>` para restaurar el archivo al estado del último commit (Ejemplo: `git checkout index.html`). Si queremos restaurar todos los archivos del repositorio al estado en el que estaban en el último commit, usaremos `git checkout .`
  - Si lo hemos añadido a staging, primero deberemos [sacar el archivo de staging](#sacar-un-archivo-de-staging) y una vez sacado ya podremos ejecutar `git checkout <rutaDelArchivo>` para restaurarlo al estado en el que estaba al hacer el último commit.


## Mostrar el código de nuestro repositorio en una web

**Nota:** Esta funcionalidad es una funcionalidad de GitHub, no de Git. Solo funcionará si usamos GitHub y es porque la plataforma lo permite.

1. Antes de comenzar, debemos tener listo un repositorio en nuestro ordenador. Para ello:
  - Podemos [clonar un repositorio](#clonar-un-repositorio-en-nuestro-ordenador) ya existente desde alguna plataforma como GitHub
  - Podemos [crear un repositorio](#crear-un-repositorio-en-nuestro-ordenador) a partir de una carpeta de nuestro ordenador
  - Podemos [crear un repositorio](#crear-un-repositorio-en-nuestro-ordenador) en GitHub y después [clonarlo en nuestro ordenador](#clonar-un-repositorio-en-nuestro-ordenador)
1. Ejecutamos `git pull origin master` para descargar del servidor los últimos cambios realizados en el repositorio
1. Creamos una nueva rama llamada `gh-pages` ejecutando el comando `git checkout -b gh-pages`.
1. Utilizamos `git push -u origin gh-pages` para subir la nueva rama creada a nuestro repositorio remoto.
1. Usamos `git checkout -` para volver a colocarnos en la rama donde estábamos trabajando, suele ser la rama `master` normalmente.


## Realizar cambios en un repositorio

1. Antes de empezar a hacer cambios, debemos tener listo un repositorio en nuestro ordenador. Para ello:
  - Podemos [clonar un repositorio](#clonar-un-repositorio-en-nuestro-ordenador) ya existente desde alguna plataforma como GitHub
  - Podemos [crear un repositorio](#crear-un-repositorio-en-nuestro-ordenador) a partir de una carpeta de nuestro ordenador
  - Podemos [crear un repositorio](#crear-un-repositorio-en-nuestro-ordenador) en GitHub y después [clonarlo en nuestro ordenador]((#clonar-un-repositorio-en-nuestro-ordenador))
1. Una vez tenemos listo el repositorio, nos situamos en la carpeta de nuestro repositorio usando `cd`. (Ejemplo `cd Escritorio/mi-repositorio`)
1. Hacemos `git pull` para descargar los últimos cambios del repositorio remoto, por si hubiese alguno.
1. Hacemos las modificaciones que queramos dentro de la carpeta del repositorio. Creamos archivos, los modificamos, los copiamos desde otras carpetas de nuestro ordenador o eliminamos archivos existentes. Cualquier cambio que hagamos en la carpeta Git lo detectará y podremos guardarlo más tarde cuando hagamos el commit.
1. Ejecutamos `git status` para comprobar que cambios hemos realizado y asegurarnos de que no hemos modificado ningún archivo que no deseábamos modificar en un principio.
1. Utilizamos `git add <nombreDelArchivo>` para marcar que cambios que meteremos en la siguiente versión cuando hagamos el commit. Si queremos añadir todos los cambios realizados en la carpeta del repositorio usaremos `git add .`. Si hemos eliminado algún archivo, Git nos dirá que debemos usar `git add --all .` para llevar seguimiento también de los cambios en archivos eliminados.
1. Usamos `git commit -m "Mensaje del commit"` para realizar el commit.
1. Utilizamos `git push` para mandar los cambios al servidor
1. Si al ejecutar `git push` nos dice Git que hay conflictos, realizaremos los pasos para resolver un conflicto.


## Resolver conflictos generados al subir cambios al repositorio remoto

1. Si hemos hecho `git push origin master` en un repositorio y nos muestra un mensaje de `rechazado` o `rejected` porque la rama actual está por detrás de su copia remota, debemos ejecutar el comando `git pull --rebase origin master` para que intente aplicar nuestros cambios por encima de los cambios realizados en el repositorio remoto. Lo que hace este comando exactamente es descargar el estado actual del repositorio que hay en el servidor y aplicar los commits que hayamos realizado uno a uno sobre ese estado. Esto hará que nuestros cambios aparezcan como si se hubiesen realizado posteriormente a los del servidor y, una vez hayamos solucionado los conflictos existentes, nos permitirá enviar los cambios mediante `git push origin master` porque será como si hubiésemos creado esos cambios más tarde.
1. Al ejecutar `git pull --rebase origin master`, Git empezará a aplicar, paso a paso, los cambios de los commits que hayamos realizado. Aplicaremos una de las siguientes opciones en cada paso hasta que nos indique que el proceso de rebase ha finalizado:
  - Si encuentra algún conflicto nos lo indicará y nos dirá que resolvamos los conflictos antes de continuar. Para ello ejecutamos `git status` para ver los archivos que han entrado en conflicto, estos apareceran con el texto `both modified:` o `modificado por ambos:` delante de ellos y en color rojo. Modificamos los archivos desde Atom para que se queden tal y como queremos y posteriormente ejecutamos `git add <rutaDelArchivo>` (Ejemplo: `git add index.css`). Tras haber resuelto los conflicto y haber añadido los archivos con `git add`. Ejecutamos `git rebase --continue` para que prosiga con el proceso de rebase hasta el siguiente punto. Si en el siguiento punto
  - Si ejecutamos `git status` y nos dice que no hay ningún cambio, ejecutamos `git rebase --skip` para que continue con el siguiente paso
  - Si en algún momento queremos cancelar el proceso, ejecutaremos `git rebase --abort`.
1. Una vez hayamos terminado de hacer el proceso posterior a `git pull --rebase origin master`, realizaremos de nuevo el comando `git push origin master`. Esta vez no habrá conflictos porque, gracias al paso anterior, hemos organizado los cambios de tal forma que los que hemos aplicado en nuestro ordenador se han colocado posteriormente a los del servidor.


## Sacar un archivo de staging

1. Ejecutamos `git status` para saber que archivos están en staging.
1. Ejecutamos `git reset <rutaDelArchivo>` con cada archivo que hayamos visto que está en staging y queramos sacar de ahí. Si queremos sacar todos los archivos que estén actualmente en staging, usaremos `git reset .`


## Ver los cambios internos de un archivo desde el último commit

**Nota:** Esto solo lo podremos hacer si aún no hemos añadido el archivo a staging, es decir, aún no hemos ejecutado `git add <rutaDelArchivo>`.

1. Ejecutamos `git diff <rutalDelArchivo>` donde ruta del archivo será la ruta del archivo en el cuál queremos comprobar los cambios realizados.
1. Si el archivo es muy largo, tendremos que usar las flechas de nuestro teclado (`↑` o `↓`) para ver todos los cambios correctamente.
1. En este mismo caso en el que los cambios son muy largos, introduciremos `:` y posteriormente `q` para que deje de mostrar la información de los cambios. Si no hacemos esto, no podremos seguir trabajando con la Terminal. La otra opción sería cerrar y volver a abrir la Terminal pero es un proceso más tedioso.
