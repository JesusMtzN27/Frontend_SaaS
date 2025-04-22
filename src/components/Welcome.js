// src/Welcome.js
import React from 'react';
import './Welcome.css'; // Importar el archivo CSS
import ReportMenu from './ReportMenu'; // Importa el componente ReportMenu

const Welcome = () => {
  const username = localStorage.getItem("username");

  return (
    <div className="welcome-container">
      <div className="report-menu-container">
        <ReportMenu />
      </div>

      <br />
      
      <div className="welcome-message">
        <h2>Bienvenido, {username}!</h2>
        <p>¡Aquí está tu contenido exclusivo después de iniciar sesión!</p>
        
      </div>

    </div>
  );
};

export default Welcome;
