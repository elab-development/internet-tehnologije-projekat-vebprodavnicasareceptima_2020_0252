import React, { useState } from "react";
import slika1 from "../assets/palacinke.jpg";
import slika2 from "../assets/salata1.jpg";
import slika3 from "../assets/hleb.jpg";
import slika4 from "../assets/pilet.jpg";
import Filter from "./Filter";
import Recept from "./Recept";

function Recepti({ kriterijum, dodajUKorpu, pretrazi, namirnice }) {
  const postsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);

  const recepti = [
    {
      id: 1,
      naziv: "Palačinke",
      tekst:
        "Jaja mutiti sa vodom i mljekom Pa dodati Brasno pomjesano sa kakaom i mutiti toliko dok se sve fino ne sjedini. Pustiti da miruje nekih 20 Minuta Pa prziti palacinke. Sluziti po zelji sa cokoladnim sosom i marmeladom od kajsija su najukusnije.",
      slika:
        slika1 /* sastojci:[namirnice.at(6),namirnice.at(4),namirnice.at(5),namirnice.at(7),namirnice.at(15),namirnice.at(18)]*/,
    },
    {
      id: 2,
      naziv: "Salata sa piletinom",
      tekst:
        "Pileće meso se začini i ispeče..U širok tanjir ili na poslužavnik se kao podloga stavlja zelena salata, a preko toga se ređaju ostale komponente.Stavite seckanu piletinu u sredinu. Oko nje rasporedite nasečeno kuvano jaje, paradajz, i sir.Salata je ukrašena sa pola glavice luka, isečene na kolutove. Neposredno pre serviranja začiniti.",
      slika:
        slika2 /*sastojci:[namirnice.at(9),namirnice.at(8),namirnice.at(11),namirnice.at(14),namirnice.at(15)]*/,
    },
    {
      id: 3,
      naziv: "Domaći hleb",
      tekst:
        "Brasno prosejati i sipati u posudu za mesenje.U sredini brasna izmrviti kvasac dodati so i secer.Sipati mlaku vodu i zamesiti testo.Testo mora da bude meko.Ostaviti da nadodje , pa jos jednom premesiti i ponovo ostaviti da nadodje.Jos jednom premesiti i sipati u dobro modmazan pleh.Po vrhu izbosti testo sa viljuskom na vise mesta.Peci u dobro zagrejanoj rerni na 220c",
      slika:
        slika3 /*sastojci:[namirnice.at(4),namirnice.at(20),namirnice.at(16),namirnice.at(12)]*/,
    },
    {
      id: 4,
      naziv: "Piletina sa pirinčem",
      tekst:
        "Propržiti piletinu da porumeni, skloniti je sa vatre u tanjir, a u šerpi gde se pržila piletina stavimo iseckani crni luk. Dodati i sve začine, sipati oprani pirinač i naliti čašom (2 dl) vode.Staviti da se peče oko 40 minuta dok se pirinač dobro ne ispeče.",
      slika:
        slika4 /*sastojci:[namirnice.at(10),namirnice.at(14),namirnice.at(8)]*/,
    },
  ];

  const [allRecepti, setAllRecepti] = useState(recepti);

  // Funkcija za filtriranje
  const filterRecepti = () => {
    return kriterijum
      ? allRecepti.filter((recepti) =>
          recepti.naziv.toLowerCase().startsWith(kriterijum.toLowerCase())
        )
      : allRecepti;
  };

  // Funkcija za paginaciju
  const paginateRecepte = (recepti) => {
    const startIndex = currentPage * postsPerPage;
    return recepti.slice(startIndex, startIndex + postsPerPage);
  };

  // Prikaz usluga na osnovu trenutnih stranica i filtriranja
  const displayRecepte = paginateRecepte(filterRecepti());

  // Funkcija za promenu stranice
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div class="scroll-bg">
      <Filter pretrazi={pretrazi} />
      <div className="receptiStranica">
        <div className="recepti">
          {displayRecepte.map((recepti) => (
            <Recept
              key={recepti.id}
              receptId={recepti.id}
              naziv={recepti.naziv}
              slika={recepti.slika}
              /*sastojci={recepti.sastojci}*/
            />
          ))}
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
