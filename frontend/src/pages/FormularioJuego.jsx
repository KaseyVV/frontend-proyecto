import { useState } from "react";
import axios from "axios";
import "./FormularioJuego.css";

const FormularioJuego = ({ onClose, onJuegoAgregado }) => {
    const [juego, setJuego] = useState({
        titulo: "",
        genero: "",
        plataforma: "",
        añoLanzamiento: "",
        desarrollador: "",
        imagenPortada: "",
        descripcion: "",
        completado: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setJuego((prevJuego) => ({
            ...prevJuego,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:300/api/juegos", juego);
            onJuegoAgregado();
        } catch (error) {
            console.error("Error al agregar el juego:", error);
            alert("Hubo un error al agregar el juego. Por favor, intenta de nuevo.");
        }
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <botton className="btn-cerrar" onClick={onClose}>X</botton>
                <h2>Agregar Nuevo Juego</h2>
                <form onSubmit={handleSubmit} className="formulario-juego">
                    <input type="text" name="titulo" placeholder="Título" value={juego.titulo} onChange={handleChange} required />
                    <input type="text" name="genero" placeholder="Género" value={juego.genero} onChange={handleChange} required />
                    <input type="text" name="plataforma" placeholder="Plataforma" value={juego.plataforma} onChange={handleChange} required />
                    <input type="number" name="añoLanzamiento" placeholder="Año de Lanzamiento" value={juego.añoLanzamiento} onChange={handleChange} required />
                    <input type="text" name="desarrollador" placeholder="Desarrollador" value={juego.desarrollador} onChange={handleChange} required />
                    <input type="text" name="imagenPortada" placeholder="URL de la Imagen de Portada" value={juego.imagenPortada} onChange={handleChange} required />
                    <textarea name="descripcion" placeholder="Descripción" value={juego.descripcion} onChange={handleChange} required></textarea>
                    <label>
                        <input type="checkbox" name="completado" checked={juego.completado} onChange={handleChange} /> Juego Completado
                    </label>
                    <button type="submit" className="btn-guardar">Guardar Juego</button>
                </form>
            </div>
        </div>
    );
}

export default FormularioJuego;