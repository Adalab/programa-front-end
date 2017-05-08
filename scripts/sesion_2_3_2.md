# Sesión 2.3.2 de mañana

### Tips sobre ejercicios corregidos

- Errores comunes en los ejercicios de JavaScript
  - Explicar que el form envía la información cuando se utiliza dentro de él
  - Ejercicios por separado
  - Probar siempre nuestro código (con distintos datos)
  - Poner siempre `var` delante de la variable de los `for`
  - Las variables que se vayan a usar sólo dentro de una función las metemos dentro de ella y tenemos cuidado con las que modifiquemos que sean de fuera
  - Separar código en HTML, CSS y JavaScript
  - No usar `console.log` dentro de un código o una función a no ser que lo pida el ejercicio y sea estrictamente necesario
  - Usar comentarios multilínea si van a ser varias lineas
  - Escribir el código en inglés siempre
  - Tener cuidado con los bucles infinitos. Comprobar que la condición se cumple.
  - Reemplazar las condiciones por variables para que se pueda leer mejor el código
  - Usar nombres descriptivos para poder leer mejor nuestro código y evitar fallos
  - No meter en variables el tipo de valor dentro del nombre (`nameString` o `numbersArray`)
  - Combinar condiciones para las estructuras de control de flujo o usar `if...else if` en vez de `if`s anidados
- Consejos sobre el repositorio
  - El código que metáis en vuestro repositorio es de cara a empresas interesadas.
  - Poner un nombre descriptivo al repositorio
  - Poner una descripción al repositorio
  - Si podemos, escribir en el README información más detallada
  - Procurar no usar acentos en Git para evitar nombres raros. Por ejemplo `mañana_día.md` aparece cómo `ma\303\261ana_d\303\255a.md` en la Terminal

### Teoría: repaso de hoisting, scope y closures.

- HOISTING
  - Cómo JavaScript ordena nuestro código antes de ejecutarlo.
  - Coloca el código con el siguiente orden (de primero a último):
    - 1. Declaración de variables y funciones
    - 2. Ejecución del código en el orden que está creado, salvo en excepciones.
- SCOPE
  - El scope determina el alcance de nuestras variables y funciones, es decir, desde qué parte de nuestro código podremos usarlas y desde cual no.
- CLOSURE
  - El closure es el contexto que se genera para una función determinada
