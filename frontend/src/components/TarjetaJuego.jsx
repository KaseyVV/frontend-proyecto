import React from 'react';
import { Link } from 'react-router-dom';

function TarjetaJuego({ juego }) {
  if (!juego) return null;

  return (
    <div style={{ border: '1px solid #ccc', padding: 12, borderRadius: 8 }}>
      <h3>{juego.titulo}</h3>
      <p>{juego.descripcion}</p>
      <Link to={`/juego/${juego.id}`}>Ver detalles</Link>
    </div>
  );
}

export default TarjetaJuego;
