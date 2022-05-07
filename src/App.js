import React from 'react';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Services from './components/Services';
import Investors from './components/Investors';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Investors />
      <About />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;