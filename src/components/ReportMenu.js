// src/components/ReportMenu.js
import React, { useState } from 'react';
import './ReportMenu.css'; // Asegúrate de tener este archivo de estilo

const ReportMenu = () => {
  const [embedUrl, setEmbedUrl] = useState('');
  const username = localStorage.getItem("username"); // Asumiendo que ya tienes el nombre del usuario en el localStorage

  const handleReportSelection = async (reportName) => {
    // Enviar al backend el nombre de usuario y el nombre del reporte
    const response = await fetch('http://localhost:5000/get-report-url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        reportName: reportName
      }),
    });

    if (response.ok) {
      const data = await response.json();
      setEmbedUrl(data.embedUrl); // Suponiendo que el backend retorna la URL de incrustación
    } else {
      console.error('Error al obtener la URL de incrustación');
    }
  };

  return (
    <div className="report-menu-container">
      <nav className="report-nav">
        <a href="#demografia" onClick={() => handleReportSelection('Demografia')}>Demografía</a>
        <a href="#nom035" onClick={() => handleReportSelection('NOM-035')}>NOM-035</a>
      </nav>

      <div className="report-display">
        {embedUrl && (
          <iframe
            src={embedUrl}
            width="100%"
            height="600"
            title="Reporte de QuickSight"
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default ReportMenu;
