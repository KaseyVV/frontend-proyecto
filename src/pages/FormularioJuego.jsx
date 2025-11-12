import { useState } from "react";
import axios from "axios";
import "./FormularioJuego.css";

const API_URL = "http://localhost:3000/api/juegos"

const generosDisponibles = [
  "Acción", "Aventura", "RPG", "Estrategia", "Simulación",
  "Deportes", "Carreras", "Terror", "Puzzle", "Multijugador"
];

const plataformasDisponibles = [
  "PC", "PlayStation", "Xbox", "Nintendo Switch", "Mobile"
];

const dificultadesDisponibles = [
  "Fácil", "Normal", "Difícil"
];

const FormularioJuego = ({ onClose, onJuegoAgregado }) => {
  const [juego, setJuego] = useState({
    titulo: "",
    descripcion: "",
    genero: [],
    plataforma: "",
    añoLanzamiento: "",
    desarrollador: "",
    imagenPortada: "",
  });

  const toggleGenero = (genero) => {
    setJuego((prev) => ({
      ...prev,
      genero: prev.genero.includes(genero)
        ? prev.genero.filter((g) => g !== genero)
        : [...prev.genero, genero],
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJuego({ ...juego, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(API_URL, juego);
      console.log("Juego agregado:", res.data);
      onJuegoAgregado();
      onClose();
    } catch (err) {
      console.error("Error al agregar el juego:", err);
      alert("❌ Hubo un error al guardar el juego.");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-panel">
        <div className="modal-header">
          <h2>🎮 Añadir Nuevo Juego</h2>
        </div>

        <form className="form-grid" onSubmit={handleSubmit}>
          <div className="form-left">
            <label>Título del juego</label>
            <input
              type="text"
              name="titulo"
              placeholder="Ej. Cyberpunk 2077"
              value={juego.titulo}
              onChange={handleChange}
              required
            />

            <label>Descripción</label>
            <textarea
              name="descripcion"
              placeholder="Describe el juego..."
              value={juego.descripcion}
              onChange={handleChange}
            />

            <label>Género</label>
            <div className="chip-container">
              {generosDisponibles.map((g) => (
                <div
                  key={g}
                  className={`chip ${juego.genero.includes(g) ? "active" : ""}`}
                  onClick={() => toggleGenero(g)}
                >
                  {g}
                </div>
              ))}
            </div>

            <label>Dificultad</label>
            <select
              name="dificultad"
              value={juego.dificultad}
              onChange={handleChange}
              required
            >
              <option value="">Seleccionar dificultad</option>
              {dificultadesDisponibles.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>

            <label>Plataforma</label>
            <select
              name="plataforma"
              value={juego.plataforma}
              onChange={handleChange}
              required
            >
              <option value="">Seleccionar plataforma</option>
              {plataformasDisponibles.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>

            <label>Año de lanzamiento</label>
            <input
              type="number"
              name="añoLanzamiento"
              placeholder="Ej. 2023"
              value={juego.añoLanzamiento}
              onChange={handleChange}
            />

            <label>Desarrollador</label>
            <input
              type="text"
              name="desarrollador"
              placeholder="Ej. CD Projekt Red"
              value={juego.desarrollador}
              onChange={handleChange}
            />
          </div>

          <div className="form-right">
            <label>Portada del juego</label>
            <div className="image-upload">
              {juego.imagenPortada ? (
                <img src={juego.imagenPortada} alt="preview" className="preview" />
              ) : (
                <p>📁 Pega una URL o arrastra la imagen</p>
              )}
              <input
                type="text"
                name="imagenPortada"
                placeholder="URL de la imagen"
                value={juego.imagenPortada}
                onChange={handleChange}
              />
            </div>
          </div>
        </form>

        <div className="form-actions">
          <button type="button" onClick={onClose} className="btn-cancel">
            Cancelar
          </button>
          <button type="submit" className="btn-save" onClick={handleSubmit}>
            Guardar Juego
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormularioJuego;
