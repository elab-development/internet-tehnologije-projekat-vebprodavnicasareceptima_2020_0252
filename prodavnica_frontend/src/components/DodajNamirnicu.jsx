import React, { useState } from 'react';
import axios from 'axios'; // Uvoz axios-a
import '../style/dodajnamirnicu.css';
import DOMPurify from 'dompurify';

function DodajNamirnicuForm({}) {

  const [naziv, setNaziv] = useState('');
  const [opis, setOpis] = useState('');
  const [cena, setCena] = useState('');
  const [velicinaPakovanja, setVelicinaPakovanja] = useState('');

  const [slika, setSlika] = useState(null);

  const handleSlikaChange = (e) => {
    setSlika(e.target.files[0]);
  };


  const dodajNovuNamirnicu = (naziv, opis, cena, velicinaPakovanja,slikaNaziv) => {

    const cleanNaziv = DOMPurify.sanitize(naziv);
    const cleanOpis = DOMPurify.sanitize(opis);
    const cleanCena = DOMPurify.sanitize(cena);
    const cleanVelicina = DOMPurify.sanitize(velicinaPakovanja);
    // Kreiranje parametara za POST zahtev
    const params = new URLSearchParams();
    params.append('naziv', cleanNaziv);
    params.append('opis', cleanOpis);
    params.append('cena', cleanCena);
    params.append('velicina_pakovanja', cleanVelicina);
    params.append('slika_path', `assets/${slikaNaziv}`);
  
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
    let slikaNaziv = slika ? slika.name : '';
  
    if (slika) {
      formData.append('slika', slikaNaziv);
    }

    dodajNovuNamirnicu(naziv,opis,cena,velicinaPakovanja,slikaNaziv);
    if (slika) {
        uploadSlike(slika);
      }
  };


  const uploadSlike = (slikaFajl) => {
    const formData = new FormData();
    formData.append('slika', slikaFajl); // Dodajte sliku u FormData
  
    const url = 'http://127.0.0.1:8000/api/upload-slika'; // Ažurirajte sa tačnim URL-om za upload slike
  
    // Slanje POST zahteva na server koristeći axios
    axios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response) => {
      console.log(response.data);
      alert('Slika uspešno uploadovana!');
    })
    .catch((error) => {
      console.error('Došlo je do greške prilikom uploada slike:', error.response);
      alert('Greška prilikom uploada slike!');
    });
  };


  
  return (
    <form  className="formica" onSubmit={handleSubmit}>
      <p className='naslov_formica'>Unesite podatke o namirnici:</p>
      <input className="dodaj_polje"
        type="text"
        placeholder="Naziv"
        value={naziv}
        onChange={(e) => setNaziv(e.target.value)}
        required
      />
      <textarea className="dodaj_text"
        placeholder="Opis"
        value={opis}
        onChange={(e) => setOpis(e.target.value)}
        required
      />
      <input className="dodaj_polje"
        type="number"
        placeholder="Cena"
        value={cena}
        onChange={(e) => setCena(e.target.value)}
        required
      />
      <input className="dodaj_polje"
        type="text"
        placeholder="Veličina pakovanja"
        value={velicinaPakovanja}
        onChange={(e) => setVelicinaPakovanja(e.target.value)}
        required
      />
      
      <input className="dodaj_fajl"
        type="file"
        onChange={handleSlikaChange}
      />
      <button className="dodaj_dugmence" type="submit">Dodaj Namirnicu</button>
    </form>
  );
}

export default DodajNamirnicuForm;
