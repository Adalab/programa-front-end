# 1.1.3 - El inspector

### El inspector

- El inspector es una herramienta de las herramientas de desarrollo de Chrome Dev Tools

- ¿Cómo lo abrimos?
- Para abrir el inspector tenemos varias opciones:
  - Pulsando en el menú de tres botones de la derecha superior de Chrome > más herramientas > herramientas para desarrolladores
  - Usar `Ctrl + Mayúscula + I` en Ubuntu o Windows y `Cmd + Opción + I`
  - Pulsar con el botón derecho sobre un elemento de nuestra página y seleccionar la opción inspeccionar

- Si queremos cerrarlo:
  - Pulsamos en la cruz que aparece en la esquina superior derecha del panel.
  - Usamos `Ctrl + Mayúscula + I` en Ubuntu o Windows y `Cmd + Opción + I` de nuevo

- ¿Qué es?
  - El inspector es una herramienta que viene con nuestro navegador y por tanto es parte de la aplicación del navegador
  - El inspector es una herramienta que viene en prácticamente todos los navegadores más famosos (Chrome, Firefox, Safari, Internet Explorer…) y sirve para inspeccionar el código de nuestra página, consultar errores, ver los archivos que se están cargando, en general para investigar que esta haciendo el código de nuestra vez y poder modificar el resultado y su comportamiento. Nos permite hacer de cirujanos de la web, ver las tripas de la web y modificarlas a nuestro antojo
  - El inspector nos permite indagar y modificar tanto en páginas que tengamos en nuestro ordenador cómo otras que estén publicadas internet. Cuando modifiquemos estas páginas no estaremos modificando las páginas como tal realmente, estaremos modificandolas temporalmente para ver qué sucedería si aplicamos ciertos cambios pero la web como tal, ya sea la de nuestro ordenador o la de internet, no va a verse modificada. Esos cambios serán temporales y una vez que recargemos la página se perderán y esta volverá a su estado inicial.

- ¿Para qué nos sirve?
  - Dado que nos permite controlar que está pasando con una web, podemos ver los recursos que se están cargando y cuales fallan, nos permite ver el código tanto de nuestra página para ver si está funcionando correctamente como de otras para ver cómo aplican ciertas técnicas o coger inspiración.
  - Por otro lado nos permite investigar que cambios queremos hacer sin guarrear nuestro CSS o HTML y corregir de forma más rápida y sencilla los errores de nuestro código.

- Podemos colocarlo arriba, abajo, a la derecha o sacarlo a una nueva ventana

- Partes que vamos a ver por el momento:

  - Inspector
    - Para abrir el inspector pulsamos en la pestaña de inspector
    - Sirve para leer, añadir, editar o eliminar tanto CSS como HTML (y sus atributos) de nuestra página
      - Mostrar como hacer cada uno
    - Mostrar que si pulsas en la flecha puedes seleccionar un elemento y analizarlo
    - Mostrar que puedes probar responsive pulsando en el botón
    - Nos permite ver los estilos heredados de CSS de cada navegador. Los navegadores ponen una serie de estilos a nuestra página por defecto. Por eso se crearon proyectos como normalize.css
    - Mostrar computed y explicar un poco qué representa la caja

  - Network
    - Sirve para ver que recursos carga nuestra página y ver si se ha producido algún error cargando esos recursos. Network muestra tanto las imágenes como otros recursos que se cargan (CSS, JavaScript, fuentes, etc.)
    - Network también muestra cuanto tarda en cargarse un elemento y qué tamaño tiene. De esta forma podemos saber también si hemos metido un recurso muy pesado y tarda mucho en cargarse.
    - Podemos seleccionar qué tipo de archivos queremos que se muestren y ver la dirección desde la que se están cargando esos archivos. Este último punto es fundamental, nos permitirá saber, en caso de que un archivo esté dando error, por qué esta fallando, ya que normalmente será porque hemos introducido una ruta (URL) erronea
    - Otro recurso muy interesante que nos ofrece Network es que nos permite ver cuantos segundos tarda en cargarse nuestra página y tomar capturas de pantalla de cada momento para simular que será lo que verá un usuario durante el momento de la carga.

    De momento veremos hasta ahí. Las herramientas para desarrolladores de Google Chrome ofrecen un sinfín de posibilidades más pero, ¿para qué aprender algo que no vamos a utilizar por el momento? Más adelante comenzaremos a ver recursos muy útiles para cuando trabajemos en otras áreas de nuestra página como JavaScript.

### Recursos interesantes para el inspector

- Shortcuts del inspector: https://developers.google.com/web/tools/chrome-devtools/shortcuts?hl=es
