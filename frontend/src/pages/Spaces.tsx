import React, { useState, useEffect } from 'react';

interface Space {
  id: number;
  name: string;
  description: string;
  location: string;
  capacity: number;
}

const Spaces = () => {
  const [spaces, setSpaces] = useState<Space[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/spaces')
      .then(res => {
        if (!res.ok) {
          throw new Error('Error al obtener espacios');
        }
        return res.json();
      })
      .then(data => {
        setSpaces(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando espacios...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Espacios</h1>
      <ul>
        {spaces.map(space => (
          <li key={space.id} className="mb-2 border p-2 rounded">
            <h2 className="font-semibold">{space.name}</h2>
            <p>{space.description}</p>
            <p>Ubicación: {space.location}</p>
            <p>Capacidad: {space.capacity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Spaces;
