import React, { useState, useEffect } from 'react';
import './Welcome.css'; // Importar el archivo CSS

const Welcome = () => {
  // Estado para guardar la URL del reporte de QuickSight
  const [reportUrl, setReportUrl] = useState(null);
  const [error, setError] = useState(null);

  // Realizar la solicitud para obtener la URL del reporte cuando el componente se monta
  useEffect(() => {
    const fetchReportUrl = async () => {
      try {
        const apiUrl = "http://demo.operaria.test"; // Usar la variable de entorno
        const response = await fetch(`${apiUrl}/api/get-report-urlqs?language=es&page=NOM035-ES`); // Cambiar la URL según sea necesario
        
        if (!response.ok) {
          throw new Error('No se pudo obtener la URL del reporte');
        }
        
        const data = await response.json();
        if (data.reportUrl) {
          setReportUrl(data.reportUrl); // Guardar la URL del reporte
          setError(null); // Limpiar el error
        } else {
          setError('Reporte no encontrado');
        }
      } catch (error) {
        setError('Hubo un error al cargar el reporte');
        console.error(error);
      }
    };

    fetchReportUrl();
  }, []); // Solo se ejecuta una vez cuando el componente se monta

  return (
    <div className="welcome-container">
      {error && <div className="error-message">{error}</div>}

      {reportUrl ? (
        <iframe
          title="QuickSight Report"
          width="99%"
          height="800"
          // src={reportUrl}  // Asignamos la URL que obtuvimos del backend          
          src="https://us-east-1.quicksight.aws.amazon.com/embed/f4c1e9da8de043078dcf4ebb28fba20c/dashboards/bbd88437-f6e1-4707-9e53-7cb5389b41f3?identityprovider=quicksight&isauthcode=true&code=AYABeJgKBaavpm0WhVsPWXbtmrAAAAABAAdhd3Mta21zAEthcm46YXdzOmttczp1cy1lYXN0LTE6MjU5NDgwNDYyMTMyOmtleS81NGYwMjdiYy03MDJhLTQxY2YtYmViNS0xNDViOTExNzFkYzMAuAECAQB4g1oL4hdUJZc1aKfcGo-VQb_jBEsh0RowAd9MxoJqXpEBLMAp--L_MkrHz9sZ2YnMFwAAAH4wfAYJKoZIhvcNAQcGoG8wbQIBADBoBgkqhkiG9w0BBwEwHgYJYIZIAWUDBAEuMBEEDFmfYUdSCZ_zWiypggIBEIA7E6rZP1cDznjWG272IrIySDRqfTYCIU5_tT1TsZmOfQCpLNfdrCxo8IDJp4Nl9YNkL1RHSIZ7Vyt4cZoCAAAAAAwAABAAAAAAAAAAAAAAAAAA0gyxheEDC7TfJID9JZwnE_____8AAAABAAAAAAAAAAAAAAABAAAAm42id6w-0zf7EcvyjN1xO9I6uUH2gm0Ggp5dCfutwJpvJVlRj1ENq1sMpZX8PXREToigD46zlcAT95Xx_q4ffG2ygZTKY9QEqYAZfBRyeXC0aROSDtRL2NLGCJS26j7-6ubuQ52x9wyigIou4DUPyMRLkncF9MjhR4NVveCkkK_WWyXEjob6dW89tdZy2k0VuHX4xr625GTjeQWMc4bCb-Nm3vQQzZE6supzpw%3D%3D"
          frameBorder="0"
        ></iframe>
      ) : (
        <div>Cargando reporte...</div>
      )}
    </div>
  );
};

export default Welcome;
