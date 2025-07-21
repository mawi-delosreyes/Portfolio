import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AboutPage from './pages/About';
import NavBar from './components/NavBar';
import Header from './components/Header';

function App() {

  return (
    <div>
      <Header />
      <NavBar />
    </div>
  );
}

export default App
