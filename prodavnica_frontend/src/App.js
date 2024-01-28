import { BrowserRouter,Route,Routes,Navigate } from 'react-router-dom';
import LoginForm from './components/Login.jsx';
import Navbar from './components/Navbar.jsx';
import Namirnice from './components/Namirnice.jsx';
import React, { useState,createContext } from 'react';
import './App.css';
import Korpa from './components/Korpa';

import RegistracijaForm from './components/Registracija.jsx';

export const KorpaContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState(null);
  const [korpa, setKorpa] = useState([]);
  

  //fja za login
  const handleLogin = (email) => {
    setLoggedInUser(email);
    return <Navigate to="/home" />;
   
  };

  //fja za logout
  const handleLogout = () => {
    setLoggedInUser(null);
    setKorpa([]);
    return <Navigate to="/" />;

  };

  const handleRegistracija = () =>{

    return <Navigate to ="/"/>

  }

  const dodajUKorpu = (id, naziv, cena, velicina,slika) => {
    const postojecaStavka = korpa.find(stavka => stavka.id === id);
    if (postojecaStavka) {
      setKorpa(korpa.map(stavka => 
        stavka.id === id ? { ...stavka, kolicina: stavka.kolicina + 1 } : stavka
      ));
    } else {
      setKorpa([...korpa, { id, naziv, cena, velicina,slika, kolicina: 1 }]);
    }
  };

  const ukloniIzKorpe = (id) => {
    setKorpa(trenutnaKorpa => {
      const stavka = trenutnaKorpa.find(stavka => stavka.id === id);
      if (stavka.kolicina > 1) {
        // Ako ima više od jednog proizvoda, smanji količinu
        return trenutnaKorpa.map(stavka =>
          stavka.id === id ? { ...stavka, kolicina: stavka.kolicina - 1 } : stavka
        );
      } else {
        // Ako ima samo jedan proizvod, ukloni stavku
        return trenutnaKorpa.filter(stavka => stavka.id !== id);
      }
    });
  };
  

  



  return (
    <div className="App">
      
      <BrowserRouter>
      <KorpaContext.Provider value={{ korpa, setKorpa, dodajUKorpu,ukloniIzKorpe }}>
      <Routes>
      <Route 
        path="/" 
        element={loggedInUser ? (<Navigate to="/home" />) : (<LoginForm onLogin={handleLogin} />)}
      />
       <Route 
        path="/home" 
        element={loggedInUser ? (
          <>
          <Navbar loggedInUser={loggedInUser} handleLogout={handleLogout} />
          <Namirnice dodajUKorpu={dodajUKorpu} />
          </>) : (<Navigate to="/" />)}
        />
        <Route
        path="/registracija"
          element ={< RegistracijaForm onRegistracija={handleRegistracija}/>}
          />
           <Route 
    path="/korpa" 
    element={loggedInUser ? (
      <>
        <Navbar loggedInUser={loggedInUser} handleLogout={handleLogout} />
        <Korpa />
      </>
    ) : (
      <Navigate to="/" />
    )}
  />
      </Routes>
     
      </KorpaContext.Provider>
    </BrowserRouter>

    </div>
  );
}

export default App;
