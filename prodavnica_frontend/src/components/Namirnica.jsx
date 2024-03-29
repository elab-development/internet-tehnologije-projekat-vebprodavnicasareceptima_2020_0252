import React, { useContext } from 'react';
import '../style/namirnica.css';
import axios from 'axios';




function Namirnica({ namirnicaId, naziv, opis, slika, cena, velicina_pakovanja ,dodajUKorpu,user,valuta,kurs,ocistiKorpu}) {
  


  const handleDodajUKorpuClick = () => {
    if (user==='neulogovan') {
      alert("Morate se ulogovati da biste dodali namirnicu u korpu.");
    } else {
     
      dodajUKorpu({
        id: namirnicaId,
        naziv,
        cena,
        velicina: velicina_pakovanja,
        slika
      });
      alert("Uspešno dodato u korpu.");
    }
  };

  const handleObrisiClick = async () => {
    if (window.confirm('Da li ste sigurni da želite da obrišete ovu namirnicu?')) {
      try {
        const response = await axios.delete(`http://127.0.0.1:8000/api/namirnice/obrisi/${namirnicaId}`);
        console.log(response.data);
        alert('Namirnica je uspešno obrisana.');
        // Ovde treba ažurirati listu namirnica nakon brisanja
        ocistiKorpu();
      } catch (error) {
        console.error('Došlo je do greške prilikom brisanja namirnice:', error.response);
        alert('Greška prilikom brisanja namirnice!');
      }
    }
  };


  const renderCena = () => {
    if (valuta === "RSD") {
      return `${cena} RSD`;
    } else {
      const cenaInSelectedCurrency = (cena * kurs).toFixed(2);
      return `${cenaInSelectedCurrency} ${valuta}`;
    }
  };


    return (
      <div className="namirnica">
        <div className="namirnica_naziv">
          <p className='namirnica_naziv'>{naziv}</p>
        </div>
        <div className="namrinica_sadrzaj">


        {slika && <img src={slika} alt="slika namirnice" className="namirnica_slika" />}
        <p className="namirnica_opis">Opis: {opis}</p>
        
        <p className="namirnica_cena">Cena:{renderCena()}</p>

        <p className="namrinica_velicina_pakovanja">Veličina pakovanja: {velicina_pakovanja}</p>

        <button className="namirnica_dugme" onClick={handleDodajUKorpuClick}>
          Dodaj u korpu
        </button>
        {
          user.uloga === 'admin' && (
          <button onClick={handleObrisiClick} className="namirnica_obrisi">
          Obriši
          </button>
        )
      }
        </div>
      </div>
    );
}


export default Namirnica;