import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { obtenerJuegoPorId } from "../api.js";
import './DetalleJuego.css';

const API_URL = "http://localhost:3000/api/juegos";

const DetalleJuego = () => {
    const { id } = useParams();
    const [juego, setJuego] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [puntuacion, setPuntuacion] = useState(0);
    const [horas, setHoras] = useState(0);
    const [mostrarModal, setMostrarModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const cargarJuego = async () => {
            try {
            const data = await obtenerJuegoPorId(id);
            setPuntuacion(data.puntuacion || 0);
            setHoras(data.horasJugadas || 0);
            console.log("🎮 Datos del juego recibido:", data);
            setJuego(data);
        } catch (error) {
            console.error("❌ Error al obtener el juego:", error);
        } finally {
        setCargando(false);
        }
     };
    cargarJuego();
    }, [id]);

    if (cargando) return <p className="detalle-cargando">Cargando...</p>;
    if (!juego) return <p className="detalle-error">Juego no encontrado.</p>;

    const manejarHoras = async (valor) => {
        const horasNum = Number(valor);
        setHoras(horasNum);
        try {
            await axios.put(`${API_URL}/${id}`, { horasJugadas: horasNum });
        } catch (error) {
            console.error("❌ Error al actualizar horas jugadas:", error);
        }
    };

    const manejarPuntuacion = async (valor) => {
        try {
            setPuntuacion(valor);
            await axios.put(`${API_URL}/${id}`, { puntuacion: valor });
        } catch (error) {
            console.error("❌ Error al actualizar la puntuación:", error);
        }
    };

    const eliminarJuego = async () => {
        try {
            await axios.delete(`${API_URL}/${id}`);
            alert("Juego eliminado exitosamente.");
            navigate("/biblioteca");
        } catch (error) {
            console.error("❌ Error al eliminar el juego:", error);
            alert("Error al eliminar el juego.");
        }
    };

    const editarJuego = () => {
        navigate(`/editar-juego/${id}`);
    };

    return (
        <div className="detalle-juego">
            <botton className="btn-volver" onClick={() => navigate(-1)}>Volver</botton>
            <div className="detalle-contenido">
                <div className="detalle-imagen">
                <img src={juego.imagenPortada} alt={juego.titulo} />
                <div className="puntuacion">
                    {[1, 2, 3, 4, 5].map((num) => (
                    <span
                        key={num}
                        className={num <= puntuacion ? "estrella activa" : "estrella inactiva"}
                        onClick={() => manejarPuntuacion(num)}
                    >
                        ★
                    </span>
                    ))}
                </div>
                </div>

                <div className="detalle-info">
                    <h2>{juego.titulo}</h2>
                    <p><strong>Género:</strong> {juego.genero}</p>
                    <p><strong>Plataforma:</strong> {juego.plataforma}</p>
                    <p><strong>Año de Lanzamiento:</strong> {juego.añoLanzamiento}</p>
                    <p><strong>Desarrollador:</strong> {juego.desarrollador}</p>
                    <p><strong>Descripción:</strong> {juego.descripcion}</p>

                    <div className="horas-jugadas">
                        <strong>Horas Jugadas:</strong>
                        <input
                        type="number"
                        value={horas}
                        onChange={(e) => manejarHoras(e.target.value)}
                        />
                    </div>

                    <div className="botones">
                        <button className="boton editar" onClick={editarJuego}>✏️ Editar</button>
                        <button className="boton eliminar" onClick={() => setMostrarModal(true)}>🗑️ Eliminar</button>
                    </div>
                </div>
            </div>

            {mostrarModal && (
                <div className="modal-fondo">
                    <div className="modal">
                        <h3>¿Eliminar este juego?</h3>
                        <div className="modal-botones">
                        <button className="confirmar" onClick={eliminarJuego}>Sí, eliminar</button>
                        <button className="cancelar" onClick={() => setMostrarModal(false)}>Cancelar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DetalleJuego;