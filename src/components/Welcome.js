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
          src="https://us-east-1.quicksight.aws.amazon.com/embed/f7ddd7b266ec4faebffd7c91355ec6e6/dashboards/f2f70081-8331-4fb5-918f-000af02298d6?identityprovider=quicksight&isauthcode=true&code=AYABeAP8e7OsDXErCo5dYNJO8TYAAAABAAdhd3Mta21zAEthcm46YXdzOmttczp1cy1lYXN0LTE6MjU5NDgwNDYyMTMyOmtleS81NGYwMjdiYy03MDJhLTQxY2YtYmViNS0xNDViOTExNzFkYzMAuAECAQB4g1oL4hdUJZc1aKfcGo-VQb_jBEsh0RowAd9MxoJqXpEBHHW81baC10bDW6At7MTpNwAAAH4wfAYJKoZIhvcNAQcGoG8wbQIBADBoBgkqhkiG9w0BBwEwHgYJYIZIAWUDBAEuMBEEDG0sHoEwr33KwdG38wIBEIA7lOk8W5ttNmLP7NQTcnjNRizofUJXZt29xL0oBRDUbNEmcTBW_f7HAwB_hUY5d90cGvOxNo-Vkwht4ToCAAAAAAwAABAAAAAAAAAAAAAAAAAACrYqq_q9yDB2SzVezo_KQf____8AAAABAAAAAAAAAAAAAAABAAAAm_br3tHchlGdxIVnYExqosDy8bDQrXWTwybNAlA6E8bF5sjoxRL5K5W-5DA_8jUA6do_fD_6211UWedu6hgmoz6R2z1TwoSH20nXn2UbJ5CI23l38OldMq4mcePwAzd19c8SN0xw22fqISEp-KOcsF03lslIvuU85pfsONaWE5_-ffjBfZjAFpeqK-Y36GjvezRZeLQTddc87bpytbHmzPAhnw0q9qm_xhLiAA%3D%3D" // Demography
          frameBorder="0"
        ></iframe>

    </div>
  );
};

export default Welcome;
