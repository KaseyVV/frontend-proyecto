import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2>🎮 GameTracker</h2>
      <div style={styles.links}>
        <Link to="/">Biblioteca</Link>
        <Link to="/estadisticas">Estadísticas</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#0e141b",
    color: "#00c8ff",
  },
  links: {
    display: "flex",
    gap: "20px",
  },
};

export default Navbar;
