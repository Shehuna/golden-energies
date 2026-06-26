// src/components/SupplyChainSection/SupplyChainSection.js
import React from 'react';
import './SupplyChainSection.css';

const SupplyChainSection = () => {
  const steps = [
    {
      number: '01',
      icon: '🚢',
      title: 'Import',
      description: 'Sourcing premium petroleum products from international suppliers'
    },
    {
      number: '02',
      icon: '🏗️',
      title: 'Storage',
      description: 'Safe and modern storage facilities with strict quality control'
    },
    {
      number: '03',
      icon: '🚛',
      title: 'Distribution',
      description: 'Reliable delivery network serving businesses across the country'
    },
    {
      number: '04',
      icon: '🔬',
      title: 'Quality Assurance',
      description: 'ISO certified laboratories ensuring product excellence'
    }
  ];

  const stats = [
    { number: '35+', label: 'Years Experience' },
    { number: '150+', label: 'Distribution Points' },
    { number: '500+', label: 'Fleet Vehicles' },
    { number: '98%', label: 'On-Time Delivery' }
  ];

  return (
    <section className="supply-chain">
      <div className="supply-chain-container">
        <div className="section-header">
          <span className="section-badge">Supply Chain</span>
          <h2 className="section-title">
            From Import to <br />
            <span className="title-highlight">Your Doorstep</span>
          </h2>
          <p className="section-description">
            Our integrated supply chain ensures efficient, reliable, and quality-controlled 
            delivery of petroleum products to our customers.
          </p>
        </div>

        {/* Process Steps */}
        <div className="process-steps">
          {steps.map((step, index) => (
            <div key={index} className="step-item">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <div className="step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="step-connector">
                  <span className="connector-line"></span>
                  <span className="connector-arrow">→</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="supply-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupplyChainSection;