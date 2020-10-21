const express = require("express");

let router = express.Router();

// Leyendo y parseando (en array) el contenido de heroes.json
const fs = require("fs");
const heroes = JSON.parse(
  fs.readFileSync(+__dirname + "/../data/heroes.json", "utf-8")
);

// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
router.get("/", (req, res) => {
  res.send(heroes);
});

// Ruta /heroes/detalle/id ➝ se envía el nombre y profesión del héroe solicitado
router.get("/detalle/:id", (req, res) => {
  let id = req.params.id;
  for (let i = 0; i < heroes.length; i++) {
    if (id == heroes[i].id) {
      return res.send(`
          Hola, mi nombre es ${heroes[i].nombre} y soy ${heroes[i].profesion}.`);
    }
  }
  res.send("No encontramos el heroe que buscas :(");
});

// Ruta /heroes/id/bio/ok ➝ se envía la bio del héroe solicitado
router.get("/:id/bio/:ok?", (req, res) => {
  let id = req.params.id;
  let ok = req.params.ok;
  for (let i = 0; i < heroes.length; i++) {
    // Si encuentra al heroe pero el parametro OK no existe como tal (es diferente o no esta)
    if (id == heroes[i].id && (ok != "ok" || !ok)) {
      return res.send(
        `${heroes[i].nombre}: Lamento que no quieras saber nada de mi :(`
      );
    }
    // Si encuentra al heroe y el parametro OK esta ingresado (por descarte, si avanzo hasta esta instancia es porque req.params.ok == 'ok')
    else if (id == heroes[i].id) {
      return res.send(`${heroes[i].nombre}: ${heroes[i].resenia}`);
    }
  }
  // Si no se cumplen las condiciones del IF, se devuelve por default el mensaje de error
  res.send("No encontramos un héroe para mostrarte su biografía");
});

module.exports = router;
