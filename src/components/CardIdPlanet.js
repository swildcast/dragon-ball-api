import React from "react";
import './CardIdPlanet.css';

const CardIdPlanet = ({ planet }) => {
  return (
    <div className="planet-details">
      <div className="planet-header">
        <img src={planet.image} alt={planet.name} className="planet-image" />
        <div className="planet-info">
          <h2>{planet.name}</h2>
          <p><strong>Descripción:</strong> {planet.description}</p>
          <p><strong>Estado:</strong> {planet.isDestroyed ? "Destruido" : "Intacto"}</p>
        </div>
      </div>
      <div className="planet-characters">
        {planet.characters && planet.characters.length > 0 && (
          <>
            <h3>Personajes:</h3>
            <div className="characters-list">
              {planet.characters.map((character) => (
                <div key={character.id} className="character-card">
                  <img src={character.image} alt={character.name} />
                  <h4>{character.name}</h4>
                  <p><strong>Ki:</strong> {character.ki}</p>
                  <p><strong>Max Ki:</strong> {character.maxKi}</p>
                  <p><strong>Raza:</strong> {character.race}</p>
                  <p><strong>Genero:</strong> {character.gender}</p>
                  <p><strong>Descripción:</strong> {character.description}</p>
                  <p><strong>Asociación:</strong> {character.affiliation}</p>
                </div>
              ))}
            </div>
          </>
        )
        }
      </div>
    </div>
  );
};

export default CardIdPlanet;