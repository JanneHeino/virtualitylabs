import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import backgroundImage from './images/testi.jpg';
import './HomePage.css'; 

const HomePage = () => {
  const [images, setImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleIndexes, setVisibleIndexes] = useState([0, 1, 2]); // Alkuarvo asetettu esimerkin vuoksi
// https://virtualitylabs-d14k.vercel.app/api/images
  useEffect(() => {
    axios.get('http://localhost:3001/api/images')
      .then(response => {
        setImages(response.data);
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      });
  }, []);

  const goToPrevious = () => {
    setVisibleIndexes(prevIndexes => 
      prevIndexes.map(index => 
        index === 0 ? images.length - 1 : index - 1 // Siirrytään yksi indeksi taaksepäin, tai viimeiseen indeksiin jos ollaan ensimmäisessä
      )
    );
  };
  
  const goToNext = () => {
    setVisibleIndexes(prevIndexes => 
      prevIndexes.map(index => 
        (index + 1) % images.length // Siirrytään yksi indeksi eteenpäin, tai nollaan jos ollaan viimeisessä indeksissä
      )
    );
  };

  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    height: '75vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    position: 'relative',
  };

  const renderCarousel = () => {
    if (images.length < 3) return null;
  
    return (
      <div className="image-carousel">
        <button onClick={goToPrevious} className="carousel-button previous">&#9664;</button>
        <div className="carousel-images">
          {visibleIndexes.map((index, idx) => (
            <img
              key={index}
              src={`data:image/jpeg;base64,${images[index]}`}
              alt={`Gallery item ${index}`}
              className={index === visibleIndexes[1] ? "active-image" : idx === 0 ? "side-image side-image-left" : "side-image side-image-right"}
            />
          ))}
        </div>
        <button onClick={goToNext} className="carousel-button next">&#9654;</button>
      </div>
    );
  };
  

  return (
    <div className="home-page">
      <section className="hero" style={heroStyle}>
        <div className="overlay"></div>
        <div className="content">
          <h1>Tervetuloa Virtuality Labsiin</h1>
          <Button variant="primary" size="lg" as={Link} to="/services" className="mt-3">
            Tutustu palveluihimme
          </Button>
        </div>
      </section>

      <div className="splitContainer">
        <div className="textContainer">
          {/* Place your text or additional content here */}
          <h5>Virtuality labs</h5>
          <h1>Virtuaalikierrokset</h1>
          <p>Haluatteko viedä yrityksenne seuraavalle tasolle? Virtuaalikierrokset tuovat asiakkaanne lähemmäksi tuotteitanne ja palvelujanne, tarjoten ainutlaatuisen ja interaktiivisen tavan tutustua siihen, mitä tarjoatte. Asiakkaat voivat sujuvasti siirtyä 360° panoraamakuvien välillä ja kokea kohteenne kuin olisivat siellä itse. Tämä edistyksellinen teknologia ei ainoastaan mahdollista globaalin yleisön tavoittamisen, vaan myös tehostaa markkinointianne, lisää kustannustehokkuutta ja auttaa teitä erottumaan kilpailijoistanne innovatiivisten markkinointikeinojen avulla. Astukaa virtuaalisen esittelyn maailmaan ja tarjotkaa asiakkaillenne unohtumattomia kokemuksia.</p>
        </div>
        <div className="iframeContainer">
          {/* You could place the virtual tour iframe here or any other iframe content */}
          <iframe
            src="https://vistatest.valokuvaaja.pro/lyseo/"
            className="responsiveIframe"
            allowFullScreen
            title="Virtual Tour"
          ></iframe>
        </div>
      </div>

      {/* Image Gallery Section */}
      <section className="gallery-section">
        <h2>Kuvagalleria</h2>
        {renderCarousel()}
      </section>
    </div>
  );
};

export default HomePage;
