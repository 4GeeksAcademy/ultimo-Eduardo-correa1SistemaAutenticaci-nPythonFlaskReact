import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const token = sessionStorage.getItem('token');

  // Si el token no existe, redirige al usuario al login
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;