// Require y ejecución de Express
const express = require("express");
const app = express();

// Require de rutas
const heroesRouter = require("./routes/heroes");
const mainRouter = require("./routes/main");

// Usa el archivo heroes.js para manejar los endpoints que empiezan con /heroes
app.use("/heroes", heroesRouter);
// Usa el archivo main.js para manejar el endpoint principal "/"
app.use("/", mainRouter);

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log("Server running in port 3030"));
