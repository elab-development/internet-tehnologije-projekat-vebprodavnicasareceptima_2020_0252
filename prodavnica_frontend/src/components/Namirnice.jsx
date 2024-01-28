import React, { useState } from 'react';
import Namirnica from './Namirnica';
import slika1 from '../assets/jabuke.jpg';
import slika2 from '../assets/krompir.jpg';
import slika3 from '../assets/mleko.jpg';
import slika4 from '../assets/cokolada.jpg';
import slika5 from '../assets/brasno.jpg';
import '../style/namirnice.css';


function Namirnice({ kriterijum }) {
    const postsPerPage = 3;
    const [currentPage, setCurrentPage] = useState(0);

    const kategorije=[
        {id:1, naziv:'Voće i povrće'},
        {id:2, naziv:'Mlečni proizvodi'},
        {id:3, naziv:'Osnovne namirnice'},
        {id:4, naziv:'Slatki i slani konditori'}
    ]
  
    const namirnice = [
      { id: 1, naziv: 'Jabuka', opis: 'Jabuka Ajdared domaća', cena: 100, slika: slika1,velicina_pakovanja:"1kg", kategorijaId:kategorije.at(1)},
      { id: 2, naziv: 'Krompir', opis: 'Krompir crveni opran', cena: 130, slika: slika2, velicina_pakovanja:"1kg", kategorijaId:kategorije.at(1) },
      { id: 3, naziv: 'Čokolada', opis: 'Čokolada za kuvanje ', cena: 130, slika: slika4, velicina_pakovanja:"100g", kategorijaId:kategorije.at(4)},
      { id: 4, naziv: 'Brašno', opis: 'Brašno pšenicno T-400 meko', cena: 80, slika: slika5, velicina_pakovanja:"1kg", kategorijaId:kategorije.at(2) },
      { id: 5, naziv: 'Mleko', opis: 'Mleko ster.2.8%mm', cena: 152, slika: slika3,velicina_pakovanja:"1l", kategorijaId:kategorije.at(3)},
    ];
  
    const [allNamirnice, setAllNamirnice] = useState(namirnice);
  
  
    // Funkcija za filtriranje
    const filterNamirnice = () => {
      return kriterijum
        ? allNamirnice.filter((namirnice) =>
            namirnice.naziv.toLowerCase().includes(kriterijum.toLowerCase())
          )
        : allNamirnice;
    };
  
    // Funkcija za paginaciju
    const paginateNamirnice = (namirnice) => {
      const startIndex = currentPage * postsPerPage;
      return namirnice.slice(startIndex, startIndex + postsPerPage);
    };
  
    // Prikaz usluga na osnovu trenutnih stranica i filtriranja
    const displayNamirnice = paginateNamirnice(filterNamirnice());
  
    // Funkcija za promenu stranice
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
  
    return (
        <div class="scroll-bg">
      <div className='namirniceStranica'>
        <div className="namirnice">
          {displayNamirnice.map((namirnice) => (
            <Namirnica
              
              namirnicaId={namirnice.id}
              naziv={namirnice.naziv}
              slika={namirnice.slika}
              opis={namirnice.opis}
              cena={namirnice.cena}
              velicina_pakovanja={namirnice.velicina_pakovanja}
              kategorijaId={namirnice.kategorijaId}
            />
          ))}
        </div>
        <div className="pagination">
          {Array.from({ length: Math.ceil(filterNamirnice().length / postsPerPage) }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index)}
              className={currentPage === index ? 'active' : ''}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      </div>
    );
  }
  
  export default Namirnice;