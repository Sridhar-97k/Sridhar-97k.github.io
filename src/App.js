import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Links from './components/Links';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <main>
          <About />
          <Education />
          <Experience />
          <Skills />
          <Projects />
          <Publications />
          <Links />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
