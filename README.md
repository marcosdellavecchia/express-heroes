# Desarrollo Web Full Stack Node

## Ejercitación - M03C06 - Digital Heroes

### Introducción

Hasta el momento, nuestros "inversores" han quedado maravillados con tu trabajo. Pues se han dado cuenta que has podido llegar a destino tal como se espera. Y si bien son concientes que te ha costado un poco, saben que el viejo dicho "la práctica te da sabiduría" se ajusta como anillo al dedo en este escenario. Es por ello que ahora ponen en tu camino otro pequeño desafío del cual están más que seguros que vas a cumplir.

En esta oportunidad quieren hacer un sencillo sitio usando la tecnología de Express.

Este sitio busca mostrar de manera sencilla la información de las Heroínas y los Héroes Tecnológicos más representativos del ámbito programacional.

Así que sin más preámbulos te dejamos aquí las consignas de este desarrollo.

### Requisitos

Buscar una dupla: para poder iniciar con este desarrollo te solicitamos trabajar en la modalidad PAIR PROGRAMMING, pues estamos convencidos que cada quien puede aprender infinidades de su coequipera/o. Adicionalmente te sugerimos trabajar con alguien nuevo con quien no hayas compartido mucho. Siempre es un buen momento para conocer gente. Así que adelante, levántate de tu silla y busca una nueva amiga o un nuevo amigo.
Leer TODO antes de codear: una vez hayas encontrado tu dupla. Les sugerimos que lean en conjunto las consignas (hasta la página 5). Pues si bien entendemos la "ansiedad" por comenzar, está bueno saber que tienen que hacer y así poder dividir tareas.

### Objetivo

Para la construcción de este pequeño sitio web se espera contar con la posibilidad de acceso a las siguientes URL's:

```
/
/heroes
/heroes/detalle/id  - (id = número, obligatorio)
/heroes/bio/id/ok - (id = número, obligatorio / ok = string, optativo)
/creditos
```

¡Atención! Las anteriores deberán ser direcciones de acceso a la aplicación desde el navegador.

### Consignas

A continuación se detalla lo que deberá mostrar cada ruta.

#### Home (/)

Deberá mostrar un texto de bienvenida al sitio. El texto será: Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!.

#### Héroes (/heroes)

Deberá mostrar todo el contenido del archivo heroes.json. En el navegador se deberá ver algo así:

<img src="https://lh6.googleusercontent.com/MePXLr0Z0Gpft5EXFxR8PWXoXDFGzL0xvMj4MQYiQzFx6e91_yW7wr30UsNhuw3Oj0Av1R78jILlZB7hBYrEF0h6c2g3_-8YOV-cRSR0rfpf1T-depOno-Sh_mC-AxOBRoBpfXM">

#### Héroes - Detalle (/heroes/detalle/id)

Deberá mostrar un texto que diga: "Hola, mi nombre es NOMBRE y soy PROFESION". En donde el NOMBRE y PROFESION deberán ser reemplazados por al información real. Ejemplo: /heroes/2 mostrará la información de la Heroina o del Héroe con id 2 . Controlar el escenario en donde se pase un número n que no haga match con el id de un héroe.

#### Héroes - Detalle con bio (/heroes/bio/id/ok)

Aquí se desea mostrar la información así:

Si no se encontró el héroe con ese id. El texto será: "No encontramos un héroe para mostrarte su biografía". Esto, indistintamente si se envió o no el parámetro "ok".
Si se encontró el héroe con ese id y NO vino exactamente la palabra ok o simplemente NO vino nada en la ruta. Mostrar el nombre del héroe y un texto adicional que diga: "Lamento que no desees saber más de mi :(".
Si se encontró el héroe con ese id y vino exactamente la palabra ok. Mostrar el nombre del héroe y su reseña.

#### Créditos (/creditos)

Mostrar los créditos de ustedes como equipo y cualquier texto adicional que deseen mostrar.

Para lograr lo anterior y en búsqueda de que el proceso de desarrollo llegue en tiempo y forma al final de la clase. Les dejamos estos archivos que les servirán como punto de partida para lograr el objetivo.

Dentro del archivo app.js, encontrarán algunos espacios en blanco que ustedes deberán completar para que la aplicación funcione a la perfección.

### Refactorizando su código

Toda persona que se estime buena para la programación siempre va por más. Es por ello que en este punto y ya teniendo TODO lo anterior hecho y funcionando a la perfección. Les sugerimos darle una "vueltita de rosca" a lo hecho y refactorizar su aplicación para que la misma tenga:

un sistema de ruteo modularizado
un sistema de controladores que administren las peticiones del cliente
Para ello, la estructura de directorios que recomendamos seguir será la siguiente:

├── data

│ └── heroes.json

├── controllers

│ ├── heroesController.js

│ └── mainController.js

├── routes

│ ├── heroes.js

│ └── main.js

├── app.js

└── package.json

#### Tips

Refactorear no es borrar: quizás estén tentadas/os a tomar lo que ya hicieron y comenzar a modularizar... ¡Pero!, quizás no sea lo mejor. Es por ello que nuestra sugerencia es crear otro folder y hacer en la refactorización de la aplicación allí. De esa manera podrán comparar las dos versiones y sacar sus propias conclusiones acerca de cuál les parece la mejor opción 🤓✨.

### Refactorizando código nivel DIOS (para el hogar)

Si llegaste hasta aquí, es porque seguramente te ha encantado todo este maravilloso mundo de JavaScript, Node y Express. Es por ello que ahora te pedimos que generés la aplicación con express-generator y veas cuales son las ventajas de usar dicho generador.

Seguramente al terminar, te darás cuenta que al hacerlo con este generador vas a encontrar similitudes entre tu refactorización y lo hecho con express-generator.
