import React from 'react';
import './Plant.css';

const PlantCard = ({ name, species, habitat, image ,found}) => {
  return (
    <div className="plant-card">
      <img src={image} alt={name} />
      <div className="plant-info">
        <h2 style={{textAlign:"center"}}>{name}</h2>
        <p><strong>Species:</strong> {species}</p>
        <p><strong>Habitat:</strong> {habitat}</p>
        <p><strong>Found:</strong> {found}</p>
      </div>
    </div>
  );
}

export default PlantCard;
