{
  _id: ObjectId,
  titulo; String,
  genero; String,           // "Acción", "RPG", "Estrategia", etc.
  plataforma; String,       // "PC", "PlayStation", "Xbox", etc.
  añoLanzamiento; Number,
  desarrollador; String,
  imagenPortada; String,    // URL de la imagen
  descripcion; String,
  completado; Boolean,
  fechaCreacion; Date
}