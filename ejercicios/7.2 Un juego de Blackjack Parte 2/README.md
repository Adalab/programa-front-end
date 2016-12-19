## Un juego de Blackjack - parte 2

Vamos a continuar el proyecto del Blackjack con la segunda parte. Ya contamos un una maqueta para el juego, y código JavaScript que nos permite: crear una baraja, puntuar una mano, coger una carta aleatoria, y mostrar la puntuación en pantalla.

Para mostrar las imágenes de las cartas, usaremos las imágenes de este zip (de momento sólo están corazones y picas). Para cambiar la carta a mostrar, cambiaremos el atributo `src` del elemento `img` en el HTML desde JavaScript.

Vamos a indicar las posibles interacciones del usuario en nuestro juego:
- Cuando entra en el juego o pulsa el botón de nueva partida, no se muestra ninguna carta, y la puntuación es 0
- Durante una partida, el jugador puede clickar el botón de “Pedir carta”, y se tomará una carta al azar de la baraja. El valor de la nueva carta hará que se actualice la puntuación del jugador. Si el jugador se pasa de 21, aparece un mensaje para indicarlo y la partida se termina (dando a nueva partida se puede iniciar una nueva).
- El jugador puede clickar el botón de Plantarse, y le mostraremos un mensaje dependiendo de los cerca que esté del 21. Por ejemplo, si se planta en un número menor que 10, le decimos “¡Te has plantado pronto!” o si se planta con 21 “¡Lo has hecho perfecto!”.
- Después de plantarse, se podrá iniciar una nueva partida con el botón correspondiente.

Para el futuro podréis realizar mejoras, en la interfaz y el juego en general, que se os ocurran: partidas de varios jugadores, animaciones CSS al sacar cartas, etc.
