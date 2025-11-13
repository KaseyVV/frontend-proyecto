import React, { useState } from "react";
import axios from "axios";
import "./FormularioResenia.css";


const FormularioResenia = ({ juegoId }) =>{
  const [autor, setAutor] = useState("");
  const [textoReseña, setTextoReseña] = useState("");
  const [puntuacion, setPuntuacion] = useState(5);

  const enviarResenia = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3000/api/resenias/${juegoId}`, {
        autor,
        textoReseña,
        puntuacion,
      });
      setAutor("");
      setTextoReseña("");
      setPuntuacion(5);
      alert("✅ Reseña enviada con éxito.");
    } catch (error) {
      console.error("Error al enviar la reseña:", error);
      alert("❌ Hubo un error al enviar la reseña.");
    }
  };

  return (
    <div className="formulario-reseña">
      <h3>💬 Deja tu reseña</h3>
      <form onSubmit={enviarResenia}>
        <input
          type="text"
          placeholder="Tu nombre"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
          required
        />

        <textarea
          placeholder="Escribe tu comentario..."
          value={textoReseña}
          onChange={(e) => setTextoReseña(e.target.value)}
          required
        />

        <label>Puntuación:</label>
        <select
          value={puntuacion}
          onChange={(e) => setPuntuacion(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n}>
              {n} ⭐
            </option>
          ))}
        </select>

        <button type="submit">Enviar reseña</button>
      </form>
    </div>
  );
}

export default FormularioResenia;