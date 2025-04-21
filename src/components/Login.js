import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Importar el archivo CSS

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate(); // Hook para navegar a otras rutas

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Enviar la solicitud POST al backend
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const data = await response.json();

    // Verificar si las credenciales son correctas
    if (response.ok) {
      // Si la respuesta es correcta, redirige al usuario
      localStorage.setItem("username", username);
      navigate("/welcome"); // Redirigir al componente Welcome
    } else {
      // Si la respuesta es incorrecta, muestra el mensaje de error
      setErrorMessage(data.message || "Credenciales inválidas.");
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="username">Usuario:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button type="submit" className="login-button">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
