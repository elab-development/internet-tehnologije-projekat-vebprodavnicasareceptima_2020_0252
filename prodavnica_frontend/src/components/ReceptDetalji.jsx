// ReceptDetalji.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Namirnica from './Namirnica'; //

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
        <h1>{odabraniRecept.naziv}</h1>
        <img src={odabraniRecept.slika} alt={odabraniRecept.naziv} />
        <p>{odabraniRecept.tekst}</p>
        <h2>Sastojci:</h2>
        <div>
          {sastojci.map((sastojak, index) => (
            <div key={index}>
             
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
        <div>
     
      <button onClick={dodajSveUKorpu}>Dodaj sve namirnice u korpu</button>
    </div>
      </div>
    );
  }
  
  export default ReceptDetalji;