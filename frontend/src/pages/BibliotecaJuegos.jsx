import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { obtenerJuegos } from "../api.js";
import TarjetaJuego from "../components/TarjetaJuego.jsx";
import './BibliotecaJuegos.css';



function BibliotecaJuegos() {
    const [juegos, setJuegos] = useState([]);
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        const cargar = async () => {
            const data = await obtenerJuegos();
            setJuegos(data);
            setCargando(false);
        }; 
        cargar();
    }, []);

    if (cargando) return <p className="biblioteca-vacia">Cargando....</p>

    return (
        <div className="biblioteca">
            <div className="biblioteca-header">
                <h1>Mi Biblioteca de Juegos</h1>
                <botton className="btn-agregar" onClick ={() => useNavigate("/nuevo")}> + Agregar Juegos </botton>
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
            </div>
        </div>
    );
}
export default BibliotecaJuegos;