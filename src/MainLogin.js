import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';


function MainLogin() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const submitForm = async (event, type, email, password) => {
    event.preventDefault();

    const data = { email, password };
    const url = type === 'signup' ? 'http://localhost:8000/reg/' : 'http://localhost:8000/login/';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Unknown error');
      }

      const result = await response.json();
      console.log(result);
      alert(result.message);
    } catch (error) {
      console.error('Error:', error);
      alert(error.message);
    }
  };

  return (
    <Router>
      <div className="App container mt-5">
        <Routes>
          <Route path="/" element={<Home setShowLogin={setShowLogin} setShowRegister={setShowRegister} />} />
        </Routes>
        <LoginModal show={showLogin} handleClose={() => setShowLogin(false)} submitForm={submitForm} />
        <RegisterModal show={showRegister} handleClose={() => setShowRegister(false)} submitForm={submitForm} />
      </div>
    </Router>
  );
}

export default MainLogin;
