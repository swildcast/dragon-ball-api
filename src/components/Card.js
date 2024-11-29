import React from "react";
import { Link } from "react-router-dom";
import './Card.css';

const Card = ({ character }) => {
  return (
    <div className="card">
      <Link to={`/details/${character.id}`}>
        <img src={character.image} alt={character.name} />
        <h2>{character.name}</h2>
      </Link>
      <p>{character.description}</p>
      <p><strong>Ki:</strong> {character.ki}</p>
      <p><strong>Max Ki:</strong> {character.maxKi}</p>
      <p><strong>Raza:</strong> {character.race}</p>
      <p><strong>Género:</strong> {character.gender}</p>
      <p><strong>Asociación:</strong> {character.affiliation}</p>
    </div>
  );
};

export default Card;