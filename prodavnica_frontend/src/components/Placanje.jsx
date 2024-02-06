import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Placanje({ korpa, user,ukupno }) {

    const [transakcijaDetalji, setTransakcijaDetalji] = useState(null);

    function kreirajNizIdIzKorpe(korpa) {
        let nizId = [];
        korpa.forEach(stavka => {
          for (let i = 0; i < stavka.kolicina; i++) {
            nizId.push(stavka.id);
          }
        });
        return nizId;
      }

    console.log(kreirajNizIdIzKorpe(korpa))
  const [adresa, setAdresa] = useState(user.Adresa);

  const handleAdresaChange = (e) => {
    setAdresa(e.target.value);
  };

  const handleAdresaUpdate = () => {
   
    const params = new URLSearchParams();
    params.append('Adresa', adresa);

    axios.post(`http://127.0.0.1:8000/api/korisnici/izmeni/${user.id}`, params)
    .then((response) => {
      // Obradite uspešan odgovor
      console.log(response.data);
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
        console.log(response.data);
        setTransakcijaDetalji(response.data.detalji);
        alert('Transakcija uspešno procesirana!');
        // Ovde možete očistiti stanje korpe ili navigirati korisnika na drugu stranicu
      })
      .catch(error => {
        // Neuspela transakcija
        console.error('Došlo je do greške', error.response);
        alert('Greška prilikom transakcije!');
      });
  }
  

  return (
    <div className="placanje">
      <h2>Detalji Plaćanja</h2>
      <p>Ime: {user.Ime}</p>
      <p>Prezime: {user.Prezime}</p>
      <p>Email: {user.Email}</p>
     
      <p>Adresa: {user.Adresa}</p>
      <p>Ukupna cena: {korpa.ukupna_cena}</p>
      
      <div>
        <label htmlFor="novaAdresa">Promeni adresu:</label>
        <input
          type="text"
          id="novaAdresa"
          value={adresa}
          onChange={handleAdresaChange}
        />
        <button onClick={handleAdresaUpdate}>Ažuriraj adresu</button>
      </div>

      <button onClick={handleTransakcija}>Potvrdi</button>
      
      {transakcijaDetalji && (
        <div>
          <h3>Detalji transakcije:</h3>
          <p>Namirnice: {transakcijaDetalji.namirnice_nazivi}</p>
          <p>Ukupna cena: {transakcijaDetalji.ukupna_cena}</p>
        </div>
      )}
      {/* Ovde možete dodati prikaz stavki korpe ako je potrebno */}
    </div>
  );
}

export default Placanje;
