import React, { useState } from 'react';
import axios from 'axios'; // Uvoz axios-a

function DodajNamirnicuForm({}) {

  const [naziv, setNaziv] = useState('');
  const [opis, setOpis] = useState('');
  const [cena, setCena] = useState('');
  const [velicinaPakovanja, setVelicinaPakovanja] = useState('');

  const [slika, setSlika] = useState(null);

  const handleSlikaChange = (e) => {
    setSlika(e.target.files[0]);
  };


  const dodajNovuNamirnicu = (naziv, opis, cena, velicinaPakovanja) => {
    // Kreiranje parametara za POST zahtev
    const params = new URLSearchParams();
    params.append('naziv', naziv);
    params.append('opis', opis);
    params.append('cena', cena);
    params.append('velicina_pakovanja', velicinaPakovanja);
  
    // Pošaljite POST zahtev na server koristeći axios
    axios.post('http://127.0.0.1:8000/api/namirnice/dodaj', params)
      .then((response) => {
        // Obradite uspešan odgovor
        console.log(response.data);
        alert('Namirnica uspešno dodata!');
      })
      .catch((error) => {
        // Obradite grešku prilikom slanja zahteva
        console.error('Došlo je do greške', error.response);
        alert('Greška prilikom dodavanja namirnice!');
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('naziv', naziv);
    formData.append('opis', opis);
    formData.append('cena', cena);
    formData.append('velicina_pakovanja', velicinaPakovanja);
  
    if (slika) {
      formData.append('slika', slika);
    }

    dodajNovuNamirnicu(naziv,opis,cena,velicinaPakovanja);
  };

  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Naziv"
        value={naziv}
        onChange={(e) => setNaziv(e.target.value)}
        required
      />
      <textarea
        placeholder="Opis"
        value={opis}
        onChange={(e) => setOpis(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Cena"
        value={cena}
        onChange={(e) => setCena(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Veličina pakovanja"
        value={velicinaPakovanja}
        onChange={(e) => setVelicinaPakovanja(e.target.value)}
        required
      />
      
      <input
        type="file"
        onChange={handleSlikaChange}
      />
      <button type="submit">Dodaj Namirnicu</button>
    </form>
  );
}

export default DodajNamirnicuForm;
