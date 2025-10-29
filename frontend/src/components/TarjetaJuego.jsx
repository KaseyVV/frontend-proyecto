import "./TarjetaJuego.css";

function TarjetaJuego({ juego, onClick }) {
  return (
    <div className="tarjeta" onClick={onClick}>
      <img src={juego.imagenPortada} alt={juego.titulo} />
      <div className="tarjeta-info">
        <h3>{juego.titulo}</h3>
      </div>
    </div>
  );
}

export default TarjetaJuego;