// src/components/WhoWeAre/WhoWeAre.js
import React from 'react';
import './WhoWeAre.css';
import whoWeAreImage from '../../assets/Products.png'; // Add your image

const WhoWeAre = () => {
  return (
    <section className="who-we-are">
      <div className="who-we-are-container">
        <div className="who-we-are-layout">
          {/* Left Column - Text Content */}
          <div className="who-we-are-content">
            
            <h2 className="section-title">
              Powering Progress <br />
              <span className="title-highlight">Across Ethiopia</span>
            </h2>
            <p className="we-section-description">
              Golden Energies is a leading importer and distributor of petroleum, 
              oils, and lubricants in Ethiopia. With over three decades of experience, 
              we have established ourselves as a trusted partner in fuel supply, 
              distribution, and energy services across the nation.
            </p>
            
            <div className="who-we-are-stats">
              <div className="stat-item">
                <span className="stat-number">35+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">150+</span>
                <span className="stat-label">Gas Stations</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Team Members</span>
              </div>
            </div>
            <button className="who-we-are-cta">
              Learn More About Us
              <span className="cta-arrow">→</span>
            </button>
          </div>

          {/* Right Column - Image */}
          <div className="who-we-are-image-wrapper">
            <div className="image-container">
              <img 
                src={whoWeAreImage} 
                alt="Golden Energies - Who We Are" 
                className="who-we-are-image"
              />
              <div className="image-overlay"></div>
              <div className="image-badge">
                <span className="badge-icon">🏆</span>
                <span className="badge-text">Trusted Since 1990</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;