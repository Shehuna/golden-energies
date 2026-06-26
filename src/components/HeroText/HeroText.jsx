import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './HeroText.css';
import backgroundImage from '../../assets/Pic for Hero.png'; // Import the image

const HeroText = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Function to handle navigation
  const handleWhoWeAreClick = () => {
    navigate('/about');
  };

  return (
    <section className="hero-text-section" ref={sectionRef}>
      {/* White Space Above */}
      <div className="hero-text-spacer"></div>

      {/* Background Image - Oil Refinery */}
      <div 
        className="hero-text-background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      
      <div className="hero-text-container">
        <div className={`hero-text-content ${isVisible ? 'animate' : ''}`}>
          <div className="hero-text-left">
            <p className="hero-text-paragraph">
              At the heart of every powerful machine is a commitment to quality. Our premium fuels and 
              high-performance lubricants are engineered to deliver unmatched reliability, efficiency, and protection 
              across a wide range of industries and applications.
            </p>
          </div>
          <div className="hero-text-right">
            <button className="hero-text-button" onClick={handleWhoWeAreClick}>
              Who We Are →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroText;