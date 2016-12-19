## Un juego de Blackjack - parte 1

Este proyecto consiste en realizar un juego utilizando tecnologías web HTML, CSS y JavaScript. El juego elegido es un Blackjack. Para conocer sus normas, buscad el término en Wikipedia.

En primer lugar crearemos una maqueta HTML y CSS que represente el tablero, con un espacio para el mazo de cartas, otro para las cartas de una jugada y para la puntuación del jugador. Además, habrá botones para iniciar un nuevo juego, para pedir carta y para plantarse. Tendremos otro espacio para enviar al jugador mensajes, por ejemplo, si ha perdido o ha ganado la partida.

Con esto, desarrollaremos la lógica del juego en JavaScript. Vamos a empezar con algunas partes básicas:
1. Modelaremos las cartas como diccionarios (objetos) con un palo y un valor. Jugaremos con una baraja de cartas, es decir, un array con todas las cartas de la baraja.
2. Crearemos una baraja completa para jugar, en un array baraja
3. Dada una mano de cartas (un array de cartas, por ejemplo, de 5 cartas) calcularemos la puntuación de la mano como la suma de los valores de esas cartas
4. Si el jugador se ha pasado de 21, habrá perdido, y mostraremos este mensaje por la pantalla y la puntuación.
5. La partida se iniciará al cargarse la página. Se irán tomando cartas aleatorias de la baraja (no hace falta comprobar que sean repetidas) y acumulando en una mano (otro array). Cuando decidamos terminar (por ejemplo, siempre tras coger 5 cartas), nuestro programa calcula la puntuación y si el jugador ha ganado. Muestra la puntuación y si ha ganado o perdido en pantalla.
