import { useEffect } from "react";
import TarjetaJuego from "../components/TarjetaJuego.jsx";
import './BibliotecaJuegos.css'
import { ObtenerJuegos } from '../api'
import { useNavigate } from "react-router-dom";

function BibliotecaJuegos() {
    const [juegos, setJuegos] = React.useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        const cargar = async () => {
            setJuegos(data);
        };
    cargar();
    }, []);

    return (
        <div className="biblioteca-container">
            <h1>Mi Biblioteca</h1>
            <div className="juegos-grid">
                {juegos.map((juego) => (
                    <TarjetaJuego
                    key={juego.id}
                    onClick={() => navigate(`/juego/${juego.id}`)}
                    />
                ))}
            </div>
        </div>
    );
}
export default BibliotecaJuegos;