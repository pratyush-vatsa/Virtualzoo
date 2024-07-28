import React from 'react';
import './Animal.css';
import { NavLink } from 'react-router-dom';

const AnimalCard = ({ name, species, habitat, image, found, Url }) => {
  
  return (
    <NavLink to={Url} className="nav-link px-2 text-white">
      <div className="animal-card">
        <img src={image} alt={name} />
        <div className="animal-info">
          <h2 style={{ textAlign: "center" }}>{name}</h2>
          <p className='pp'><strong>Species:</strong> {species}</p>
          <p className='pp'><strong>Habitat:</strong> {habitat}</p>
          <p className='pp'><strong>Found:</strong> {found}</p>
        </div>
      </div>
    </NavLink>
  );
}

export default AnimalCard;
