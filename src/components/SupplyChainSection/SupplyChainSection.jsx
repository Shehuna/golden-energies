// src/components/SupplyChainSection/SupplyChainSection.js
import React from 'react';
import './SupplyChainSection.css';
import bgImage from '../../assets/supply-chain.png'; // Add your background image

const SupplyChainSection = () => {
  const steps = [
    {
      number: '01',
      icon: '🚢',
      title: 'Import',
      description: 'Sourcing premium petroleum products from international suppliers',
      color: '#2074D6'
    },
    {
      number: '02',
      icon: '🏗️',
      title: 'Storage',
      description: 'Safe and modern storage facilities with strict quality control',
      color: '#F9862D'
    },
    {
      number: '03',
      icon: '🚛',
      title: 'Distribution',
      description: 'Reliable delivery network serving businesses across the country',
      color: '#B70C05'
    },
    {
      number: '04',
      icon: '🔬',
      title: 'Quality Assurance',
      description: 'ISO certified laboratories ensuring product excellence',
      color: '#2074D6'
    }
  ];

  return (
    <section className="supply-chain" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="supply-chain-overlay"></div>
      <div className="supply-chain-container">
        <div className="section-header">
          <h2 className="cs-section-title">
            From Import to <br />
            <span className="title-highlight">Your Doorstep</span>
          </h2>
        </div>

        {/* Process Steps */}
        <div className="process-steps">
          {steps.map((step, index) => (
            <div key={index} className="step-item">
              <div className="step-number" style={{ background: step.color }}>
                {step.number}
              </div>
              <div className="step-content">
                <div className="step-icon-wrapper" style={{ background: `${step.color}15` }}>
                  <span className="step-icon">{step.icon}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="step-connector">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupplyChainSection;