import { BrowserRouter,Route,Routes,Navigate } from 'react-router-dom';
import LoginForm from './components/Login.jsx';
import Navbar from './components/Navbar.jsx';
import React, { useState } from 'react';
import './App.css';

import RegistracijaForm from './components/Registracija.jsx';

function App() {

  const [loggedInUser, setLoggedInUser] = useState(null);
  

  //fja za login
  const handleLogin = (email) => {
    setLoggedInUser(email);
    return <Navigate to="/home" />;
   
  };

  //fja za logout
  const handleLogout = () => {
    setLoggedInUser(null);
    return <Navigate to="/" />;

  };

  const handleRegistracija = () =>{

    return <Navigate to ="/"/>

  }


  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route 
        path="/" 
        element={loggedInUser ? (<Navigate to="/home" />) : (<LoginForm onLogin={handleLogin} />)}
      />
       <Route 
        path="/home" 
        element={loggedInUser ? (<Navbar loggedInUser={loggedInUser} handleLogout={handleLogout} />) : (<Navigate to="/" />)}
        />
        <Route
        path="/registracija"
          element ={< RegistracijaForm onRegistracija={handleRegistracija}/>}
          />
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
