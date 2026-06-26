// src/components/FindStation/FindStation.js
import React from 'react';
import './FindStation.css';
import gasStationImage from '../../assets/gas-station.png';

const FindStation = () => {
  return (
    <section className="find-station">
      <div className="find-station-container">
        {/* Left Side - Text Content with Gradient Background */}
        <div className="find-station-content">
          <h2 className="station-title">
            Find Your Nearest <br />
            <span className="highlight-text">Gas Station</span>
          </h2>
          
          <p className="station-description">
            Locate the nearest Golden Energies gas station and enjoy premium fuel 
            quality, exceptional service, and convenience at your fingertips. 
            We're always nearby to keep you moving.
          </p>
          
          <div className="station-features">
            <div className="feature-item">
              <span className="feature-icon">🔧</span>
              <span className="feature-text">Lube Change</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🚗</span>
              <span className="feature-text">Car Wash</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🛒</span>
              <span className="feature-text">Shop</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🕐</span>
              <span className="feature-text">24 Hour</span>
            </div>
          </div>
          
          <button className="station-cta-button">
            Find Nearest Station
            <span className="cta-arrow">→</span>
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="find-station-image-wrapper">
          <div className="image-background">
            <img 
              src={gasStationImage} 
              alt="Golden Energies Gas Station" 
              className="station-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindStation;