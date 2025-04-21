import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Importar el archivo CSS

const Home = () => {
  return (
    <div className="home-container">
      <div className="welcome-message">
        <h1>Bienvenido a la WebApp</h1>
        <p>Tu plataforma para un futuro más eficiente</p>
        <Link to="/login">
          <button className="login-button">Iniciar sesión</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
