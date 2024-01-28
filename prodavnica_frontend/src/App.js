import { BrowserRouter,Route,Routes,Navigate } from 'react-router-dom';
import LoginForm from './components/Login.jsx';
import Navbar from './components/Navbar.jsx';
import Namirnice from './components/Namirnice.jsx';
import React, { useState } from 'react';
import './App.css';

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
          <Namirnice />
          </>) : (<Navigate to="/" />)}
        />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
