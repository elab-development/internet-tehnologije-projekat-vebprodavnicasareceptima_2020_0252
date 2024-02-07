import React, { useState,useEffect  } from "react";

import Filter from "./Filter";
import Recept from "./Recept";
import '../style/recepti.css';
import '../style/recept.css';


function Recepti({ kriterijum, dodajUKorpu, pretrazi, namirnice,recepti}) {
  const postsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);

  



  const [allRecepti, setAllRecepti] = useState(recepti);




  useEffect(() => {
    // Resetujemo na prvu stranicu svaki put kada se promeni kriterijum
    setCurrentPage(0);
  }, [kriterijum]); 

  // Funkcija za filtriranje
  const filterRecepti = () => {
    const filtered = kriterijum
      ? allRecepti.filter((recept) =>
          recept.naziv.toLowerCase().startsWith(kriterijum.toLowerCase())
        )
      : allRecepti;
    
    return filtered;
  };

  // Funkcija za paginaciju
  const paginateRecepte = (recepti) => {
    const startIndex = currentPage * postsPerPage;
    const paginated = recepti.slice(startIndex, startIndex + postsPerPage);
  
  return paginated;
  };

  // Prikaz usluga na osnovu trenutnih stranica i filtriranja
  const displayRecepte = paginateRecepte(filterRecepti());

  // Funkcija za promenu stranice
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
 
  return (
    <div >
      <Filter pretrazi={pretrazi} />
      <div className="receptiStranica">
      <div className="recepti">
  {displayRecepte.map((recepti) => {


    return (
      <Recept
        key={recepti.id}
        receptId={recepti.id}
        naziv={recepti.naziv}
        slika={require(`../${recepti.slika_path}`)}
        namirnice={namirnice}
        sastojci = {recepti.stavka_recept}
        //sastojci={recepti.sastojci}
        
      />
    );
  })}
</div>
        <div className="pagination">
          {Array.from({
            length: Math.ceil(filterRecepti().length / postsPerPage),
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

export default Recepti;
