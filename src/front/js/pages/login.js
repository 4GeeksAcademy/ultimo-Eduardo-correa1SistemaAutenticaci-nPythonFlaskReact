import React, { useState } from 'react';
import "../../styles/index.css";

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(process.env.BACKEND_URL + "/api/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    if (response.ok) {
      const { token } = await response.json();
      sessionStorage.setItem('token', token);
      window.location.href = '/private';
    } else {
      const result = await response.json();
      setError(result.msg);
    }
  };

  return (
    <div className='text-center mt-5'>
      <i className="fa-solid fa-circle-user user-icon"></i>
      <h2>Inicia Sesión</h2>
      {error && <p style={{color: 'red'}}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

