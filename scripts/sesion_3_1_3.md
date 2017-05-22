# Sesión 3.1.3

### Qué hicimos ayer

- Cómo trabajar con Git
- Comandos básicos y configuración de Git
- Trabajar en equipo en Git

### Quiz sobre Git

### Sass

- ¿Qué es Sass?
    - Sass es un CSS vitaminado, ¿y qué significa que está vitaminado? que tendremos herramientas avanzadas para trabajar en CSS como variables (`$light-green` en vez de `#62BA35`), funciones como `darken` o `percentage`, importar otros archivos Sass para unificarlos todos en uno (mejor carga, más fácil de enlazar, etc).
    - ¿Pero cómo funciona esto? Creamos un archivo Sass, ejecutamos un programa o un código que nos lo convierta a CSS y ese CSS generado será el que utilicemos.
    - Hay mil formas de convertir Sass a CSS, usando un comando del terminal, código escrito en JavaScript, plugins de nuestro editor...En nuestro caso usaremos una aplicación llamada Koala para que lo haga por nosotros cada vez que guardemos el archivo.
    - ¿Y podemos meter sass directamente en nuestras páginas? En realidad no, lo que haremos será crear código con Sass para convertirlo a CSS y ese CSS generado será el que enlacemos en nuestra página.
    - Hoy en día, en muchas de las empresas punteras, no se usa CSS sino que se suele usar herramientas como Sass ya que facilita mucho el trabajo con el código.
    - ¿Qué tenemos que hacer para empezar a trabajar con Sass? Muy simple, cambiar la extensión del archivo de `.css` a `.scss` y ya sería un archivo Sass. A partir de ahí, podemos ir metiendo variable de forma gradual.
    - En esta clase vamos a ver dos utilidades de Sass, variables e imports y cómo usar ambas para estructurar nuestro código:
        - Variables en Sass
            - Iguales que en JavaScript, se escriben siempre precedidas por un símbolo de dolar `$` y se asignan mediante dos puntos.
            - Son muy útiles para colores, medidas, nombres de fuentes, etc. Importante pensar en abstracción (`$primary-color` en vez de `$blue`)
            - Crearemos
        - Imports
            - Como su nombre indica, permiten importar variables desde otro archivo. se usan con `@import` y la ruta del archivo CSS o Sass que queramos importar (se pueden importar ambos)
            - Si ponemos un archivo con un guión bajo delante Sass no lo procesará para convertirlo a CSS. La idea es que todos los nombres de archivos que vayamos a importar los escribamos con un guión bajo delante. Estos archivos a menudo se suelen llamar _partials_. Porque son partes del código final.
            - Es importante saber que el orden de los imports es importante y que tal como se carguen será como se importen y como se ejecuten para convertirse a CSS
        - Estructura
            - Dividimos en:
                - configuración
                - estilos generales
                - tipografía
                - componentes
                    - boton
                    - media
                - layouts
                    - header
                    - footer
                - helpers
            - Importante la cascada de CSS. Si tenemos estilos que van abajo, estos sobrescribirán a los que aparezcan más arriba si tienen la misma especificidad

### Autoprefixer

- Para entender Autoprefixer, primero tenemos que entender que son los vendor prefixers. Los vendor-prefixers son prefijos que utilizan los navegadores en propiedades experimentales o que no son estandar. Esto lo hacen para permitir a los desarrolladores probar funcionalidades de CSS antes de que se estandaricen. El caso es que al final un montón de navegadores antiguos necesitan estos prefijos en las propiedades para que estas funcionen correctamente.

- Pero, escribir todos los prefijos es un un trabajo muy tedioso y estar pendiente de cual necesitamos para cada navegador sería muy agotador. Por suerte tenemos Autoprefixer que hace este trabajo por nosotros y nos permite que nos olvidemos de ese problema.

- Por dejar claro, autoprefixer sería un post-procesador. Como hemos visto, Sass lo que hace es convertir un código con una sintaxis a CSS. Autoprefixer, en cambio, parte de un código CSS y lo postprocesa para convertirlo en un CSS con una serie de propiedades añadidas

### Breve explicación de los linters

- ¿Qué es un linter?
    - Un linter es basicamente una herramienta que resalta los errores (sintácticos y de estilo) que hay en un archivo de código.
    - Explicar un ejemplo visual de su funcionamiento
- ¿Para qué nos es útil?
    - Los linters son útiles para identificar errores de forma rápida y no tener que estar indagando en qué parte de nuestro código hemos metido mal una variable o cuando nos falta un punto y coma.
- Esto mola, ¿Por qué no lo hemos usado antes?
    - Si no hemos experimentado a escribir código sin linters no los valoramos tanto. Si no hemos escrito código sin linters no sabremos por qué falla nuestro código ni conoceremos los errores típicos al programar.
- ¿Qué linters utilizaremos en nuestra clase?
    - HTML Tidy 5 para HTML para errores en HTML
    - ESLint para errores en JavaScript
    - Stylelint para errores en Sass/CSS
- ¿Cómo instalarlos?
    - Instalar node
    - Descargar, compilar e instalar HTML Tidy 5
    - Instalar el paquete de los linters para cada caso
    - Instalar en Atom Linter y sus correspondientes plugins
