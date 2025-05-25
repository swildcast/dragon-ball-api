import React from 'react';
import { Link } from 'react-router-dom';

const Unauthorized = () => {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Acceso no autorizado</h1>
      <p>No tienes permiso para acceder a esta página.</p>
      <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">
        Volver a la página principal
      </Link>
    </div>
  );
};

export default Unauthorized;
