import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../style/placanje.css";


function Placanje({ korpa, user,ukupno,valuta,ukupnoUValuti,recepti,ocistiKorpu }) {
   




    const [transakcijaDetalji, setTransakcijaDetalji] = useState(null);
    const [poklapajuciRecept, setPoklapajuciRecept] = useState([]);


    function kreirajNizIdIzKorpe(korpa) {
        let nizId = [];
        korpa.forEach(stavka => {
          for (let i = 0; i < stavka.kolicina; i++) {
            nizId.push(stavka.id);
          }
        });
        return nizId;
      }
      function jedinstveniNiz(korpa) {
        let nizId = [];
        korpa.forEach(stavka => {
          for (let i = 0; i < stavka.kolicina; i++) {
            nizId.push(stavka.id);
          }
        });
        let jedinstveniNizId = [...new Set(nizId)];
  return jedinstveniNizId;
      }

    
  const [adresa, setAdresa] = useState(user.Adresa);

  const handleAdresaChange = (e) => {
    setAdresa(e.target.value);
  };

  const handleAdresaUpdate = () => {
   
    const params = new URLSearchParams();
    params.append('Adresa', adresa);

    axios.put(`http://127.0.0.1:8000/api/korisnici/izmeni/${user.id}`, params)
    .then((response) => {
      
      
      alert('Adresa uspešno ažurirana!');
    })
    .catch((error) => {
      // Obradite grešku prilikom slanja zahteva
      console.error('Došlo je do greške', error.response);
      alert('Greška prilikom promene adrese!');
    });
  };


  function handleTransakcija() {
    // Kreiramo niz ID-eva namirnica na osnovu količine svake namirnice u korpi
    const stavkeNiz = kreirajNizIdIzKorpe(korpa);
  
    // Pripremamo objekat sa podacima za transakciju
    const transakcijaData = {
      korisnikId: user.id,
      ukupnaCena: ukupno,
      stavkeNiz: stavkeNiz,
    };
  
    // Slanje POST zahteva za obradu transakcije
    axios.post('http://127.0.0.1:8000/api/korpa/transakcija', transakcijaData)
      .then(response => {
        // Uspesna transakcija
        
        setTransakcijaDetalji(response.data.detalji);
        alert('Transakcija uspešno procesirana!');
        let niz = jedinstveniNiz(korpa)
       
        izracunajPoklapanja(recepti,niz)
        ocistiKorpu();
      })
      .catch(error => {
        // Neuspela transakcija
        console.error('Došlo je do greške', error.response);
        alert('Greška prilikom transakcije!');
      });
  }
  
  const izracunajPoklapanja = (recepti, kupljeneNamirniceId) => {
    let najvisePoklapanja = 0;
    let receptSaNajvisePoklapanja = null;
  
    recepti.forEach(recept => {
      let brojPoklapanja = 0;
      recept.stavka_recept.forEach(stavka => {
        // Koristimo namirnica_id za poređenje sa ID-evima namirnica iz korpe
        if (kupljeneNamirniceId.includes(stavka.namirnica_id)) {
          brojPoklapanja++;
        }
      });
      console.log(brojPoklapanja);
      if (brojPoklapanja > najvisePoklapanja) {
        najvisePoklapanja = brojPoklapanja;
        receptSaNajvisePoklapanja = recept;
        console.log(recept);
      }
    });
    console.log(receptSaNajvisePoklapanja);
    setPoklapajuciRecept(receptSaNajvisePoklapanja);
  };
  
  useEffect(() => {
    if (poklapajuciRecept) {
      console.log('Poklapajući recept:', poklapajuciRecept);
    
      // Ovde možete uraditi dodatne akcije sa poklapajućim receptom
    }
  }, [poklapajuciRecept]);
  

  const sacuvajUdPDF = () => {
    if (user === "neulogovan") {
      alert("Morate se ulogovati da biste sačuvali recept u PDF-u.");
    } else {
      axios
        .get(`http://127.0.0.1:8000/api/recepti/pdf?id=${poklapajuciRecept.id}`, {
          responseType: "blob",
        })
        .then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", `recept-${poklapajuciRecept.id}.pdf`);
          document.body.appendChild(link);
          link.click();
        })
        .catch((error) => {
          console.error("Greška prilikom generisanja PDF-a:", error);
        });
    }
  };
  

  return (
    <div className='najveci_div'>
    <div className="placanje">
      <div className="placanje_user_info">
      <h2>Detalji Plaćanja</h2>
      <p>Ime: {user.Ime}</p>
      <p>Prezime: {user.Prezime}</p>
      <p>Email: {user.Email}</p>
      <p>Adresa: {user.Adresa}</p>
      </div>
      <p className='cena'>Ukupna cena: {valuta === 'RSD' ? ukupno.toFixed(2) : ukupnoUValuti.toFixed(2)} {valuta}</p>
      <div className='promeni_adresu'>
        <label htmlFor="novaAdresa">Promeni adresu:</label>
        <input className='adresa_polje'
          type="text"
          id="novaAdresa"
          value={adresa}
          onChange={handleAdresaChange}
        />
        <button className='dugme_adresa' onClick={handleAdresaUpdate}>Ažuriraj adresu</button>
      </div>

      <button className='dugme_transakcija' onClick={handleTransakcija}>Potvrdi</button>
    </div>
    {transakcijaDetalji && (
    <div className='recept_nmg'>
        <h2 className='naslovcic'>Naš predlog recepta:</h2>
       {poklapajuciRecept ? 
       <div className='info_o_receptu'>
        <p className='receptic_naziv'>{poklapajuciRecept.naziv}</p>
        <p>Namirnice: {transakcijaDetalji.namirnice_nazivi}</p>
        <p className='receptic_tekstic'>{poklapajuciRecept.tekst}</p>
        <button className="pdf_dugme" onClick={sacuvajUdPDF}>Sačuvaj u PDF-u</button>
        </div>
         : <p className='nema'>Nema predloga recepta</p>} 
    </div>
    )}
    </div>
  );
}

export default Placanje;
