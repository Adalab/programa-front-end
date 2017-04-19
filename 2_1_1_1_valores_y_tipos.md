# Valores y tipos en JavaScript

## Antes de comenzar

A lo largo de este documento se mostrarán ejemplos usando JavaScript. Te recomiendo sin lugar a dudas, que pruebes dichos ejemplos. La idea de estas pequeñas partes de código es que jueges con ellas en tu navegador o terminal y así puedas ver cómo funcionan, jugar con los ejemplos y probar qué pasaría si modificas alguna parte de ellos. Todo esto hará que interiorices mejor el aprendizaje y pruebes distintos casos para ver que ocurriría.

Se trata de descubrir los horizontes de JavaScript, saber que se puede hacer y que no y cómo funciona este lenguaje.

## Introducción

Cómo hemos visto anteriormente, al fin y al cabo, la programación es una manera de obtener unos resultados a partir de unos datos recibidos. Los resultados pueden ser, bien otros datos o bien acciones llevadas a cabo por un dispositivo electrónico (emitir un sonido, mostrar algo en la pantalla, guardar datos en una memoria, etc). Estos resultados se consiguen a través de un conjunto de procesos llevadas a cabo por un programa, dicho conjunto se denomina algoritmo.

Si pensamos en cualquier aplicación, veremos que todas ellas siguen este patrón. Por ejemplo, cuando hacemos una foto con el teléfono, recibimos unos datos de entrada a través del sensor de la cámara del teléfono, esos datos son procesados por la aplicación de la cámara para convertirlos a una imagen digital y finalmente el resultado es la acción de almacenar dicha foto en la memoria del dispositivo. Obviamente este proceso está simplificado y es más complejo, pero el resto de fases no mencionadas no dejan de ser procesos aplicados sobre datos para obtener otros datos o acciones que llevar a cabo.

Los datos con los que trabajan las aplicaciones se representan mediante valores. Por tanto un valor no es más que la representación de un dato sobre la que podemos aplicar las reglas comentadas anteriormente. Si queremos mostrar la temperatura en una pantalla necesitaremos el valor númerico (por ejemplo, 27) que represente el dato de la temperatura y sobre ese valor aplicaremos las reglas para obtener el resultado deseado.

De esta forma podemos ver que la base de la información de nuestra aplicación reside en los valores, estos serán los encargados de representar los datos y serán sobre los que apliquemos los mecanismos necesarios para llegar al punto deseado.

A continuación veremos que tipos de datos existen en JavaScript y las características de cada uno.

## Tipos de datos

En JavaScript existen por defecto seis tipos distintos de datos:

- `number`
- `string`
- `boolean`
- `null`
- `undefined`
- `object`

Cada uno de ellos, según sus características, se utilizará para representar un tipo de valor concreto:

- `number` para números
- `string` para texto
- `boolean` para verdadero o falso
- `null` para valores nulos, es decir, ausencia de valor, sería como la nada
- `undefined` para valores sin definir, a los que no se les ha asignado nada
- `object` para representar conjuntos de valores (estructuras de datos)

Todos estos tipos, exceptuando `object`, se denominan valores primitivos. Más adelante veremos que diferencia hay entre los valores primitivos y los objetos pero por el momento es bueno mencionarlo para saber relacionar que tipos son primitivos.

En JavaScript podemos saber de que tipo es una variable usando el operador `typeof`. En programación, los operadores indican al ordenador que ejecute una acción para obtener unos datos a partir de otros. En este caso, `typeof` devuelve el tipo de un valor. Para utilizarlo simplemente tenemos que escribir `typeof` y a continuación, separado por un espacio, el valor. Por ejemplo, si escribimos en la consola `typeof 42`, se imprimirá `number`. A continuación se muestran los resultados obtenidos usando `typeof` con otros datos:

- `typeof 23.49` imprime `number` en la consola
- `typeof "hola"` imprime `string` en la consola
- `typeof null` imprime `object` en la consola
- `typeof undefined` imprime `undefined` en la consola

Si nos fijamos, el caso de `typeof null` es un caso bastante raro, porque devuelve de forma erronea `"object"` en vez de `"null"`. Esto es debido a que en la primera versión de JavaScript se introdujo un error y cuando se supo de este error ya era demasiado tarde para cambiarlo. De haberlo hecho, miles de páginas habrían dejado de funcionar, algo que no era para nada viable.

Más adelante veremos otros casos especiales, pero por el momento con esto nos sirve. A continuación veremos cómo definir los valores según el tipo y que operaciones podemos realizar con cada uno de ellos.

### Number

El tipo de valor number (_número_ traducido al español), cómo su nombre indica comprende cualquier tipo de número utilizado en JavaScript. Hay varios subtipos de números en JavaScript pero de momento aprenderemos los más importantes, números enteros o _integers_ y números decimales o _floating point numbers_.

En JavaScript los números enteros se representan directamente con cifras, por lo que si escribimos `14232` o `-42` en la consola de nuestro navegador sería totalmente válido. Por otro lado, los números decimales se escriben igual que en inglés, es decir, utilizando puntos en vez de comas. Por ejemplo, en JavaScript, `1.32` representaría _1,32_.

Las anteriores son las únicas reglas gramaticales a la hora de escribir números enteros y decimales. Pero escribir números sin hacer nada con ellos no tiene ninguna utilidad, lo que queremos es poder obtener otros números, es decir, poder operar con ellos. Esto lo podemos conseguir mediante los operadores de suma, resta, multiplicación, división y módulo.

#### Suma, resta, multiplicación y división

En JavaScript, los operadores de suma (`+`), resta (`-`), multiplicación (`*`) y división (`/`) se utiliza exactamente igual que en matemáticas.

```js
1 + 2        // Devuelve 3
1.4 - 2.4    // Devuelve -1
+ 7          // Devuelve 7
-40          // Devuelve -40
-+8          // Devuelve -8
30 + 20 - 4  // Devuelve 46
3 + 3 + 3    // Devuelve 9

4 * 4        // Devuelve 16
8 * -7       // Devuelve -56
4 * 2 / 8    // Devuelve 1
0 / 8        // Devuelve 0
1.6 / 0.2    // Devuelve 8
```

**Nota:** El espacio entre los números no es necesario pero ayuda a visualizar mejor el código y la mayoría de los programadores en JavaScript suelen utilizarlos, por tanto, es bastante recomendable hacerlo de esta manera.

El orden de precendencia de los operadores también es igual que el utilizado en matemáticas. De izquierda a derecha y evaluando los operadores en el siguiente orden:

1. Términos entre paréntesis.
2. Multiplicación y división.
3. Suma y resta.

Los paréntesis en JavaScript, a la hora de aplicarlos a los números, funcionan igual que en matemáticas.

```js
4 + 4 * 4 / 8     // Devuelve 6
(4 + 4) * 4 / 8   // Devuelve 4
(4 + 4) * (4 / 8) // Devuelve 4 también
```

#### Módulo

El operador de resto (`%`), también llamado operador de módulo, es un operador especial utilizado JavaScript para obtener el resto de la división entre dos valores. Si escribimos `5 % 2` en la consola del navegador nos devolverá `1` porque 5 dividido entre 2 devuelve un resto de 1.

```js
0 % 80 // Devuelve 0
13 % 5 // Devuelve 3
9 % 3  // Devuelve 0
```

El operador de módulo tiene el mismo orden de precendencia que los operadores de multiplicación y división.


### String

String traducido al español significa cadena y cómo su nombre indica es el tipo de valor utilizado para representar cadenas de caracterés, que viene a ser básicamente texto. Cualquier tipo de texto, ya sean caracteres sueltos ("a", "b", "0") o en conjunto ("hola", "las 13:40", "2312312") estará incluido dentro de este tipo de valor.

En JavaScript, un número escrito entre comillas es también un string. De esta forma, para averiguar de que tipo es un número simplemente valdrá con ver si el número está envuelto entre comillas y por tanto es un string o si no lo está y por tanto es un número (`number`).

Para representar un string en JavaScript se puede utilizar tanto texto envuelto entre comillas simples (`''`) comoo dobles (`''`). Ambas son totalmente válidas y funcionan de la misma manera salvo que las comillas simples no pueden contener dentro otras comillas simples y las dobles no pueden contener dobles. De esta forma, `'Esto es un 'bug''` da error porque el intérprete de JavaScript entiende que un texto termina antes de `bug` y comienza otro texto despues de `bug`. Pasaría lo mismo si usamos `"Esto es un "bug""`.

Para evitar estos errores debido al uso de comillas anidadas existen dos soluciones:
- Usar comillas simples siempre que el texto contenga comillas dobles o viceversa
- Usar la barra inclinada (`\`) delante de las comillas anidadas. De esta forma decimos a JavaScript que esas comillas no van a ser usadas para marcar el final del string y por tanto no se produce el error.

**Nota:** A la hora de trabajar con distintos tipos de comillas, la opción recomendable es usar un único tipo a lo largo de todo el código de tu programa y usar `\` para "escapar" (convertir a un caracter normal) las comillas anidadas.

Ejemplos de `string`s válidos en JavaScript:

```js
"a"                                   // Devuelve "a"
'b'                                   // Devuelve "b"
"Hola"                                // Devuelve "Hola"
'¿Qué tal?   '                        // Devuelve "¿Qué tal?   " (notesé los espacios)
"%^%&^%Ω"                             // Devuelve "%^%&^%Ω"
"Lorem ipsum dolor"                   // Devuelve "Lorem ipsum dolor"
"123123"                              // Devuelve "123123"
'"Lorem ipsum dolor sit amet..."'     // Devuelve ""Lorem ipsum dolor sit amet...""
"\"Lorem ipsum dolor sit amet...\""   // Devuelve ""Lorem ipsum dolor sit amet...""
'It\'s ok'                            // Devuelve "It's ok"
```

En el caso de los `string`s, la única forma de operar con ellos es usar el operador de concatenación (`+`). Este operador nos permitirá unir – concatenar – dos o más cadenas de caracteres para obtener una nueva. Algunos ejemplos:

```js
"Fecha de conexión: " + "jueves 15"  // Devuelve "Fecha de conexión: jueves 15"
'H' + 'o' + 'l' + 'a'                // Devuelve "Hola"
"Faltan " + "3" + " dias"            // Devuelve "Faltan 3 días"
```

**Nota:** Aunque el símbolo utilizado para concatenar strings (`+`) es el mismo que el utilizado para sumar números, JavaScript es capaz de saber que operación llevar a cabo en función de los datos que le pasemos. Si le pasamos `string`s concatenará los números y si pasamos `number`s los sumará. Más adelante veremos que ocurre si combinamos un número y un string.


### Booleanos

Los booleanos son tipos de datos que solo pueden tener cómo valor verdadero (`true`) o falso (`false`). Cuando pensamos en número y strings rapidamente nos viene a la cabeza usos dentro de un programa. Mostrar texto, sumar cantidades, calcular precios, etc. Sin embargo, en el caso de los booleanos es dificil apreciar que utilidad pueden tener dentro de la programación. La respuesta es simple, sirven para representar condicionales, casos que podrían ser verdaderos o no. Un condicional sería ¿ha iniciado sesión el usuario?. Dicha condición solo puede devolver un valor booleano, es decir, sólo puede ser verdadero o falso, es aquí donde reside la importancia de este tipo de valores.
