import React from "react";
import './CardId.css';

const CardId = ({ character }) => {
  return (
    <div className="character-details">
      <div className="character-header">
        <img src={character.image} alt={character.name} className="character-image" />
        <div className="character-info">
          <h2>{character.name}</h2>
          <p><strong>Ki:</strong> {character.ki}</p>
          <p><strong>Max Ki:</strong> {character.maxKi}</p>
          <p><strong>Raza:</strong> {character.race}</p>
          <p><strong>Género:</strong> {character.gender}</p>
          <p><strong>Descripción:</strong> {character.description}</p>
          <p><strong>Asociación:</strong> {character.affiliation}</p>
          <p><strong>Planeta de origen:</strong> {character.originPlanet.name}</p>
          <img src={character.originPlanet.image} alt={character.originPlanet.name} className="planet-image" />
        </div>
      </div>
      <div className="character-transformations">
        {character.transformations && character.transformations.length > 0 && (
          <>
            <h3>Transformaciones:</h3>
            <div className="transformations-list">
              {character.transformations.map((transformation) => (
                <div key={transformation.id} className="transformation-card">
                  <img src={transformation.image} alt={transformation.name} />
                  <p><strong>{transformation.name}</strong></p>
                  <p><strong>Ki:</strong> {transformation.ki}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CardId;