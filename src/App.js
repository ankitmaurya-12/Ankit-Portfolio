// src/App.js
import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ToggleDarkMode from './components/ToggleDarkMode';
import './App.css';

function App() {
  return (
    <div className="App">
      <ToggleDarkMode />
      <NavBar />
      <Header />
      <Summary />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
