// Require de Express
const express = require("express");

// Ejecución de Express
const app = express();

// Require de rutas
const routeHeroes = require("./routes/heroes");
const routeMain = require("./routes/main");

// Usa el archivo heroes.js para manejar los endpoints que empiezan con /heroes
app.use("/heroes", routeHeroes);
// Usa el archivo main.js para manejar el endpoint principal "/"
app.use("/", routeMain);

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log("Server running in port 3030"));

// Ruta Créditos
app.get("/creditos", (req, res) => {
  res.send(
    "Coded by Marcos DV <br> - github.com/marcosdellavecchia <br> - linkedin.com/in/marcos-dv <br> - twitter.com/marcosdv"
  );
});

// Ruta 404
app.get("*", (req, res) => {
  res.status(404).send("404 not found. <br> ¡Houston, poseemos problemas!");
});
