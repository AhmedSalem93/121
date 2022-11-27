import React from 'react'
import './App.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import About from './components/About/About';
import Skill from './components/Skills/Skill';
import Services from './components/Services/Services';
import Qualification from "./components/Qualification/Qualification.jsx";
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollUp from "./components/ScrollUp/ScrollUp";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <Skill />
        <Services />
        <Qualification />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;
