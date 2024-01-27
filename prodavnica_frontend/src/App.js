import { BrowserRouter,Route,Routes, Navigate  } from 'react-router-dom';
import LoginForm from './components/Login.jsx';
import Navbar from './components/Navbar.jsx';
import React, { useState } from 'react';
import './App.css';

function App() {

  const [loggedInUser, setLoggedInUser] = useState(null);

  //fja za login
  const handleLogin = (email) => {
    setLoggedInUser(email);
  };

  //fja za logout
  const handleLogout = () => {
    setLoggedInUser(null);
    return <Navigate to="/" />;
  };


  return (
    <div className="App">
      <BrowserRouter>
      {loggedInUser && <Navbar loggedInUser={loggedInUser} handleLogout={handleLogout} />}
      <Routes>
      <Route 
        path="/"
        element={loggedInUser ? <Navigate to="/" /> : <LoginForm onLogin={handleLogin} />}
      />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
