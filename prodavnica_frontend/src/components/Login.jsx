import React, { useState } from 'react';
import '../style/login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Uvoz axios-a
import InputField from './InputField.jsx';
import ReusableDugme from './ReusableDugme.jsx';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [korisnik, setKorisnik] = useState([]);

  
  const handleLogin = () => {
    // Kreiranje URL-a sa query params za email i password
    const params = new URLSearchParams({
      email: email,
      password: password
    });
 
    axios.post(`http://127.0.0.1:8000/api/login?${params.toString()}`)
      .then(response => {
        // Obrada uspešnog odgovora
        if (response.data['Token: ']) {
          localStorage.setItem('token', response.data['Token: ']);
          let user =response.data['Korisnik: '];
          const korisnik = {
            id: user.id,
            ime: user.Ime,
            prezime: user.Prezime,
            adresa: user.Adresa,
            email: user.Email,
            broj_telefona: user.broj_telefona,
            password: user.password,
            uloga: user.uloga,
          };
          const nz = Object.entries(korisnik);
          onLogin(nz);
          navigate('home');
        } else {
          alert('Neuspešno logovanje: Proverite svoje kredencijale i pokušajte ponovo.');
        }
      })
      .catch(error => {
        console.error('Error:', error.response.data);
        alert(error.response.data['Greska pri logiovanju: '] || 'Došlo je do greške prilikom logovanja.');
      });
  };

  const handleNavigateToRegistracija = () => {
    navigate('/registracija');
  };

  return (
    <div className="login_forma">
      <div className="login_forma_naslov"><h2>Login</h2></div>
      <InputField label="Email" id="Email" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <InputField label="Lozinka" id="password" type="password" placeholder="Lozinka" value={password} onChange={(e) => setPassword(e.target.value)} />
      <div>
        <ReusableDugme label="Login" onClick={handleLogin} />
        <ReusableDugme label="Registracija" onClick={handleNavigateToRegistracija} />
      </div>
    </div>
  );
};

export default LoginForm;
