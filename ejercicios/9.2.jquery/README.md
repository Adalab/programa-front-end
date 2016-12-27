## Conociendo jQuery

Hasta ahora todas las manipulaciones del DOM (Document Object Model) con JavaScript las estábamos haciendo a mano. Por ejemplo:
- para acceder a un nodo del DOM usamos `document.querySelector`
- para escuchar eventos usamos `addEventListener`
- para cambiar de estilo un elemento del DOM usamos `style` o `classList`
- para insertar nuevo contenido en el HTML usamos la propiedad `innerHTML`

Si estas manipulaciones del DOM se hacen muy a menudo, podemos hacer el uso de alguna librería como *jQuery* para que nos facilite estas acciones. Vamos a ver cómo nos facilita las acciones anteriores:
- para acceder a un elemento del DOM con `$("CSS selector")`
- para escuchar eventos `.on(event, handler)`
- para cambiar un estilo `.css(styles)`
- para insertar contenido en el DOM `.html(newHTML)`

Además, todos estas acciones pueden encadenarse. Por ejemplo ([mira aquí el ejemplo completo][1]):
```javascript
$("#numeroAleatorio").html(5).css({color: red;}).on("click", generaNumeroAleatorio)
```
Para seguir aprendiendo, tenemos una guía en español donde nos explica cómo:
- [acceder a elementos del DOM][2]
- [plicar estilos sobre elementos][3]
- [trabajar con atributos][4]
- [manipular elementos: añadir, mover, borrar, etc.][5]
- [controlar eventos que suceden en el DOM][6]

Os propongo realizar un ejercicio complejo para probar todo esto, como el que ya hemos hecho varias veces de [Adivinar un número][7]. ¡Adelante!

[1]: index.html
[2]: http://librojquery.com/#selección-de-elementos
[3]: http://librojquery.com/#css-estilos-dimensiones
[4]: http://librojquery.com/#atributos
[5]: http://librojquery.com/#manipulación-de-elementos
[6]: http://librojquery.com/#vincular-eventos-a-elementos
[7]: https://github.com/Adalab/programa-front-end/tree/master/ejercicios/7.5%20Un%20juego%20de%20adivina%20el%20n%C3%BAmero
