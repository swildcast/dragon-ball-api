import React from 'react';
import TokenDisplay from '../components/TokenDisplay';

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Bienvenido a la aplicación</h1>
      <p>Esta es la página principal después de iniciar sesión.</p>
      <TokenDisplay />
    </div>
  );
};

export default Home;
