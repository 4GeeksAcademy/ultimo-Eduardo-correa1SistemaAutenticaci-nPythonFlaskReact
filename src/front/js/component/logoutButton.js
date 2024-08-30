import React from 'react';
import { useNavigate } from 'react-router-dom';

export const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    

    
    navigate('/login');
  };

  return (
    <button onClick={handleLogout} className="btn btn-danger">
      cerrar sesion
    </button>
  );
};

