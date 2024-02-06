// ReceptDetalji.jsx
import React from "react";
import { useParams } from "react-router-dom";
import Namirnica from "./Namirnica";
import "../style/receptdetalji.css";
import axios from "axios";

function ReceptDetalji({ recepti, namirnice, dodajUKorpu, user }) {
  let { id } = useParams();

  let odabraniRecept = recepti.find((recept) => recept.id === parseInt(id));
  console.log(odabraniRecept);

  if (!odabraniRecept) {
    return <div>Recept nije pronađen.</div>;
  }

  let sastojci = odabraniRecept.stavka_recept.map((stavka) =>
    stavka.namirnica ? stavka.namirnica : "Nepoznata namirnica"
  );
  console.log(sastojci);

  const dodajSveUKorpu = () => {
    if (user === "neulogovan") {
      alert("Morate se ulogovati da biste dodali namirnicu u korpu.");
    } else {
      sastojci.forEach((sastojak) => {
        dodajUKorpu({
          id: sastojak.id,
          naziv: sastojak.naziv,
          cena: sastojak.cena,
          velicina: sastojak.velicina_pakovanja,
          slika: require(`../${sastojak.slika_path}`),
        });
      });
    }
  };

  const sacuvajUdPDF = () => {
    if (user === "neulogovan") {
      alert("Morate se ulogovati da biste sačuvali recept u PDF-u.");
    } else {
      axios
        .get(`http://127.0.0.1:8000/api/recepti/pdf?id=${odabraniRecept.id}`, {
          responseType: "blob",
        })
        .then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", `recept-${odabraniRecept.id}.pdf`);
          document.body.appendChild(link);
          link.click();
        })
        .catch((error) => {
          console.error("Greška prilikom generisanja PDF-a:", error);
        });
    }
  };

  return (
    <div>
      <div className="recept_detalji_info">
        <div className="recept_detalji_levideo">
          <h1>{odabraniRecept.naziv}</h1>
          <img
            className="recept_slicica"
            src={require(`../${odabraniRecept.slika_path}`)}
            alt={odabraniRecept.naziv}
          />
          <button onClick={sacuvajUdPDF}>Sačuvaj u PDF-u</button>
        </div>
        <div className="recept_detalji_desnideo">
          <p>{odabraniRecept.tekst}</p>
        </div>
      </div>
      <div className="recept_detalji_sastojci">
        <div>
          <h2 id="naslov">Sastojci:</h2>
        </div>
        <div className="recept_detalji_lista">
          {sastojci.map((sastojak, index) => (
            <div className="recept_detalji_divic" key={index}>
              <Namirnica
                key={sastojak.id}
                namirnicaId={sastojak.id}
                naziv={sastojak.naziv}
                slika={require(`../${sastojak.slika_path}`)}
                opis={sastojak.opis}
                cena={sastojak.cena}
                velicina_pakovanja={sastojak.velicina_pakovanja}
                dodajUKorpu={dodajUKorpu}
                user={user}
              />
            </div>
          ))}
        </div>
        <div className="recept_detalji_dugme">
          <button className="recept_detalji_dugmence" onClick={dodajSveUKorpu}>
            Dodaj sve namirnice u korpu
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReceptDetalji;
