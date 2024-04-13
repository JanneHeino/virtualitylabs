import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navigationbar from './Navigationbar';
import HomePage from './HomePage';
import ServicesPage from './ServicesPage';
import AboutUsPage from './AboutUsPage';
import ContactPage from './ContactPage';
import Footer from './Footer';
import './App.css'



function App() {
  return (
    <Router>
      <div className="App" style={{ color: 'white', backgroundColor: '#000' }}>
      
        <Navigationbar />
        
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/aboutus" element={<AboutUsPage />} />
          </Routes>
        
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;
