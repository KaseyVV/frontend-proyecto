import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ marginTop: "70px" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
      </div>
    </Router>
  );
}

export default App;