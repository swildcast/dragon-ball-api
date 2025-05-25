import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const TokenDisplay = () => {
  const auth = useContext(AuthContext);

  if (!auth || !auth.token) {
    return <p>No hay token disponible. Por favor, inicia sesión.</p>;
  }

  return (
    <div className="p-4 bg-gray-100 border rounded mt-4">
      <h3 className="font-bold mb-2">Token JWT almacenado:</h3>
      <textarea
        readOnly
        className="w-full h-24 p-2 border rounded font-mono text-sm"
        value={auth.token}
      />
    </div>
  );
};

export default TokenDisplay;
