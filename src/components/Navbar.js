import React from "react";
import { Link } from "react-router-dom"; // Usamos Link para la navegación
import "./Navbar.css"; // Importar el archivo CSS para la barra de navegación

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo o título */}
        <Link to="/" className="navbar-logo">
          WebApp
        </Link>
        
        {/* Menú de navegación */}
        <div className="navbar-links">
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            {/* <li>
              <Link to="/welcome">Bienvenida</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
