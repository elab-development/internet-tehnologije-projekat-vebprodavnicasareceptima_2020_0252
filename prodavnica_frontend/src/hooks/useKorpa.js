
import { useState, useCallback } from 'react';

const useKorpa = () => {
    const [korpa, setKorpa] = useState([]);
  
    const dodajUKorpu = useCallback(({ id, naziv, cena, velicina, slika }) => {
      setKorpa(trenutnaKorpa => {
        const postojecaStavka = trenutnaKorpa.find(stavka => stavka.id === id);
        if (postojecaStavka) {
          return trenutnaKorpa.map(stavka => 
            stavka.id === id ? { ...stavka, kolicina: stavka.kolicina + 1 } : stavka
          );
        } else {
          return [...trenutnaKorpa, { id, naziv, cena, velicina, slika, kolicina: 1 }];
        }
      });
    }, []);

  const ukloniIzKorpe = (id) => {
    setKorpa(trenutnaKorpa => {
      const stavka = trenutnaKorpa.find(stavka => stavka.id === id);
      if (stavka.kolicina > 1) {
        // Ako ima više od jednog proizvoda, smanji količinu
        return trenutnaKorpa.map(stavka =>
          stavka.id === id ? { ...stavka, kolicina: stavka.kolicina - 1 } : stavka
        );
      } else {
        // Ako ima samo jedan proizvod, ukloni stavku
        return trenutnaKorpa.filter(stavka => stavka.id !== id);
      }
    });
  };

  const ocistiKorpu = useCallback(() => setKorpa([]), []);
  

  return {
    korpa,
    dodajUKorpu,
    ukloniIzKorpe,
    ocistiKorpu
  };
};

export default useKorpa;
