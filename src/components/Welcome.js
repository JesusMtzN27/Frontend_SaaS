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
          height="800"
          //src="https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/297009612081/dashboards/a5f331d6-acbf-4579-84ff-b7e6ad84593a?directory_alias=Operaria-Quicksight&username=AWSReservedSSO_AdministratorAccess_84fc8e51a827a37b/JesusMartinez"
          src="https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/297009612081/dashboards/a5f331d6-acbf-4579-84ff-b7e6ad84593a?directory_alias=Operaria-Quicksight&username=AWSReservedSSO_AdministratorAccess_84fc8e51a827a37b/OmarAnguiano"
          //src="https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/297009612081/dashboards/a0ff86e4-dca2-4892-9d2e-551a313af7ee?directory_alias=Operaria-Quicksight&username=backpirelli"
          frameBorder="0"
        ></iframe>
        <br />
      <iframe
          title="QuickSight Report"
          width="100%"
          height="800"
          src="https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/297009612081/dashboards/a5f331d6-acbf-4579-84ff-b7e6ad84593a?directory_alias=Operaria-Quicksight&username=AWSReservedSSO_AdministratorAccess_84fc8e51a827a37b/JesusMartinez"
          //src="https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/297009612081/dashboards/a5f331d6-acbf-4579-84ff-b7e6ad84593a?directory_alias=Operaria-Quicksight&username=AWSReservedSSO_AdministratorAccess_84fc8e51a827a37b/OmarAnguiano"
          //src="https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/297009612081/dashboards/a0ff86e4-dca2-4892-9d2e-551a313af7ee?directory_alias=Operaria-Quicksight&username=backpirelli"
          frameBorder="0"
        ></iframe>

    </div>
  );
};

export default Welcome;
