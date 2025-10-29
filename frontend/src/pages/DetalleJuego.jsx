import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { obtenerJuegoPorId } from '../api/juegosApi';
import './DetalleJuego.css';

function DetalleJuego() {
  const { id } = useParams();
  const [juego, setJuego] = useState(null);
  
  useEffect(() => {
    async function fetchJuego() {
      const data = await obtenerJuegoPorId(id);
      setJuego(data);
    };
    cargar(data);
  }, [id]);

  if (!juego) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="detalle-container">
      <img src={juego.imagenPortada} alt={juego.titulo} className="detalle-imagen" />
      <div className="detalle-info">
        <h2>{ juego.titulo }</h2>
        <p><strong>Género:</strong> { juego.genero }</p>
        <p><strong>Plataforma:</strong> { juego.plataforma }</p>
        <p><strong>Año:</strong> { juego.añoLanzamiento }</p>
        <p><strong>Desarrollador:</strong> { juego.desarrollador }</p>
        <p className="descripcion">{ juego.descripcion }</p>
        <p><strong>Completado:</strong>{juego.completado ? "Si" : "No" }</p>
      </div>
    </div>
  );

}
export default DetalleJuego;