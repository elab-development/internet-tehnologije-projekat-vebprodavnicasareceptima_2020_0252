import React from "react";

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
        <button className="namirnica_dugme">Prikaži detaljnije</button>
      </div>
    </div>
  );
}

export default Recept;
