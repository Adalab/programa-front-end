# Guía de referencia de formularios

## Índice

- [Introducción](#introducción)
- [Etiquetas](#etiquetas)
  - [Formulario](#formulario)
  - [Campos](#campos)
    - [Texto](#texto)
    - [Correo electrónico](#email)
    - [Password](#password)
    - [Área de texto](#área_de_texto)
    - [Número](#numero)
    - [Teléfono](#teléfono)
    - [Fecha y hora](#fecha_y_hora)
    - [URL](#url)
    - [Búsqueda](#search)
  - [Etiquetas](#etiquetas)
    - [Label](#label)
    - [Legend](#legend)
  - [Opciones](#opciones)
    - [Checkbox](#checkbox)
    - [Radio](#radio)
    - [Select](#select)
    - [Datalist](#datalist)
  - [Botones](#botones)
    - [Button](#button)
    - [Submit](#submit)
    - [Reset](#reset)
  - [Otros](#otros)
    - [Archivos](#archivos)
    - [Campos ocultuos](#campos-ocultos)
    - [Imágenes](#imágenes)
    - [Color](#color)
    - [Range](#range)
  - [Grupos](#grupos)
    - [Fieldset](#fieldset)
    - [Legend](#legend)
- [Atributos](#atributos)
  - [Inputs](#inputs)
- [Más información](#más-información)

## Introducción

Los formularios son las estructuras utilizadas en la web para obtener información por parte de un usuario. Los primeros años de la web, estos formularios sólo permitian introducir algunos campos de texto y poco más, todo ello de forma trivial.

Hoy en día podemos enviar archivos como datos de un formulario, seleccionar colores o, incluso, validar los formularios antes de enviarlos.

## Etiquetas

### Formulario

Para crear un formulario en HTML, utilizaremos la etiqueta `form`. Esta etiqueta tiene dos atributos específicos:

- `action`: la ruta de un programa que será el encargado de procesar la información que recopilada en el formulario. Normalmente suele ser una ruta a un archivo de un servidor.
- `method`: sirve para especificar la manera en la que se transmitirán los datos de nuestro formulario. Los valores posibles para este atributo son `post` y `get`. Como norma general utilizaremos la el valor `post` para enviar datos sensibles (contraseñas, dni, cuentas bancarias, número de tarjeta, etc) y `get` para el resto de casos.

```html
<!-- Usamos la acción /login porque queremos comprobar el formulario con el código para comprobar un inicio de sesión-->
<!-- Usamos la el método 'post' porque al ser datos de inicio de sesión (password, mail, etc) se considera información sensible -->
<form action="/login" method="post">
  <!-- Aquí irían los campos de nuestro formulario (inputs, botones, áreas de texto, etc.)-->
</form>
```

**Nota: Es importante tener en cuenta que, a partir de la versión 4.01 de HTML, es totalmente válido crear elementos de formulario fuera de una etiqueta `form`**

### Campos

Definimos como campos los tipos de datos en los que el usuario tiene que introducir una información mediante la introducción o modificación de texto. Este término no es una convención, es decir, no todo el mundo clasifica los elementos que mostraremos a continuación dentro de este campo. En nuestro caso nos servirá para poder agruparlos según el criterio anterior.

#### Texto

Para introducir un campo de texto, utilizaremos la etiqueta HTML de `input` con el atributo `type="text"`.

Ejemplo de uso:

```html
<input type="text" name="username"/>
```

#### Correo electrónico

Para introducir un campo de texto, utilizaremos la etiqueta HTML de `input` con el atributo `type="email"`.

La diferencia de esta etiqueta frente a una con el atributo `type="text"` es que en, este caso, si tenemos activada la validación de nuestro formulario, este dará un error si el campo donde tenemos el `type="email"` not contiene el símbolo de arroba (`@`).

Otro de los beneficios de usar `email` frente a `text` es que, si abrimos la página del formulario desde un móvil, el móvil detectará que ese campo sirve para introducir un email y modificará el tipo de teclado añadiendo teclas específicas.

Ejemplo de uso:

```html
<input type="email" name="emailaccount"/>
```

#### Password

Para introducir un campo de texto, utilizaremos la etiqueta HTML de `input` con el atributo `type="password"`.

La diferencia principal de esta etiqueta frente a una con el atributo `type="text"` es que en, este caso, el contenido del campo se verá sustituido por asteriscos para aumentar la seguridad y prevenir que el valor se muestre como tal en la pantalla.

Otras diferencias con la etiqueta `type="text"` es que el contenido en los campos tipo `password` se borra si se recarga la página, mientras que en un campo de texto normal el contenido se mantiene tras la recarga.

Usar `type="password"` también permitirá saber a los dispositivos y navegadores que es una contraseña y de esta forma realizar acciones del estilo preguntar si deseas guardar la contraseña o ofrecer la posibilidad de autocompletar ese campo.

Ejemplo de uso:

```html
<input type="password" name="userpassword"/>
```

#### Área de texto

Para crear un área de texto utilizaremos la etiqueta `textarea`. Esta etiqueta tiene dos atributos específicos:

- `rows`: Nos permitirá definir el número de filas (altura) que tendrá por defecto la etiqueta.
- `columns`: Nos permitirá definir el número de columnas (anchura) que tendrá por defecto la etiqueta.

Ejemplo de uso:

```html
<textarea name="comments" rows="8" cols="80"></textarea>
```

#### Número

Para introducir un campo para un número, utilizaremos la etiqueta HTML de `input` con el atributo `type="number"`. Esta etiqueta sirve para campos en los que sólo queramos que se introduzcan números (códigos postales, cantidad de productos, números de domicilio, etc).

Ejemplo de uso:

```html
<input type="number" name="age"/>
```

#### Teléfono

Para introducir un campo para un teléfono, utilizaremos la etiqueta HTML de `input` con el atributo `type="tel"`.

Uno de los beneficios de usar `tel` frente a `text` es que, si abrimos la página del formulario desde un móvil, el móvil detectará que ese campo sirve para introducir un teléfono y mostrará un teclado numérico en vez del teclado por defecto.

Algunos navegadores actuales validarán esta etiqueta comprobando si el texto introducido cumple una serie de características comunes a todos los números de teléfono globales.

Ejemplo de uso:

```html
<input type="tel" name="mobilephone"/>
```

#### Fecha y hora

HTML presenta una gran cantidad de alternativas para introducir información relacionada con una fecha o una hora

##### Fecha

```html
<input type="date" name="birthdate">
```

##### Fecha local

```html
<input type="datetime-local" name="meetinghour">
```

##### Semana

```html
<input type="week" name="yearweek">
```

#### URL

Para introducir un campo para que el usuario introduzca la dirección de una página web (URL), utilizaremos la etiqueta HTML de `input` con el atributo `type="url"`.

Uno de los beneficios de usar `url` frente a `text` es que, si abrimos la página del formulario desde un móvil, el móvil detectará que ese campo sirve para introducir la dirección de una web y mostrará un teclado adaptado en vez del teclado por defecto.

Algunos navegadores actuales validarán esta etiqueta comprobando si el texto introducido es una URL válida.

Ejemplo de uso:

```html
<input type="url" name="twitterurl"/>
```

#### Búsqueda

Para crear una etiqueta en la que los usuarios introducirán campos de búsqueda, utilizaremos la etiqueta HTML de `input` con el atributo `type="search"`.

A día de hoy este tipo de etiqueta funciona exactamente igual que un input tipo `text`, pero probablemente en el futuro se introduzcan mejoras en los navegadores o atributos específicios para esta etiqueta que expandan sus ventajas.

La regla para elegir entre usar `type="text"` o `type="search"` es pensar para qué se utilizará el campo. Si es para introducir conceptos relacionados con una búsqueda (como por ejemplo en un foro), utilizaremos la segunda opción. Para el resto de campos utilizaremos el tipo `text`.

Ejemplo de uso:

```html
<input type="text" name="username"/>
```

### Etiquetas

Las etiquetas `label` sirven para describir la información que queremos que el usuario escriba en un determinado campo. Por ejemplo, si tenemos un campo para un teléfono, introduciremos una etiqueta `label` que acompañará al `input` para el teléfono y que tendrá como contenido un mensaje del estilo _"Introduce tu teléfono móvil"_.

Las etiquetas `label` van acompañadas de un atributo `for` donde introduciremos cómo valor el nombre del id del campo al que queremos asociar dicha etiqueta.

Ejemplo de uso:

```html
<label for="postal-code">Código postal:</label>
<input id="postal-code" type="text" name="postalcode" value="">
```

### Opciones

En la actualidad, disponemos de múltiples formas de introducir información mediante opciones. A diferencia de los campos, las etiquetas de opciones nos permitirán elegir entre ninguna, una o más opciones y según el caracter de los datos que queremos obtener usaremos un tipo determinado u otro.

#### Checkbox

Los checkbox nos permiten elegir entre una serie de opciones que no son mutuamente excluyentes, es decir, que podemos perfectamente seleccionar más de una.

```html
<h3>Suplementos del vuelo:</h3>

<label for="flightoption1">Selección de asiento</label>
<input id="flightoption1" type="checkbox" value="chooseseat" name="flightoptions" />
<label for="flightoption2">Seguro</label>
<input id="flightoption2" type="checkbox" value="assurance" name="flightoptions" />
<label for="flightoption3">Coche de alquiler</label>
<input id="flightoption3" type="checkbox" value="rentcar" name="flightoptions" />
```

#### Radio

Los input del tipo `radio` nos permiten crear selecciones que se excluyan entre sí. Un ejemplo muy claro es cuando seleccionamos el tipo de pago, seleccionamos uno de una lista de posibles tipos de pagos y, como no tiene sentido, no nos dejará seleccionar más que uno.

```html
<h3>Método de pago:</h3>

<label for="paymentmethod1">Tarjeta de débito</label>
<input id="paymentmethod1" type="radio" value="debitcard" name="paymentmethods" />
<label for="paymentmethod2">Tarjeta de crédito</label>
<input id="paymentmethod2" type="radio" value="creditcard" name="paymentmethods" />
<label for="paymentmethod3">Paypal</label>
<input id="paymentmethod3" type="radio" value="paypal" name="paymentmethods" />
```

#### Select

Las etiquetas `select` nos permiten crear selecciones que se excluyan entre sí y que permitan elegir entre un número de opciones considerable.

Un ejemplo muy claro es el caso de la selección de una talla para zapatos. En ese caso concreto podríamos utilizar también un `input` del tipo `radio`, el problema es que en el rango de tallas de zapatos puede haber perfectamente más de 10 tallas y mostrar 10 elementos del tipo radio ocuparía mucho espacio de la página. Debido a esto utilizaremos para ese tipo de casos el `select` ya que abre un desplegable y ocupa mucho menos espacio que el input `radio` aparte de que permite navegar mejor entre los valores porque, por ejemplo, puedes introducir un número y te lleva a la primera ocurrencia.

```html
<label for="size">Talla de zapato:</label>
<select id="size" name="size">
  <option>36</option>
  <option>37</option>
  <option>38</option>
  <option>39</option>
  <option>40</option>
  <option>41</option>
  <option>42</option>
  <option>43</option>
  <option>44</option>
  <!-- ... continuación de la serie -->
</select>
```

#### Datalist

```html
<label for="provinces-input">Provincia:</label>
<input id="provinces-input" list="provinces" name="datalist">
<datalist id="provinces">
    <option>Álava</option>
    <option>Albacete</option>
    <option>Alicante</option>
    <option>Almería</option>
    <option>Asturias</option>
    <!-- más provicias ... -->
</datalist>
```

### Botones
#### Button

```html
<input type="button" value="Generar contraseña aleatoria">
```

**Nota: En el caso de los botones es una mala práctica añadir el atributo `name` porque el valor del botón no se enviará con el formulario y por tanto ese atributo no servirá de nada.**

#### Submit

```html
<input type="submit" value="Enviar formulario">
```

#### Reset

```html
<input type="reset" value="Restaurar valores por defecto">
```

#### Imágenes

```html
<input type="image" src="images/send-button.png" alt="Enviar formulario">
```

### Otros

#### Archivos

```html
<input type="file" name="file" />
```

#### Campos ocultos

```html
<input type="hidden" name="productid" value="xm234jq">
```

#### Color

```html
<input type="color" name="backgroundcolor">
```

#### Range

```html
<input type="range" min="-10" max="10" step="1" name="temperature">
```

### Grupos

A veces los formularios poseen gran cantidad de campos a rellenar y es dificil seguir la pista de cuales van a ser esos datos o dónde estará colocado cada uno. Cómo solución a este problema, HTML nos brinda las etiquetas `fieldset` y `legend` que nos permitirán agrupar elementos de un formulario tal y como deseemos.

#### Fieldset

Utilizaremos esta etiqueta para crear secciones dentro de nuestro nos permite dar nombre a las distintas secciones de un formulario.

```html
<fieldset>
    <!-- Suele acompañar siempre a fieldset para definir el nombre de la sección -->
    <legend>Datos personales: </legend>

    <input type="text" name="name" value="">
    <input type="text" name="surnames" value="">
    <input type="tel" name="phone" value="">
    <input type="number" name="postalcode" value="">
</fieldset>
```

#### Legend

Esta etiqueta nos permite asignar el nombre de una sección de nuestro formulario creada con `fieldset`. Se colocará siempre dentro de una etiqueta de este tipo será la que defina el nombre o el tipo de contenido que se agrupa.

Como convención, la etiqueta `legend` se suele colocar la primera dentro del contenido del `fieldset`.

```html
<fieldset>
    <legend>Datos personales: </legend>

    <input type="text" name="name" value="">
    <input type="text" name="surnames" value="">
    <input type="tel" name="phone" value="">
    <input type="number" name="postalcode" value="">
</fieldset>
```

## Atributos

### Inputs

#### Name

Este atributo nos permitirá definir la clave a la que se asignará el valor que se introduzca en el campo. De esta forma, cuando analicemos los datos del formulario, sabremos que podemos obtener la información de este campo buscando por el valor asignado en `name`. Ejemplo: Si tenemos un campo para el nombre con el atributo `name="surnames"`, cuando enviemos la información del formulario al servidor, este tendrá una clave `surnames` a la que irá asociada los apellidos que haya introducido el usuario.

Ejemplo de uso:

```html
<label for="surnames">Apellidos:</label>
<input id="surnames" type="text" name="surnames" value="">

<!--
  Cuando enviemos el formulario, el servidor recibirá una información con una
  clave "apellidos" que tendrá asociada los apellidos que haya introducido el usuario
-->

```

#### Value

El atributo value sirve para definir el valor inicial de un campo, su contenido. De esta forma, si creamos un input de texto con un atributo `value="Calle Méndez Álvaro"`, por defecto dentro del campo se verá escrito _"Calle Méndez Álvaro"_.

Este valor es opcional excepto cuando el atributo `type` de la etiqueta es `radio` o `checkbox`.

Ejemplo de uso:

```html
<label for="address">Dirección:</label>
<input id="address" type="text" name="apellidos" value="Calle Méndez Álvaro">

<!--
  Aparece el campo relleno con "Calle Méndez Álvaro" por defecto
-->

<!-- En el caso de los checkbox y los radio siempre ponemos el valor -->

<label for="terms">Acepto los términos y condiciones de la página</label>
<input id="male" type="checkbox" name="terms" value="accept" />

<label for="male">Hombre</label>
<input id="male" type="radio" value="male" name="gender" />
<label for="female">Mujer</label>
<input id="female" type="radio" value="female" name="gender" />
```

## Más información

- [Guía de formularios de MDN](https://developer.mozilla.org/es/docs/Learn/HTML/Forms)
- [Guía de formularios de MDN (inglés y más completa)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms)
