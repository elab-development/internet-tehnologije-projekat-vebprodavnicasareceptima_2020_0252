import React from "react";
import { Link } from 'react-router-dom';
import '../style/recept.css';

function Recept({ receptId, naziv, tekst, slika, namirnice,sastojci }) {
  
  const naziviSastojaka = sastojci.map(idSastojka => {
    const namirnica = namirnice.find(n => n.id === idSastojka);
    return namirnica ? namirnica.naziv : 'Nepoznata namirnica';
  });
  
  
  return (
    <div className="recept">
      <div className="recept_naziv">
        <p>{naziv}</p>
      </div>
      <div className="recept_sadrzaj">
        {slika && (
          <img src={slika} alt="slika recepta" className="recept_slika" />
        )}
        <div className="recept_sastojci">
          <p>Sastojci:</p>
          <div className="sastojci_container">
          <ul className="lista_bez_tackica">
            {naziviSastojaka.map((nazivSastojka, index) => (
              <li key={index}>{nazivSastojka}</li>
            ))}
          </ul>
          </div>
        </div>
        <Link className="prikazi" to={`/recepti/${receptId}`}>Prikaži detaljnije</Link>
       
      </div>
    </div>
  );
}

export default Recept;
