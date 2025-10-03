const mongoose = require("mongoose");

const ReseñaSchema = new mongoose.Schema({
  juegoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Juego",
    required: true
  },
  puntuacion: {
    type: Number,
    min: 0,
    max: 5,
    required: true
  },
  textoReseña: {
    type: String,
    required: true,
    trim: true
  },
  horasJugadas: {
    type: Number,
    default: 0
  },
  dificultad: {
    type: String,
    enum: ["facil", "normal", "dificil"],
    default: "normal"
  },
  recomendaria: {
    type: Boolean,
    default: false
  },
  fechaCreacion: {
    type: Date,
    default: Date.now
  },
  fechaActualizacion: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: false
});

ReseñaSchema.pre("save", function (next) {
  this.fechaActualizacion = new Date();
  next();
});

module.exports = mongoose.model("Reseña", ReseñaSchema);