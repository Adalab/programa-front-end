## Ejercicios de repaso de JavaScript

### Ejercicio 1. Matemáticas en JavaScript

Imaginaos que no existe el recurso `Math` en javascript para realizar operaciones en JavaScript y tenemos que hacer funciones para obtener los mismos resultados. Para ello tenemos que crear las siguientes funciones:

- `sumar(numero1, numero2)`: A esta función le pasaremos dos numeros y devolverá el resultado de la suma de estos
- `multiplicar(numero1, numero2)`: Esta función le pasaremos dos números, multiplicará ambos y devolverá el resultado de la multiplicación
- `max(numero1, numero2)`: A esta función le pasaremos dos números y devolverá el que sea mayor

Al final utilizaremos tres `console.log` por cada función con distintos números para ver si el resultado que devuelven es correcto y, por tanto, la función está bien escrita

Importante: Acordaos de que las funciones por defecto devuelven `undefined`  a no ser que usemos un `return` seguido del valor que deseamos devolver

### Ejercicio 2. Reloj con JavaScript

En JavaScript podemos hacer que cada x tiempo se ejecute una función. Esto nos permite hacer cosas como comprobar cada cierto tiempo que algo funciona, cambiar el tiempo restante en la puja de una subasta, crear un reloj o un maravilloso cronómetro.

Para poder realizar una función cada cierto tiempo tenemos que usar `window.setInterval(nombreDeLaFuncion, tiempoEnMilisegundos`).

En este caso crearemos un cronómetro usando esta posibilidad. Dicho cronómetro tendrá segundos, minutos y horas e irá aumentando de segundo en segundo. Para hacer un cronómetro la clave está en pensar que un minuto son 60 segundos y una hora son 60 minutos (3600 segundos). Por tanto cada segundo aumentaremos nuestra cuenta y haremos comprobaciones para ver cuantas horas, minutos y segundos han pasado. Una forma de comprobarlo es dividir la cuenta total entre 3600, calcular el resultado de la división y calcular el resto con %. El resultado será el número total de horas que habrán transcurrido y el resto será el número de segundos que queden y que no sean suficientes para llegar a sumar una hora en total. Por lo tanto del resto podremos sacar minutos y segundos.

En este caso utilizaremos la propiedad [`innerHTML`](https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML) del elemento para mostrar en la pantalla, mediante HTML, el resultado de nuestro cronómetro en cada momento (horas, minutos y segundos) y lo actualizaremos de segundo en segundo.

Una vez nuestro cronómetro funcione podremos poner un botón para pausar, detener y reanudar la cuenta. Para ello crearemos el botón para cada acción y le asignaremos una función que se ejecute al hacer click. Tendremos que ver cómo lo hacemos para que deje de contar, se reanude o se ponga la cuenta en 0.

Importante: Procurad pensar primero en los pasos antes de empezar a escribir el código
