import { useEffect, useState } from "react";
import { obtenerJuegos } from "../api.js";
import TarjetaJuego from "../components/TarjetaJuego.jsx";
import FormularioJuego from "./FormularioJuego.jsx";
import './BibliotecaJuegos.css';



function BibliotecaJuegos() {
    const [juegos, setJuegos] = useState([]);
    const [cargando, setCargando] = useState(true)
    const [mostrarModal, setMostrarModal] = useState (false);

    useEffect(() => {
        const cargarJuegos = async () => {
            try {
                const data = await obtenerJuegos();
                setJuegos(data);
                setCargando(false);
            } catch (error) {
                console.error("Error al cargar los juegos:", error);
            }
        }; 
        cargarJuegos();
    }, []);

    if (cargando) return <p className="biblioteca-vacia">Cargando....</p>

    const handleJuegoAgregado = async () => {
        const data = await obtenerJuegos();
        setJuegos(data);
        setMostrarModal(false);
        setCargando(true);
    };

    return (
        <div className="biblioteca">
            <div className="biblioteca-header">
                <h1>Mi Biblioteca de Juegos</h1>
                <botton className="btn-agregar" onClick ={() => setMostrarModal(true)}> + Agregar Juegos </botton>
            </div>
        

            <div className="biblioteca-grid">
                {juegos.length > 0 ? (
                    juegos.map((juego) => (
                        <TarjetaJuego 
                            key={juego._id}
                            juego={juego}
                            onClick={() => useNavigate(`/juego/${juego._id}`)}
                        />
                    ))
                ) : (
                    <p className="biblioteca-vacia">No hay juegos en tu biblioteca. ¡Agrega algunos!</p>
                )}

                {mostrarModal && (
                    <FormularioJuego 
                        onClose={() => setMostrarModal(false)} 
                        onJuegoAgregado={handleJuegoAgregado}
                    />
                )}
            </div>
        </div>
    );
}
export default BibliotecaJuegos;