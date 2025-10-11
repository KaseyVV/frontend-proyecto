import React from 'react';
import { useParams } from 'react-router-dom';

function DetalleJuego() {
  const { id } = useParams();

  return (
    <div style={{ padding: 20 }}>
      <h1>Detalle del juego</h1>
      <p>ID del juego: {id}</p>
      <p>Aquí irán los detalles del juego seleccionado.</p>
    </div>
  );
}

export default DetalleJuego;
