import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './pages/About';
import ExperiencePage from './pages/Experience';
import ProjectsPage from './pages/Projects';
import EducationPage from './pages/Education';

function App() {

  return (
    <div>
      <Header />
      <NavBar />
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/education" element={<EducationPage />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App
