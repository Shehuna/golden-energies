// pages/GasStations.js
import React, { useEffect } from 'react';
import './GasStations.css';
import gasStationImage from '../assets/gas-station.png';

// Import station images
import assasaImg from '../assets/assasa.png';
import bodetiImg from '../assets/Bodeti.png';
import azernetImg from '../assets/Azernet.png';
import gelanImg from '../assets/Gelan.png';
import sulultaImg from '../assets/Sululta.png';
import mitoImg from '../assets/Mito.png';
import jimmaImg from '../assets/Jimma.png';
import alechoImg from '../assets/Alecho.png';
import hararImg from '../assets/Harar.png';

const GasStations = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stations = [
    {
      id: 1,
      name: 'Assasa Golden Gas Station',
      location: 'Assasa, Ethiopia',
      image: assasaImg,
      services: ['Fuel', 'Lubricants', 'Car Wash', 'Convenience Store'],
      hours: '24/7',
      coordinates: '8.9925° N, 38.7796° E'
    },
    {
      id: 2,
      name: 'Bodeti Golden Gas Station',
      location: 'Bodeti, Ethiopia',
      image: bodetiImg,
      services: ['Fuel', 'Lubricants', 'Tire Repair', 'Convenience Store'],
      hours: '24/7',
      coordinates: '9.0051° N, 38.7636° E'
    },
    {
      id: 3,
      name: 'Azernet Golden Gas Station',
      location: 'Azernet, Ethiopia',
      image: azernetImg,
      services: ['Fuel', 'Lubricants', 'Car Wash', 'Café'],
      hours: '24/7',
      coordinates: '9.0084° N, 38.8079° E'
    },
    {
      id: 4,
      name: 'Gelan Golden Gas Station',
      location: 'Gelan, Ethiopia',
      image: gelanImg,
      services: ['Fuel', 'Lubricants', 'Convenience Store'],
      hours: '24/7',
      coordinates: '9.0302° N, 38.7423° E'
    },
    {
      id: 5,
      name: 'Sululta Golden Gas Station',
      location: 'Sululta, Ethiopia',
      image: sulultaImg,
      services: ['Fuel', 'Lubricants', 'Car Wash', 'Tire Repair'],
      hours: '24/7',
      coordinates: '9.0227° N, 38.7468° E'
    },
    {
      id: 6,
      name: 'Mito Golden Gas Station',
      location: 'Mito, Ethiopia',
      image: mitoImg,
      services: ['Fuel', 'Lubricants', 'Convenience Store', 'Café'],
      hours: '24/7',
      coordinates: '9.0156° N, 38.7512° E'
    },
    {
      id: 7,
      name: 'Jimma Golden Gas Station',
      location: 'Jimma, Ethiopia',
      image: jimmaImg,
      services: ['Fuel', 'Lubricants', 'Car Wash', 'Convenience Store'],
      hours: '24/7',
      coordinates: '7.6742° N, 36.8293° E'
    },
    {
      id: 8,
      name: 'Alecho Golden Gas Station',
      location: 'Alecho, Ethiopia',
      image: alechoImg,
      services: ['Fuel', 'Lubricants', 'Tire Repair', 'Café'],
      hours: '24/7',
      coordinates: '8.9556° N, 38.7934° E'
    },
    {
      id: 9,
      name: 'Harar Sofi Golden Gas Station',
      location: 'Harar, Ethiopia',
      image: hararImg,
      services: ['Fuel', 'Lubricants', 'Convenience Store'],
      hours: '24/7',
      coordinates: '9.3136° N, 42.1389° E'
    }
  ];

  return (
    <div className="gas-stations-page">
      {/* Hero Section */}
      <section className="gs-hero">
        <div 
          className="gs-hero-background"
          style={{ 
            backgroundImage: `url(${gasStationImage})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <div className="gs-hero-overlay"></div>
        <div className="gs-hero-content">
          <h1>Our Gas Stations</h1>
          <p className="gs-hero-subtitle">Conveniently located across Ethiopia to serve your needs</p>
        </div>
      </section>

      {/* Stations Grid Section */}
      <section className="gs-stations">
        <div className="container">
          <h2>Find a Station Near You</h2>
          <p className="gs-subtitle">
            Visit any of our modern fuel stations for quality fuel and exceptional service
          </p>
          <div className="gs-grid">
            {stations.map((station) => (
              <div className="gs-card" key={station.id}>
                <div className="gs-card-image">
                  <img src={station.image} alt={station.name} />
                </div>
                <div className="gs-card-content">
                  <div className="gs-card-header">
                    <h3>{station.name}</h3>
                    <span className="gs-badge">{station.hours}</span>
                  </div>
                  <div className="gs-card-body">
                    <div className="gs-location">
                      <span className="gs-location-icon">📍</span>
                      <p>{station.location}</p>
                    </div>
                    <div className="gs-services">
                      <span className="gs-services-label">Services:</span>
                      <div className="gs-services-tags">
                        {station.services.map((service, index) => (
                          <span key={index} className="gs-service-tag">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="gs-card-footer">
                    <button className="gs-directions-btn">
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="gs-features">
        <div className="container">
          <h2>Why Choose Golden Energies Stations</h2>
          <div className="gs-features-grid">
            <div className="gs-feature-item">
              <div className="gs-feature-icon">⛽</div>
              <h3>Quality Fuel</h3>
              <p>Premium quality fuel that ensures optimal engine performance and efficiency</p>
            </div>
            <div className="gs-feature-item">
              <div className="gs-feature-icon">🕐</div>
              <h3>24/7 Service</h3>
              <p>All stations operate round the clock for your convenience</p>
            </div>
            <div className="gs-feature-item">
              <div className="gs-feature-icon">🛡️</div>
              <h3>Safe & Secure</h3>
              <p>Modern facilities with security and safety as our top priority</p>
            </div>
            <div className="gs-feature-item">
              <div className="gs-feature-icon">💳</div>
              <h3>Multiple Payment Options</h3>
              <p>Cash, card, and mobile payment options available</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gs-cta">
        <div className="container">
          <h2>Looking for a Station?</h2>
          <p>Use our station locator to find the nearest Golden Energies station</p>
          <button className="gs-cta-button">Find Nearest Station</button>
        </div>
      </section>
    </div>
  );
};

export default GasStations;