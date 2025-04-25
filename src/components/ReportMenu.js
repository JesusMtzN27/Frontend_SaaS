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
            // src="https://us-east-1.quicksight.aws.amazon.com/embed/d8ba45c3bd7b4718be9e21b5c94dddfd/dashboards/09481f25-820f-476b-b351-a3f47b9901e6?identityprovider=quicksight&isauthcode=true&code=AYABeMBkrSGXJYtfQz9huHJSTuYAAAABAAdhd3Mta21zAEthcm46YXdzOmttczp1cy1lYXN0LTE6MjU5NDgwNDYyMTMyOmtleS81NGYwMjdiYy03MDJhLTQxY2YtYmViNS0xNDViOTExNzFkYzMAuAECAQB4g1oL4hdUJZc1aKfcGo-VQb_jBEsh0RowAd9MxoJqXpEBKUVpCWD2t4B-bPZY5kqhAAAAAH4wfAYJKoZIhvcNAQcGoG8wbQIBADBoBgkqhkiG9w0BBwEwHgYJYIZIAWUDBAEuMBEEDC3yEk_PLP7k8t0howIBEIA7HSFqYC1AovylIRwqqLSsLuc7V1OEuwcgTmMwZ-lqN_5qvLDMj1Cb8qAXc2f6OlwAd6bq32OgBZ0WGYgCAAAAAAwAABAAAAAAAAAAAAAAAAAAgRJtdBS1WXapVi4FfhIEPP____8AAAABAAAAAAAAAAAAAAABAAAAmyzt8Q3fmmokGANZl4Qbb62IRMggcPoto6IcFvENSWSU_uGmDWvcEJTkY8ww-e1nrqDO_DEZRb0MK6b-09xmr8X62rqSiXpiiG7pSsje8gb_uYueKCaS8XAmjohk_iYSAIrWOvBVlozJm6DQK8PvUmioYK-TBAPSPlsaEbQvAhshrjetsTK__-_UvEm5S-eKDnkf6fjhuEM37w9w9Pe0ywsG8NY6FdcYiTgZMw%3D%3D" // Cambia esto por la URL de tu reporte
            width="100%"
            height="800"
            frameBorder="0"
            title="Reporte de QuickSight"
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default ReportMenu;
