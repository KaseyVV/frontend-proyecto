import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <header className="home-header">
          <h1 className="home-title">🎮 GameTracker</h1>
          <p className="home-subtitle">
            Organiza, analiza y disfruta tu biblioteca de videojuegos
          </p>
        </header>

        <div className="home-cards">
          <div className="home-card">
            <h2>Mi Biblioteca</h2>
            <p>Explora todos los juegos que has agregado</p>
            <Link to="/biblioteca" className="btn">Ver Biblioteca</Link>
          </div>

          <div className="home-card">
            <h2>Mis Estadísticas</h2>
            <p>Visualiza tu progreso y datos personales</p>
            <Link to="/estadisticas" className="btn">Ver Estadísticas</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
