import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPlanet } from '../services/dragonballAPI';
import CardIdPlanet from '../components/CardIdPlanet';

const DetailsPlanet = () => {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPlanet(id)
      .then((data) => {
        setPlanet(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(`Error fetching planets: ${err.message}`);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {planet.map((planet) => (
        <CardIdPlanet key={planet.id} planet={planet} />
      ))}
    </div>
  );
};

export default DetailsPlanet;