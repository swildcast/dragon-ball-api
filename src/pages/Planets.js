import React, { useState, useEffect } from 'react';
import { getAllPlanets } from '../services/dragonballAPI';
import CardPlanet from '../components/CardPlanet';
import '../components/Card.css';

const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    getAllPlanets(page)
      .then((data) => {
        if (data && data.items) {
          setPlanets(data.items);
        } else {
          setError('Data format is incorrect');
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(`Error fetching planets: ${err.message}`);
        setLoading(false);
      });
  }, [page]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    setPage(page - 1);
  };

  const handlePageSelect = (event) => {
    const selectedPage = Number(event.target.value);
    setPage(selectedPage);
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="card-container">
        {planets.map((planet) => (
          <CardPlanet key={planet.id} planet={planet} />
        ))}
      </div>
      <div>
        <button onClick={handlePreviousPage} disabled={page <= 1}>
          Back
        </button>
        <button onClick={handleNextPage} disabled={page >= 2}>
          Next
        </button>
        <select value={page} onChange={handlePageSelect}>
          {[1, 2].map((pageNum) => (
            <option key={pageNum} value={pageNum}>
              {pageNum}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Planets;