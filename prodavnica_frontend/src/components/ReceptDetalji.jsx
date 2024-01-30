// ReceptDetalji.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Namirnica from './Namirnica';
import '../style/receptdetalji.css';

function ReceptDetalji({ recepti, namirnice,dodajUKorpu }) {
    let { id } = useParams();
    let odabraniRecept = recepti.find((recept) => recept.id === parseInt(id));
  
    if (!odabraniRecept) {
      return <div>Recept nije pronađen.</div>;
    }
  
    let sastojci = odabraniRecept.sastojci.map((idSastojka) =>
      namirnice.find((namirnica) => namirnica.id === idSastojka)
    );

    const dodajSveUKorpu = () => {
        sastojci.forEach(sastojak => {
          dodajUKorpu({
            id: sastojak.id,
            naziv: sastojak.naziv,
            cena: sastojak.cena,
            velicina: sastojak.velicina_pakovanja,
            slika: sastojak.slika
          });
        });
      };
  
    return (
      <div>
        <div className="recept_detalji_info">
          <div className="recept_detalji_levideo">
        <h1>{odabraniRecept.naziv}</h1>
        <img className="recept_slicica" src={odabraniRecept.slika} alt={odabraniRecept.naziv} />
        </div>
        <div className="recept_detalji_desnideo">
          <p>{odabraniRecept.tekst}</p>
          </div>
        </div>
        <div className="recept_detalji_sastojci">
        <div  >
          <h2 id="naslov">Sastojci:</h2>
        </div>
        <div className="recept_detalji_lista">
          {sastojci.map((sastojak, index) => (
            <div className="recept_detalji_divic" key={index}>
             
              <Namirnica 
                key={sastojak.id}
                namirnicaId={sastojak.id}
                naziv={sastojak.naziv}
                slika={sastojak.slika}
                opis={sastojak.opis}
                cena={sastojak.cena}
                velicina_pakovanja={sastojak.velicina_pakovanja}
                dodajUKorpu={dodajUKorpu}
              
              />
            </div>
          ))}
        </div>
        <div className="recept_detalji_dugme">
          <button className="recept_detalji_dugmence" onClick={dodajSveUKorpu}>Dodaj sve namirnice u korpu</button>
        </div>
      </div>
    </div>
    );
  }
  
  export default ReceptDetalji;