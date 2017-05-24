# 3.2.2 - Asincronía en JavaScript

## Kahoot

[Kahoot de esta sesión]()

### Qué hemos visto hasta ahora

- Por hacer un repaso de lo importante de ayer:
  - This es una palabra clave que representa un objeto. Dependiendo del contexto ese objeto será:
    - Si se usa `obj.método` y dentro del método se utiliza un `this`, hará referencia a `obj`
    - Si se utiliza en una función precedida de `new`, el `this` en la función será el nuevo objeto construido que genera esa función
    - Si se utiliza `call`, `apply` o `bind`, el objeto será el que pasemos como argumento
    - En el resto de casos, this hará referencia a `window`. Si ponemos `"strict mode"`, `this` hará referencia a `undefined`

- Las funciones constructoras nos permiten crear objetos (instancias) a partir de un prototipo.
  - Utilizaremos `nombreFuncionConstructora.prototype.metodo` para crear propiedades comunes a todas las instancias creadas con dicha función constructora
- Las funciones constructoras solo funcionan como tal si ponemos la palabra clave `new` delante. Si no ponemos el `new` funcionarán como funciones normales y por defecto devolverán `undefined` en vez del nuevo objeto construido.

### Explicación del contenido de la sesión

- Repaso conceptos this, funciones constructoras y prototipos

### Ejercicios y contenido para el siguiente día

- [Ejercicio modal creado a partir de objetos de JavaScript](https://docs.google.com/document/d/1sHz9BynD9HvtILzTF3ASkOrt4JUNnE0YPgh10k5I-3s/edit#heading=h.jwlhjqodikk)
