import React, { useState, useEffect } from 'react';
import { getAllCharacters } from '../services/dragonballAPI.js';
import Card from '../components/Card.js';

const Records = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    getAllCharacters(page)
      .then((data) => {
        if (data && data.items) {
          setCharacters(data.items);
        } else {
          setError('Data format is incorrect');
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(`Error fetching characters: ${err.message}`);
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
        {characters.map((character) => (
          <Card key={character.id} character={character} />
        ))}
      </div>
      <div>
        <button onClick={handlePreviousPage} disabled={page <= 1}>
          Back
        </button>
        <button onClick={handleNextPage} disabled={page >= 6}>
          Next
        </button>
        <select value={page} onChange={handlePageSelect}>
          {[1, 2, 3, 4, 5, 6].map((pageNum) => (
            <option key={pageNum} value={pageNum}>
              {pageNum}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Records;