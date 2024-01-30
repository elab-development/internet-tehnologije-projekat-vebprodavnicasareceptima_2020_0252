import { BrowserRouter,Route,Routes,Navigate } from 'react-router-dom';
import LoginForm from './components/Login.jsx';
import Navbar from './components/Navbar.jsx';
import Namirnice from './components/Namirnice.jsx';
import React, { useState,createContext } from 'react';
import './App.css';
import Korpa from './components/Korpa';
import RegistracijaForm from './components/Registracija.jsx';
import NutritionInfo from './components/NutritionInfo';

import useKorpa from './hooks/useKorpa';
import Recepti from './components/Recepti';
import { kategorije , namirnice,recepti} from './data.js';
import ReceptDetalji from './components/ReceptDetalji.jsx';



function App() {

  const [loggedInUser, setLoggedInUser] = useState(null);
 
  const { korpa, dodajUKorpu, ukloniIzKorpe, ocistiKorpu } = useKorpa();
  

  //fja za login
  const handleLogin = (email) => {
    setLoggedInUser(email);
   
    return <Navigate to="/home" />;
    
   
  };

  //fja za logout
  const handleLogout = () => {
    setLoggedInUser(null);
    ocistiKorpu(); 
    return <Navigate to="/" />;

  };

  const handleRegistracija = () =>{

    return <Navigate to ="/"/>

  }

  //uslov po kom ce se vrsiti pretraga
  const [uslovPretrage,setUslovPretrage]=useState("");


  //funkcija koja setuje uslov pretrage
  function pretrazi(uslovPretrage){
    setUslovPretrage(uslovPretrage);
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
        element={loggedInUser ? (
          <>
          <Navbar loggedInUser={loggedInUser} handleLogout={handleLogout} />
          <Namirnice dodajUKorpu={dodajUKorpu} kriterijum={uslovPretrage} pretrazi={pretrazi} namirnice={namirnice}  />
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
            <Korpa korpa={korpa} ukloniIzKorpe={ukloniIzKorpe} dodajUKorpu={dodajUKorpu} />
            </>
             ) : (<Navigate to="/" /> )}
      />

      <Route 
        path="/namirnice" 
        element={loggedInUser ? (
        <>
        <Navbar loggedInUser={loggedInUser} handleLogout={handleLogout} />
        <NutritionInfo />
        </>
        ) : (<Navigate to="/" />)}
        />
      <Route 
        path="/recepti" 
        element={loggedInUser ? (
        <>
        <Navbar loggedInUser={loggedInUser} handleLogout={handleLogout} />
        <Recepti namirnice={namirnice} kriterijum={uslovPretrage} pretrazi={pretrazi} recepti={recepti} />
        </>
        ) : (<Navigate to="/" />)}
        />

<Route path="/recepti/:id"
 element={<ReceptDetalji recepti={recepti} namirnice={namirnice} dodajUKorpu = {dodajUKorpu}/>} />
      </Routes>
     
    
    </BrowserRouter>

    </div>
  );
}

export default App;
