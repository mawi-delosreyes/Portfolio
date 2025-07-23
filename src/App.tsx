import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './pages/About';
import ExperiencePage from './pages/Experience';
import ProjectsPage from './pages/Projects';

function App() {

  return (
    <div>
      <Header />
      <NavBar />
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App
