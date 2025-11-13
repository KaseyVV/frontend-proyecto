import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ListaResenia.css";

const API_URL = "http://localhost:3000/api/resenias";

function ListaResenias({ juegoId }) {
  const [resenias, setResenias] = useState([]);
  const [cargando, setCargando] = useState(true);

  const cargarResenias = async () => {
    try {
      const res = await axios.get(`${API_URL}/${juegoId}`);
      setResenias(res.data);
    } catch (error) {
      console.error("Error al cargar reseñas:", error);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    cargarResenias();
  }, [juegoId]);

  if (cargando) return <p>Cargando reseñas...</p>;

  return (
    <div className="lista-reseñas">
      <h3>🗨️ Reseñas</h3>
      {resenias.length === 0 ? (
        <p>No hay reseñas para este juego.</p>
      ) : (
        resenias.map((r) => (
          <div className="reseña" key={r._id}>
            <div className="reseña-header">
              <strong>{r.autor}</strong>
              <span>{"⭐".repeat(r.puntuacion)}</span>
            </div>
            <p className="reseña-comentario">{r.textoReseña}</p>
            <small>
              {new Date(r.fecha || r.createdAt).toLocaleDateString()}
            </small>
          </div>
        ))
      )}
    </div>
  );
}

export default ListaResenias;