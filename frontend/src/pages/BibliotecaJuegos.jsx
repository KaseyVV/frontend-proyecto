import { useEffect, useState } from "react";
import { obtenerJuegos } from "../api.js";

function BibliotecaJuegos() {
  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
  const cargarJuegos = async () => {
    try {
      const data = await obtenerJuegos();
      console.log("📦 Juegos recibidos:", data);
      setJuegos(data);
    } catch (error) {
      console.error("Error al obtener los juegos:", error);
    }
  };
  cargarJuegos();
  }, []);


  return (
    <div style={{ padding: "20px" }}>
      <h1>Mi Biblioteca de Juegos</h1>
      <div style={{ display: "grid", gap: "15px", gridTemplateColumns: "repeat(auto-fill, 250px)" }}>
        {juegos.map((juego) => (
          <div
            key={juego._id}
            style={{
              border: "1px solid #333",
              borderRadius: "10px",
              padding: "10px",
              backgroundColor: "#1b2838",
              color: "#fff",
            }}
          >
            <img
              src={juego.imagenPortada}
              alt={juego.titulo}
              style={{ width: "100%", borderRadius: "8px", marginBottom: "10px" }}
            />
            <h3>{juego.titulo}</h3>
            <p>{juego.genero} • {juego.plataforma}</p>
            <small>{juego.añoLanzamiento}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BibliotecaJuegos;
