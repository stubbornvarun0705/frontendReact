import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MainLogin from './MainLogin'


function App() {


  return (
      <div className="App container mt-5">
        <MainLogin/>
      </div>
  );
}

export default App;
