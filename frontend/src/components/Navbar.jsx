import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="navbar-title">
          🎮 GameTracker
        </Link>
      </div>

      <ul className="navbar-links">
        <li>
          <Link
            to="/"
            className={location.pathname === "/" ? "active" : ""}
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            to="/biblioteca"
            className={location.pathname === "/biblioteca" ? "active" : ""}
          >
            Biblioteca
          </Link>
        </li>
        <li>
          <Link
            to="/estadisticas"
            className={location.pathname === "/estadisticas" ? "active" : ""}
          >
            Estadísticas
          </Link>
        </li>
      </ul>
      <div className="navbar-icons">
        <button className="icon-btn">
          ⚙️
        </button>
        <div className="user-avatar">
          <span>👤</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
