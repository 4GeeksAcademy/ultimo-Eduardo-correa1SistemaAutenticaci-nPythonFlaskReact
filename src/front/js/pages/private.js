import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Private = () => {
    const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      <h2>Bienvenido a la página privada</h2>
      {/* Aquí puedes renderizar más contenido privado */}
    </div>
  );
};

