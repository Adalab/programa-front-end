## Ejercicio repaso JavaScript: un juego de adivina el número

Vamos a crear un juego de adivinar el número, con la siguiente mecánica:
Se genera un número aleatorio entre 1 y 100
Intentamos adivinarlo y el juego nos da 3 posibles indicaciones: “Demasiado alto”, “Demasiado bajo” o “Lo has acertado”

Para desarrollar el juego, vamos a hacerlo en 3 partes.

### Parte 1. HTML

Crearemos un HTML para poder jugar al juego. Para ello, usaremos los siguientes componentes:
- Un título para el juego
- Un `input` de tipo texto para que el jugador ponga el número que quiere probar
- Un botón “Probar” para que el juego inicie la comprobación de si el jugador ha acertado
- Un espacio de texto (párrafo) para las indicaciones que da el juego: “Demasiado alto”, “Demasiado bajo” o “Lo has acertado”

### Parte 2. Generar el número aleatorio y lógica del juego

En nuestro fichero JavaScript (que incrustaremos en el HTML al final del `body` para asegurarnos que todos los elementos de la página se han cargado) generaremos un número aleatorio y lo guardaremos en una variable `numeroAAdivinar`.

También crearemos una función `comparaNumeros` que toma como parámetro dos números: uno será el número aleatorio generado, y el otro el número que envía el usuario. La función deberá generar el mensaje de feedback correspondiente : “Demasiado alto”, “Demasiado bajo” o “Lo has acertado”. Esta función tiene que probarse desde JavaScript (con `console.log`) o desde la consola JS (aún no está enlazada con la interfaz del punto 1).

### Parte 3. Integración con el DOM

La última parte consiste en integrar la lógica JavaScript desarrollada en la parte 2 con la interfaz de la parte 1. Para ello tenemos que llevar a cabo las siguientes acciones:
Cuando el usuario pulsa el botón, llamaremos una nueva función usuarioPruebaNumero. Esta función
Toma el valor que el usuario ha introducido en el input (accedemos al DOM como siempre, y luego sacamos su propiedad `value`)
Invoca a la función `comparaNumeros` con el número que hemos leído del input con el número aleatorio, produciendo un mensaje de feedback
Pinta el mensaje de feedback generado sobre el espacio correspondiente en pantalla

Si tenéis alguna duda sobre el enunciado preguntadme. Si tenéis algún problema al desarrollarlo, preguntadme. Estoy en slack bastante a menudo ;)
