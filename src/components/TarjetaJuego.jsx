import "./TarjetaJuego.css";

function TarjetaJuego({ juego, onClick }) {
  return (
    <a href={`/juego/${juego._id}`} className="tarjeta-juego" onClick={onClick}>
      <div className="tarjeta-imagen">
        <img src={juego.imagenPortada} alt={juego.titulo} className="imagen-juego" />
      </div>
      <div className="tarjeta-info">
        <h3>{juego.titulo}</h3>
        <p>{juego.genero}</p>
      </div>
    </a>
  );
}

export default TarjetaJuego;