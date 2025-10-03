const express = require("express");
const Juego = require("../models/Juego");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const juegos = await Juego.find();
    res.json(juegos);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener los juegos" });
  }
});

router.post("/", async (req, res) => {
  try {
    const nuevoJuego = new Juego(req.body);
    const guardado = await nuevoJuego.save();
    res.status(201).json(guardado);
  } catch (err) {
    res.status(400).json({ error: "Error al crear el juego", detalle: err.message });
  }
});

module.exports = router;