import React from 'react';
import  { useState } from 'react';

const LoginForm = ({ onLogin }) => {

    //konstante
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //staticki korisnici
  const users = [
    { email: 'luti@gmail.com', password: 'ninomi' },
    { email: 'nina@gmail.com', password: 'ninomi' }
  ];

  //fja za obradu funkcije logina
  const handleLogin = () => {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      onLogin(email);
    } else {
      alert('Pogrešan email ili lozinka.');
    }
  };

  return (
    <div className="login_forma">
      <div className="login_forma_podaci">
        <h2>Login</h2>
        <label htmlFor="Email">Email:</label>
        <input
          type="text"
          id="Email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Lozinka:</label>
        <input
          type="password"
          id="password"
          placeholder="Lozinka"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default LoginForm;