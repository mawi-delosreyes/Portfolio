import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './pages/About';

function App() {

  return (
    <div>
      <Header />
      <NavBar />
      <AboutPage />
      <Footer />
    </div>
  );
}

export default App
