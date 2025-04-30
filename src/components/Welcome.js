// src/Welcome.js
import React from 'react';
import './Welcome.css'; // Importar el archivo CSS
//import ReportMenu from './ReportMenu'; // Importa el componente ReportMenu

const Welcome = () => {
  //const username = localStorage.getItem("username");

  return (
    <div className="welcome-container">
      {/* <div className="report-menu-container">
        <ReportMenu />
      </div>

      <br />

      <div className="welcome-message">
        <h2>Bienvenido, {username}!</h2>
        <p>¡Aquí está tu contenido exclusivo después de iniciar sesión!</p>
        
      </div> */}

      <br />
      <br />
      
      <iframe
          title="QuickSight Report"
          width="100%"
          height="1000"
          src="https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/297009612081/dashboards/f2f70081-8331-4fb5-918f-000af02298d6?directory_alias=Operaria-Quicksight" // Demography
          frameBorder="0"
        ></iframe>

    </div>
  );
};

export default Welcome;
