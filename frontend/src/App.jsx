import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import BibliotecaJuegos from "./pages/BibliotecaJuegos.jsx";
import EstadisticasPersonales from "./pages/EstadisticasPersonales.jsx";

function App() {
  return (
    <div>
      <h1>🎮 GameTracker</h1>
      <p>Bienvenido a tu biblioteca de juegos</p>
    </div>
  );
}

export default App;