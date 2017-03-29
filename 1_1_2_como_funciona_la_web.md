# La web y sus tecnologías

## Índice de la sesión

- [Introducción](#introduccion)
- [Contenido](#contenido)
- [Recursos extra](#recursos-extra)
- [Lista de recursos](#lista-de-recursos)

## Introducción

La web es algo que utilizamos de forma cotidiana. Sólo en España son más de 13 millones de personas las que pasan más de tres horas conectados a internet. Pero, aún pasando tanto tiempo, ¿sabemos cómo funciona?. En esta sesión entenderemos que sucede cada vez que metemos una dirección en el navegador y cuales son los pasos que se ejecutan desde ese momento hasta que la web se muestra completamente en nuestro navegador. También veremos las diferencias entre páginas web y aplicaciones web.

Aparte de lo anterior, conoceremos cuales son las tecnologías utilizadas para crear una página web, el cometido de cada una de ellas y cómo combinarlas.

Por último, continuaremos con el aprendizaje de HTML y empezaremos con CSS para, aparte de conocer la teoría, ir adquiriendo los conocimientos prácticos.

## Contenido

### Páginas web vs aplicaciones web

Las webs han cambiado mucho desde sus comienzos allá por 1990. Al principio estas no tenian más que texto y enlaces a otras páginas, posteriormente se añadieron imágenes, luego estilos y así continuamente hasta llegar a las páginas web de hoy en día que permiten acciones cómo reservar un restaurante, comprar ropa o realizar un pago virtual. Toda esta transición he hecho que el concepto de páginas web sea sustituido en algunos casos por el de aplicación web debido a que ya no solo muestran contenido sino que permiten realizar acciones a través de ellas.

En el video enlazado a continuación veremos cómo ha evolucionado este campo, las características y beneficios de las aplicaciones web y cómo su aparición ha transformado internet y la forma en que las personas lo consumen.

["Evolución de la Web: de la página web a la aplicación web"](https://www.youtube.com/watch?v=mg0T_Gb_Z1w)

### Introducción a CSS

En esta parte comenzaremos a ver cómo modificar el aspecto visual de nuestra página mediante hojas de estilo CSS. Veremos qué es ese CSS, cual es su sintaxis y qué características básicas son las que lo definen.

La idea es introducirnos con estilos básicos para cambiar los colores del texto y aprender a hacer referencia a elementos del HTML desde el CSS para poder modificar sus estilos usando lo que se denomina _"selectores"_.

[Introducción a CSS](https://es.khanacademy.org/computing/computer-programming/html-css/#intro-to-css).

### Más etiquetas HTML

Cuando abrimos un archivo HTML en un navegador este último lo interpreta y muestra un tipo de texto enriquecido llamado hipertexto. El hipertexto es uno de los conceptos clave detrás de HTML y nos permite utilizar referencias en nuestro texto (hipervínculos) para enlazar otras partes de un mismo documento o de otros documento distintos. Esta cualidad es la que permite tener enlaces en nuestras páginas web, la que permite que podamos navegar a través de internet e ir saltando de una página a otra.

En esta sección vamos a ver cuales son las etiquetas utilizadas para crear este tipo de enlaces y cómo escribir el código para utilizarlas.

Por otro lado también veremos otro tipo de elementos cómo tablas para mostrar contenido de forma estructurada y comentarios HTML para escribir texto que se puedan ver cuando leemos el código de un archivo pero que no se muestran en la página y por tanto nos permite, cómo su nombre indica, comentar el texto para poder explicar partes concretas de él.

[Más etiquetas HTML](https://es.khanacademy.org/computing/computer-programming/html-css#html-tags-continued)

### Combinando HTML, CSS y JavaScript

Hasta ahora en los ejercicios solo hemos visto CSS dentro de nuestro HTML pero, por norma general y salvo en ciertas excepciones, esta práctica no suele ser aconsejable. Lo normal es tener un archivo con el CSS y otro con el HTML y que cada uno vaya separado, esto tiene varios beneficios a la hora de escribir el código y mantenerlo y de ahí que sea la práctica recomendable.

En el siguiente video veremos los beneficios de separar este tipo de códigos y aprenderemos a enlazar los estilos CSS y nuestro JavaScript en el documento HTML para que el navegador pueda cargarlos correctamente.

**Nota:** En el video veremos cómo sacar fuera de nuestro HTML el código JavaScript, aunque no lo hayamos visto hasta ahora es bueno saber que se pueden enlazar archivos JavaScript igual que lo podemos hacer con el CSS. Más adelante podrás consultar este video y saber cómo llevar a cabo esta separación por si quieres volver a consultarlo.

["Combinando HTML, CSS y JavaScript"](https://www.youtube.com/watch?v=vOf5bO0ehVg)

### El editor web

Cuando trabajamos con archivos de texto con formato (como un Word) utilizamos aplicaciones como Microsoft Word o Google Docs porque nos ofrecen varias herramientas y ayudas para facilitarnos el trabajo. Con los archivos de código sucede lo mismo, podemos escribir cualquier archivo de código desde cualquier aplicación de texto que permita modificar texto sin formato, pero si esa aplicación no nos aporta algunas herramientas, trabajar con ella será mucho más difícil, nos llevará más tiempo y podremos cometer más fallos y de ahí la necesidad de usar un editor.

Existen todo tipo de editores de código diferentes pero la mayoría comparten las siguientes características básicas:
- Resaltado de código mediante colores para identificar elementos, palabras clave, valores, etc.
- Capacidad para visualizar varios archivos a la vez mediante la división de la ventana y abrir documentos en distintas pestañas
- Autocompletado de código y capacidad para incrustar en un archivo fragmentos de código definidos por el usuario
- Comandos y atajos de teclado para mejorar la productividad
- Posibilidad configurar el funcionamiento de la aplicación y extender sus capacidades mediante extensiones

Todo lo anterior nos permite escribir código de forma bastante cómoda y se podría considerar como lo fundamental en un editor. A partir de ahí muchos editores añaden otras funcionalidades y herramientas llegando a crear aplicaciones bastante complejas pero muy potentes.

En este curso utilizaremos el editor de Atom, creado por GitHub. Este editor es gratuito y es open source, es decir, el código utilizado para crearlo es público. Gracias a que ese código es público hay bastante gente que colabora y eso permite que los fallos sean corregidos con mayor rapidez, haciendo el editor más estable.

[Página oficial de Atom](https://atom.io/)

## Recursos extra

### Libro de Introducción a CSS

Este libro explica los fundamentos CSS de la versión 2, la anterior a la actual. Compartimos aquí este libro porque no existen otros recursos gratuitos actualizados que expliquen cómo trabajar con CSS de manera concisa y fácil de entender.

Dicho esto y para dejar constancia de las cosas que han cambiado, la siguiente lista expone las secciones de código que pensamos que son interesantes de leer bien porque el funcionamiento no ha cambiado y se mantiene en la versión de HTML5 o bien porque son conceptos globales de CSS:

- Capítulo 1
  - 1.1 ¿Qué es CSS?
  - 1.2 Breve historia de CSS
  - 1.5 Funcionamiento básico de CSS
  - 1.6 Cómo incluir CSS en un documento XHTML. Sustituir XHTML por HTML en esta sección
  - 1.7 Glosario básico
  - 1.8 Medios CSS
  - 1.9 Comentarios
  - 1.10 Sintaxis de la definición de cada propiedad CSS
- Capítulos 2, 3, 4, 5, 6, 7, 8, 9 y 10 completos (es todo idéntico a CSS y no está desfasado)
- Capítulo 11 - Todo excepto el último ejemplo de etiquetas label alineadas con los campos del formulario.
- Capítulo 12
  - 12 Layout
  - 12.1 Centrar una página horizontalmente
  - 12.4 Alturas/anchuras máximas y mínimas
- Capítulo 13
  - 13.2 Versión para imprimir
  - 13.3 Personalizar el cursor
  - 13.5 Prioridad de las declaraciones CSS
  - 13.7 Recomendaciones generales sobre CSS

El resto del libro, o bien contiene conceptos que ya no se utilizan, o bien no es del todo relevante o no aporta el valor suficiente a estas alturas del curso. Es recomendable hacer los ejercicios porque se asienta mucho mejor el aprendizaje.

[Enlace al libro "Introducción a CSS"](http://librosweb.es/libro/css/)

**Nota:** El libro sólo se puede leer a través de la web, no hay formato para descargar.

## Lista de recursos para esta sesión

- Contenido
  - ["Páginas web vs aplicaciones web"](https://www.youtube.com/watch?v=mg0T_Gb_Z1w)
  - [Introducción a CSS](https://es.khanacademy.org/computing/computer-programming/html-css/#intro-to-css)
  - [Más etiquetas HTML](https://es.khanacademy.org/computing/computer-programming/html-css#html-tags-continued)
  - ["Combinando HTML, CSS y JavaScript"](https://www.youtube.com/watch?v=vOf5bO0ehVg)
- Recursos extra
  - [Libro de "Introducción a CSS"](http://librosweb.es/libro/xhtml/)
