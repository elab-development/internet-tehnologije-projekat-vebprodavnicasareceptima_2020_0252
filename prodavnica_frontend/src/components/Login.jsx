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
          console.log(user)
          onLogin(user);
         
          onLogin(user);
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


  const handleBezNaloga =() =>{
    const user = "neulogovan"

    onLogin(user);
    navigate('home');

  };

  return (
    <div className="login_forma">
      <div className="login_forma_naslov"><h2>Login</h2></div>
      <InputField label="Email" id="Email" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <InputField label="Lozinka" id="password" type="password" placeholder="Lozinka" value={password} onChange={(e) => setPassword(e.target.value)} />
      <div>
        <ReusableDugme label="Login" onClick={handleLogin} />
        <ReusableDugme label="Registracija" onClick={handleNavigateToRegistracija} />
        <ReusableDugme label="Nastavi bez registracije" onClick={handleBezNaloga} />
      </div>
    </div>
  );
};

export default LoginForm;
