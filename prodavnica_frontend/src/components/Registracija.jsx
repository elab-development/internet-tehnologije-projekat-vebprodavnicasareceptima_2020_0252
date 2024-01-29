import React from 'react';
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/registracija.css';
import InputField from './InputField.jsx';
import ReusableDugme from './ReusableDugme.jsx';







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
     alert('Uspesno ste se registrovali!')

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