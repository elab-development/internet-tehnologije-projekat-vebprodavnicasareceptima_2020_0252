import { BrowserRouter,Route,Routes,Navigate } from 'react-router-dom';
import LoginForm from './components/Login.jsx';
import Navbar from './components/Navbar.jsx';
import Namirnice from './components/Namirnice.jsx';
import React, { useState,useEffect } from 'react';
import './App.css';
import Korpa from './components/Korpa';
import RegistracijaForm from './components/Registracija.jsx';
import NutritionInfo from './components/NutritionInfo';

import useKorpa from './hooks/useKorpa';
import Recepti from './components/Recepti';
import DodajNamirnicu from './components/DodajNamirnicu.jsx';
import { kategorije , namirnice,recepti} from './data.js';
import ReceptDetalji from './components/ReceptDetalji.jsx';
import Placanje from './components/Placanje.jsx';
import Grafikon from './components/Grafikon.jsx';


function App() {


  const [loggedInUser, setLoggedInUser] = useState(null);
  const [ukupno, setUkupno] = useState(0);
  const [ukupnoUValuti, setUkupnoUValuti] = useState(0);
  const [valuta, setValuta] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("RSD");
  const [kurs, setKurs] = useState(0);
 

 
  const { korpa, dodajUKorpu, ukloniIzKorpe, ocistiKorpu } = useKorpa();
  
  const [receptiData, setReceptiData] = useState([]); // Promenjeno ime promenljive kako bi se izbegla konfuzija
  const [namirniceData, setNamirniceData] = useState([]); // Promenjeno ime promenljive kako bi se izbegla konfuzija

  useEffect(() => {
    recepti() // Poziv funkcije za preuzimanje recepta
      .then((data) => {
        setReceptiData(data); // Postavljanje podataka u stanje komponente
       
      })
      .catch((error) => console.error('Error setting recepti:', error));
  }, []);

  useEffect(() => {
    namirnice() // Poziv funkcije za preuzimanje namirnica
      .then((data) => {
        setNamirniceData(data); // Postavljanje podataka u stanje komponente
       
      })
      .catch((error) => console.error('Error setting namirnice:', error));
  }, []);


  const handleCurrencyChange = (selectedCurrency, kurs) => {
    setSelectedCurrency(selectedCurrency);
    setKurs(kurs);
    console.log(selectedCurrency);
  };


  //fja za login
  const handleLogin = (user) => {
    setLoggedInUser(user);

    return <Navigate to="/home" />;
    
   
  };
  const promeniUkupno = (valuta,ukupno,ukupnoUValuti) => {
    setUkupno(ukupno);
    setValuta(valuta);
    setUkupnoUValuti(ukupnoUValuti);
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
          <Namirnice dodajUKorpu={dodajUKorpu} kriterijum={uslovPretrage} pretrazi={pretrazi}
           namirnice={namirniceData} user = {loggedInUser} valuta={selectedCurrency} kurs={kurs} 
           ocistiKorpu ={ocistiKorpu}/>
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
            <Korpa korpa={korpa} ukloniIzKorpe={ukloniIzKorpe} dodajUKorpu={dodajUKorpu} user ={loggedInUser}  promeniUkupno ={promeniUkupno} funkcija={handleCurrencyChange}/>
            </>
             ) : (<Navigate to="/" /> )}
      />

      <Route 
        path="/namirnice" 
        element={loggedInUser ? (
        <>
        <Navbar loggedInUser={loggedInUser} handleLogout={handleLogout}  />
        <NutritionInfo />
        </>
        ) : (<Navigate to="/" />)}
        />
      <Route 
        path="/recepti" 
        element={loggedInUser ? (
        <>
        <Navbar loggedInUser={loggedInUser} handleLogout={handleLogout} />
        <Recepti namirnice={namirniceData} kriterijum={uslovPretrage} pretrazi={pretrazi} recepti = {receptiData} />
        </>
        ) : (<Navigate to="/" />)}
        />

      <Route 
        path="/recepti/:id"
        element={loggedInUser ? (
          <>
          <Navbar loggedInUser={loggedInUser} handleLogout={handleLogout} />
        <ReceptDetalji recepti={receptiData} namirnice={namirniceData} dodajUKorpu = {dodajUKorpu}
         user = {loggedInUser} valuta={selectedCurrency} kurs={kurs} ocistiKorpu={ocistiKorpu}/>
        </>
        ) : (<Navigate to="/" />)} 
        />

<Route 
        path="dodaj-namirnicu"
        element={loggedInUser ? (
          <>
          <Navbar loggedInUser={loggedInUser} handleLogout={handleLogout} />
        <DodajNamirnicu/>
        </>
        ) : (<Navigate to="/" />)} 
        />

<Route 
        path="korpa/placanje"
        element={loggedInUser ? (
          <>
          <Navbar loggedInUser={loggedInUser} handleLogout={handleLogout} />
        <Placanje korpa={korpa}  user = {loggedInUser} ukupno={ukupno} valuta={valuta}
         ukupnoUValuti={ukupnoUValuti} recepti={receptiData} ocistiKorpu={ocistiKorpu}/>
        </>
        ) : (<Navigate to="/" />)} 
        />
        <Route 
        path="grafikon"
        element={loggedInUser ? (
          <>
          <Navbar loggedInUser={loggedInUser} handleLogout={handleLogout} />
          <Grafikon/>
        </>
        ) : (<Navigate to="/" />)} 
        />


      </Routes>
     
    
    </BrowserRouter>

    </div>
  );
}

export default App;
