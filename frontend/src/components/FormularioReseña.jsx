import { useState } from "react";
import axios from "axios";
import "./FormularioReseña.css";

function FormularioReseña({ juegoId }) {
  const [autor, setAutor] = useState("");
  const [comentario, setComentario] = useState("");
  const [puntuacion, setPuntuacion] = useState(5);

  const manejarEnvio = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3000/api/reseñas`, {
        juegoId,
        autor,
        comentario,
        puntuacion,
      });
      alert("Reseña enviada correctamente");
      setAutor("");
      setComentario("");
      setPuntuacion(5);
    } catch (error) {
      console.error("Error al enviar reseña:", error);
      alert("No se pudo enviar la reseña");
    }
  };

  return (
    <form className="reseña-form" onSubmit={manejarEnvio}>
      <h3>Deja tu reseña</h3>
      <input
        type="text"
        placeholder="Tu nombre"
        value={autor}
        onChange={(e) => setAutor(e.target.value)}
      />
      <textarea
        placeholder="Escribe tu comentario..."
        value={comentario}
        onChange={(e) => setComentario(e.target.value)}
      />
      <label>Puntuación:</label>
      <select
        value={puntuacion}
        onChange={(e) => setPuntuacion(Number(e.target.value))}
      >
        {[1, 2, 3, 4, 5].map((n) => (
          <option key={n} value={n}>
            {n}
          </option>
        ))}
      </select>
      <button type="submit">Enviar reseña</button>
    </form>
  );
}

export default FormularioReseña;