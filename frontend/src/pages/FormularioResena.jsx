import React from 'react';
import { useParams } from 'react-router-dom';

function FormularioResena() {
  const { id } = useParams();

  return (
    <div style={{ padding: 20 }}>
      <h1>Agregar reseña</h1>
      <p>Reseña para juego con ID: {id}</p>
    </div>
  );
}

export default FormularioResena;
