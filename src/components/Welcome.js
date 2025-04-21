import React from "react";
import "./Welcome.css"; // Importar el archivo CSS

const Welcome = () => {
  const username = localStorage.getItem("username");

  return (
    <div className="welcome-container">
      <h2>Bienvenido, {username}!</h2>
      <p>¡Aquí está tu contenido exclusivo después de iniciar sesión!</p>
      {/* Aquí podrás insertar el reporte embebido de Amazon QuickSight */}
    </div>
  );
};

export default Welcome;
