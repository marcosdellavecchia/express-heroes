const express = require("express");
const router = express.Router();
const mainController = require("../controllers/main");

// Ruta Raíz / ➝ Home
router.get("/", mainController.home);

// Ruta Créditos
router.get("/creditos", mainController.credits);

// Ruta 404
router.get("*", mainController.notFound);

module.exports = router;
