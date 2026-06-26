// src/components/WhyChooseUs/WhyChooseUs.js
import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: '⭐',
      title: 'Premium Quality',
      description: 'We source only the highest quality petroleum products from trusted international suppliers.'
    },
    {
      icon: '🤝',
      title: 'Reliable Supply',
      description: 'Consistent and uninterrupted supply with a robust distribution network.'
    },
    {
      icon: '💰',
      title: 'Competitive Pricing',
      description: 'Fair and transparent pricing with the best value for your money.'
    },
    {
      icon: '🔬',
      title: 'Technical Expertise',
      description: 'Team of experienced professionals providing expert technical support.'
    },
    {
      icon: '🌍',
      title: 'Nationwide Reach',
      description: 'Extensive distribution network covering all regions of the country.'
    },
    {
      icon: '🛡️',
      title: 'Safety First',
      description: 'Commitment to the highest safety standards in all operations.'
    }
  ];

  return (
    <section className="why-choose-us">
      <div className="why-choose-us-container">
        <div className="section-header">
          <span className="section-badge">Why Choose Us</span>
          <h2 className="section-title">
            Your Trusted <br />
            <span className="title-highlight">Energy Partner</span>
          </h2>
          <p className="section-description">
            With decades of experience and a commitment to excellence, we provide 
            unmatched value to our customers across the industry.
          </p>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card">
              <div className="reason-icon">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;