const mongoose = require("mongoose");

const JuegoSchema = new mongoose.Schema({
  juegoId: ObjectId,        // Referencia al videojuego
  puntuacion: Number,       // 1-5 estrellas
  textoReseña: String,
  horasJugadas: Number,
  dificultad: String,       // "Fácil", "Normal", "Difícil"
  recomendaria: Boolean,
  fechaCreacion: Date,
  fechaActualizacion: Date
});