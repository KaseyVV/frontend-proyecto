import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { obtenerJuegoPorId } from "../api.js";
import FormularioReseña from "../components/FormularioReseña.jsx";
import './DetalleJuego.css';

function DetalleJuego() {
    const { id } = useParams();
    const [juego, setJuego] = useState(null);
    const [cargando, setCargando] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const cargarJuego = async () => {
            try {
            const data = await obtenerJuegoPorId(id);
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

    return (
        <div className="detalle-juego">
            <div className="detalle-header">
                <button className="btn-regresar" onClick={() => navigate(-1)}>← Regresar</button>
                <img src={juego.imagenPortada} alt={juego.titulo} className="detalle-imagen" />

                <div className="detalle-info">
                    <h1>{juego.titulo}</h1>
                    <p className="detalle-descripcion">{juego.descripcion}</p>
            
                    <div className="detalle-datos">
                        <p><strong>Género:</strong>{juego.genero}</p>
                        <p><strong>Plataforma:</strong> {juego.plataforma}</p>
                        <p><strong>Año de Lanzamiento:</strong> {juego.añoLanzamiento}</p>
                        <p><strong>Desarrollador:</strong> {juego.desarrollador}</p>
                        <p><strong>Dificultad:</strong>{juego.dificultad || "Normal"}</p>
                    </div>
                </div>
            </div>

            <div className="detalle-reseñas">
                <h2>Reseñas</h2>
                {juego.reseñas && juego.reseñas.length > 0 ? (
                    <ul>
                        {juego.reseas.map((reseña, index) => (
                            <li key={index} className="reseña-item">
                                <p><strong>{reseña.autor || "Anonimo"}</strong> {reseña.comentario} </p>
                                <p className="reseña-calificacion">Calificación: ⭐{puntuacion}/5⭐ - {" "}
                                    {new Date(reseña.fecha).toLocaleDateString()}
                                </p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="detalle-sinreseña">No hay reseñas para este juego.</p>
                )}

                <FormularioReseña juegoId={juego._id} />
            </div>
        </div>
    );
}

export default DetalleJuego;