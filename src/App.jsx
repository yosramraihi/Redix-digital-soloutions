import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  const offerRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);

  const scrollToOffer = () => {
    offerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPortfolio = () => {
    portfolioRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <div className="App">
        <Navbar 
          onScrollToOffer={scrollToOffer}
          onScrollToContact={scrollToContact}
          onScrollToAbout={scrollToAbout}
          onScrollToPortfolio={scrollToPortfolio}
        />
        <Header 
          onFazetnaClick={scrollToOffer} 
          onContactClick={scrollToContact} 
          onAboutClick={scrollToAbout}
          onScrollToPortfolio={scrollToPortfolio} 
        />
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                offerRef={offerRef} 
                contactRef={contactRef} 
                aboutRef={aboutRef} 
                portfolioRef={portfolioRef} 
              />
            } 
          />
          <Route 
            path="/contact" 
            element={<Contact />} 
          />
        </Routes>
        <Footer 
          onScrollToOffer={scrollToOffer}
          onScrollToContact={scrollToContact}
          onScrollToAbout={scrollToAbout}
          onScrollToPortfolio={scrollToPortfolio}
        />
      </div>
    </Router>
  );
}

export default App;


