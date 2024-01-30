import React from "react";
import { Link } from 'react-router-dom';

function Recept({ receptId, naziv, tekst, slika, sastojci }) {
  return (
    <div className="recept">
      <div className="recept_naziv">
        <p>{naziv}</p>
      </div>
      <div className="recept_sadrzaj">
        {slika && (
          <img src={slika} alt="slika recepta" className="recept_slika" />
        )}
        <p className="recept_sastojci">Sastojci: {sastojci}</p>
        <Link to={`/recepti/${receptId}`}>Prikaži detaljnije</Link>
      </div>
    </div>
  );
}

export default Recept;
