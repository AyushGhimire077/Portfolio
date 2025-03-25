import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About';
import TechStack from './components/TechStack';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Project from './components/Project';
import Footer from './components/Footer';


const App = () => {
  useEffect(() => {
    AOS.init({
      once: false
    });
  }, [])
  

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Project />
      <Footer />
    </>
  );
}

export default App
