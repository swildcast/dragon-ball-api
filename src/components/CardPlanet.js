import React from "react";
import { Link } from "react-router-dom";
import './Card.css';

const CardPlanet = ({ planet }) => {
  return (
    <div className="card">
      <Link to={`/detailsPlanet/${planet.id}`}>
        <img src={planet.image} alt={planet.name} />
        <h2>{planet.name}</h2>
      </Link>
      <p>{planet.description}</p>
      <p><strong>{planet.isDestroyed ? "Destruido" : "Intacto"}</strong></p>
    </div>
  );
};

export default CardPlanet;