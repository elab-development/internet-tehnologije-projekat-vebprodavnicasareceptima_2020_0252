import React from 'react';
import  { useState } from 'react';
import '../style/login.css';
import { useNavigate } from 'react-router-dom';
import InputField from './InputField.jsx';
import ReusableDugme from './ReusableDugme.jsx';





const LoginForm = ({ onLogin }) => {

    //konstante
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //staticki korisnici
  const staticUsers = [
    { email: 'luti@gmail.com', password: 'ninomi' },
    { email: 'nina@gmail.com', password: 'ninomi' }
  ];

  //fja za obradu funkcije logina
  const handleLogin = () => {
    const usersSkladiste = JSON.parse(localStorage.getItem('users')) || [];
    const users = [...staticUsers, ...usersSkladiste];
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      onLogin(email);
    } else {
      alert('Pogrešan email ili lozinka.');
    }
  };

  const navigate = useNavigate();

const handleNavigateToRegistracija = () => {
  navigate('/registracija');
};

  return (
    <div class="scroll-bg">
    <div className="login_forma">
      <div className="login_forma_naslov">
        <h2>Login</h2>
        </div>
        <div className="login_forma_email">
       
       
        <InputField
        label="Email"
        id="Email"
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
        </div>
        <div className="login_forma_lozinka">
       
        
        <InputField
        label="Lozinka"
        id="password"
        type="password"
        placeholder="Lozinka"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
        </div>
        <div>
      <ReusableDugme label="Login" onClick={handleLogin} />
      <ReusableDugme label="Registracija" onClick={handleNavigateToRegistracija} />
    </div>
    </div>
    </div>
  );
};

export default LoginForm;