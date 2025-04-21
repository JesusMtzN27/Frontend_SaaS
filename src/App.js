import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Home from "./components/Home";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import Navbar from "./components/Navbar"; // Importamos el Navbar

function App() {
  return (
    <Router>
      <Navbar /> {/* Añadimos el componente de la barra de navegación */}
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
