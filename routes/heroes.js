const express = require("express");
const router = express.Router();

const heroesController = require("../controllers/heroes");

// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
router.get("/", heroesController.all);

// Ruta /heroes/detalle/id ➝ se envía el nombre y profesión del héroe solicitado
router.get("/detalle/:id", heroesController.profession);

// Ruta /heroes/id/bio/ok ➝ se envía la bio del héroe solicitado
router.get("/:id/bio/:ok?", heroesController.bio);

module.exports = router;
