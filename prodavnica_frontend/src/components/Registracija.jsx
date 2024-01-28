import React from 'react';
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/registracija.css';





const RegistracijaForm = ({onRegistracija}) => {
    const navigate = useNavigate();


//konstante
  const [ime, setIme] = useState('');
  const [prezime, setPrezime] = useState('');
  const [adresa, setAdresa] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //staticki korisnici
  const staticki = [
    { email: 'luti@gmail.com', password: 'ninomi' },
    { email: 'nina@gmail.com', password: 'ninomi' }
  ];
  const handleRegistracija = () => {
   
    let dodatiKorisnici = JSON.parse(localStorage.getItem('users')) || [];
    const sviKorisnici = [...staticki, ...dodatiKorisnici]; 
    const postojeci = sviKorisnici.find(user => user.email === email);
    if (postojeci) {
      alert('Korisnik sa datim emailom već postoji.');
    } else {
        dodatiKorisnici  = [...dodatiKorisnici, { email, password }];
        localStorage.setItem('users', JSON.stringify(dodatiKorisnici));
     
      navigate('/');
    }
  };

  return (
    <div class="scroll-bg">
    <div className="reg_forma">
      <div className="reg_forma_naslov">
        <h2>Registracija</h2>
      </div>

      <div className="reg_forma_ime">
        <label htmlFor="ime">Ime:</label>
        <br />
        <input
          type="text"
          id="ime"
          placeholder='Ime'
          value={ime}
          onChange={(e) => setIme(e.target.value)}
        />
      </div>

      <div className="reg_forma_prezime">
        <label htmlFor="prezime">Prezime:</label>
        <br />
        <input
          type="text"
          id="prezime"
          placeholder='Prezime'
          value={prezime}
          onChange={(e) => setPrezime(e.target.value)}
        />
      </div>

      <div className="reg_forma_adresa">
        <label htmlFor="adresa">Adresa:</label>
        <br />
        <input
          type="text"
          id="adresa"
          placeholder='Adresa'
          value={adresa}
          onChange={(e) => setAdresa(e.target.value)}
        />
      </div>

      <div className="reg_forma_email">
      
        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="email"
          id="email"
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="reg_forma_lozinka">
     
        <label htmlFor="password">Lozinka:</label>
        <br />
        <input
          type="password"
          id="password"
          placeholder='Lozinka'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="reg_forma_dugme">
        <button className="reg_dugme" onClick={handleRegistracija}>Registruj se</button>
      </div>
    </div>
    </div>
  );


};
export default RegistracijaForm;