import React, { useState, useEffect } from "react";
import Namirnica from "./Namirnica";
import "../style/namirnice.css";
import Filter from "./Filter";

function Namirnice({ kriterijum, dodajUKorpu, pretrazi, namirnice }) {
  const postsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);

  const [allNamirnice, setAllNamirnice] = useState(namirnice);
  useEffect(() => {
    // Resetujemo na prvu stranicu svaki put kada se promeni kriterijum
    setCurrentPage(0);
  }, [kriterijum]); 

  // Funkcija za filtriranje
  const filterNamirnice = () => {
    return kriterijum
      ? allNamirnice.filter((namirnice) =>
          namirnice.naziv.toLowerCase().startsWith(kriterijum.toLowerCase())
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
      <Filter pretrazi={pretrazi} />
      <div className="namirniceStranica">
        <div className="namirnice">
          {displayNamirnice.map((namirnice) => (
            <Namirnica
              key={namirnice.id}
              namirnicaId={namirnice.id}
              naziv={namirnice.naziv}
              slika={namirnice.slika}
              opis={namirnice.opis}
              cena={namirnice.cena}
              velicina_pakovanja={namirnice.velicina_pakovanja}
              kategorijaId={namirnice.kategorijaId}
              dodajUKorpu={dodajUKorpu}
            />
          ))}
        </div>
        <div className="pagination">
          {Array.from({
            length: Math.ceil(filterNamirnice().length / postsPerPage),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index)}
              className={currentPage === index ? "active" : ""}
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
