import React from 'react';
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/registracija.css';
import InputField from './InputField.jsx';
import ReusableDugme from './ReusableDugme.jsx';
import axios from 'axios';
import DOMPurify from 'dompurify';






const RegistracijaForm = ({onRegistracija}) => {
    const navigate = useNavigate();
   
    


//konstante
  const [ime, setIme] = useState('');
  const [prezime, setPrezime] = useState('');
  const [adresa, setAdresa] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  axios.defaults.withCredentials = true;
  const handleRegistracija = () => {

    const cleanIme = DOMPurify.sanitize(ime);
    const cleanPrezime = DOMPurify.sanitize(prezime);
    const cleanAdresa = DOMPurify.sanitize(adresa);
    const cleanEmail = DOMPurify.sanitize(email);
    const cleanPassword = DOMPurify.sanitize(password);
    // Kreiramo objekat sa podacima za registraciju
    const userData = {
      Ime: cleanIme,
      Prezime: cleanPrezime,
      Adresa: cleanAdresa,
      Email: cleanEmail,
      password: cleanPassword,
      uloga : "ulogovani",
    };

    axios.post('http://127.0.0.1:8000/api/registracija', userData)
  .then(response => {
    // Proveri da li je odgovor uspešan
    if (response.data.Korisnik && response.data.Token) {
      // Uspesna registracija, čuvanje tokena i navigacija
      localStorage.setItem('token', response.data.Token);
      alert('Uspesno ste se registrovali!');
      navigate('/');
    } else {
      throw new Error('Nepotpun odgovor sa servera.');
    }
  })
  .catch(error => {
    // Obrada grešaka sa servera
    if (error.response) {
      if (error.response.status === 422) {
        // Greška u validaciji
        alert(Object.values(error.response.data)[0]);
      } else if (error.response.status === 500) {
        // Greška na serveru
        alert(error.response.data.error || 'Došlo je do greške prilikom registracije.');
      } else {
        // Drugi status kodovi
        alert('Došlo je do greške prilikom registracije.');
      }
    } else if (error.request) {
      // Zahtev je poslat, ali nema odgovora
      alert('Nema odgovora od servera.');
    } else {
      // Nešto je pošlo po zlu prilikom kreiranja zahteva
      alert('Greška prilikom slanja zahteva.');
    }
  });
  };
  
  return (
    <div className="scroll-bg">
    <div className="reg_forma">
      <div className="reg_forma_naslov">
        <h2>Registracija</h2>
      </div>

      <div className="reg_forma_ime">
       
        
        <InputField
        label="Ime"
        id="ime"
        type="text"
        placeholder="Ime"
        value={ime}
        onChange={(e) => setIme(e.target.value)}
      />
      </div>

      <div className="reg_forma_prezime">
       
      
        <InputField
        label="Prezime"
        id="prezime"
        type="text"
        placeholder="Prezime"
        value={prezime}
        onChange={(e) => setPrezime(e.target.value)}
      />
      </div>

      <div className="reg_forma_adresa">
       
        
        <InputField
        label="Adresa"
        id="adresa"
        type="text"
        placeholder="Adresa"
        value={adresa}
        onChange={(e) => setAdresa(e.target.value)}
      />
      </div>

      <div className="reg_forma_email">
      
      <InputField
        label="Email"
        id="Email"
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      </div>

      <div className="reg_forma_lozinka">
     
      <InputField
        label="Lozinka"
        id="password"
        type="password"
        placeholder="Lozinka"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      </div>

      <br />
      <ReusableDugme label="Registruj se" onClick={handleRegistracija} />
   
    </div>
    </div>
  );


};
export default RegistracijaForm;