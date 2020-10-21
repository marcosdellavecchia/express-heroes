// Require de Express
const e = require("express");
const express = require("express");

// Require de FS
const fs = require("fs");

// Ejecución de Express
const app = express();

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log("Server running in port 3030"));

// Leyendo y parseando (en array) el contenido de heroes.json
const heroes = JSON.parse(
  fs.readFileSync(__dirname + "/data/heroes.json", "utf-8")
);

// Ruta Raíz / ➝ Home
app.get("/", (req, res) => {
  res.send(
    "Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!."
  );
});

// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
app.get("/heroes", (req, res) => {
  res.send(heroes);
});

// Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado
app.get("/heroes/detalle/:id", (req, res) => {
  let id = req.params.id;
  for (let i = 0; i < heroes.length; i++) {
    if (id == heroes[i].id) {
      return res.send(`
        Hola, mi nombre es ${heroes[i].nombre} y soy ${heroes[i].profesion}.`);
    }
  }
  res.send("No encontramos el heroe que buscas :(");
});

// Ruta /heroes/n/bio ➝ se envía la bio del héroe solicitado
app.get("/heroes/:id/bio/:ok?", (req, res) => {
  let id = req.params.id;
  let ok = req.params.ok;
  for (let i = 0; i < heroes.length; i++) {
    // Si se encuentra al heroe pero el parametro OK no existe como tal (es diferente o no esta)
    if (id == heroes[i].id && (ok != "ok" || !ok)) {
      return res.send(
        `${heroes[i].nombre}: Lamento que no quieras saber nada de mi :(`
      );
    }
    // Si se encuentra al heroe y el parametro OK esta ingresado (por descarte, si avanzo hasta esta instancia es porque req.params.ok == ok)
    else if (id == heroes[i].id) {
      return res.send(`${heroes[i].nombre}: ${heroes[i].resenia}`);
    }
  }
  // Si no se cumplen las condiciones del IF, se devuelve por default el mensaje de error
  res.send("No encontramos un héroe para mostrarte su biografía");
});

// Ruta Créditos
app.get("/creditos", (req, res) => {
  res.send(
    "Codeado por Marcos Della Vecchia <br> - github.com/marcosdellavecchia <br> - linkedin.com/in/marcos-dv <br> - twitter.com/marcosdv"
  );
});

// Ruta 404
app.get("*", (req, res) => {
  res.status(404).send("404 not found. <br> ¡Houston, poseemos problemas!");
});
