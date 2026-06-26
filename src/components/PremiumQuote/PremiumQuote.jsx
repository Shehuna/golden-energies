// src/components/PremiumQuote/PremiumQuote.js
import React, { useState, useEffect, useRef } from 'react';
import './PremiumQuote.css';

const PremiumQuote = () => {
  const [counters, setCounters] = useState({
    years: 0,
    stations: 0,
    products: 0,
    clients: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const animationTimersRef = useRef({});

  const stats = [
    { id: 'years', label: 'Years of Excellence', target: 35, suffix: '+' },
    { id: 'stations', label: 'Gas Stations', target: 150, suffix: '+' },
    { id: 'products', label: 'Products Available', target: 200, suffix: '+' },
    { id: 'clients', label: 'Happy Clients', target: 5000, suffix: '+' }
  ];

  // Reset counters to 0
  const resetCounters = () => {
    setCounters({
      years: 0,
      stations: 0,
      products: 0,
      clients: 0
    });
  };

  // Start animation for a single counter
  const animateCounter = (id, target) => {
    // Clear any existing timer for this counter
    if (animationTimersRef.current[id]) {
      clearInterval(animationTimersRef.current[id]);
    }

    const duration = 2000 + Math.random() * 1000; // Random duration between 2-3 seconds
    const steps = 10 + Math.floor(Math.random() * 50); // Random steps for natural feel
    const interval = duration / steps;
    const increment = target / steps;

    let currentStep = 0;
    let currentValue = 0;

    animationTimersRef.current[id] = setInterval(() => {
      currentStep++;
      
      if (currentStep >= steps) {
        // Set final value
        setCounters(prev => ({
          ...prev,
          [id]: target
        }));
        clearInterval(animationTimersRef.current[id]);
        return;
      }

      currentValue = Math.min(Math.floor(currentValue + increment), target);
      setCounters(prev => ({
        ...prev,
        [id]: currentValue
      }));
    }, interval);
  };

  // Start all counters independently
  const startAllAnimations = () => {
    resetCounters();

    // Small delay before starting each counter for staggered effect
    stats.forEach((stat, index) => {
      setTimeout(() => {
        animateCounter(stat.id, stat.target);
      }, index * 300); // 300ms delay between each counter start
    });
  };

  // Stop all animations
  const stopAllAnimations = () => {
    Object.keys(animationTimersRef.current).forEach(key => {
      if (animationTimersRef.current[key]) {
        clearInterval(animationTimersRef.current[key]);
        delete animationTimersRef.current[key];
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          startAllAnimations();
        } else {
          setIsVisible(false);
          // Reset counters and stop animations when leaving viewport
          resetCounters();
          stopAllAnimations();
        }
      },
      { 
        threshold: 0.2,
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      stopAllAnimations();
    };
  }, []);

  return (
    <section 
      className={`premium-quote ${isVisible ? 'visible' : ''}`} 
      ref={sectionRef}
    >
      <div className="premium-quote-container">
        {/* Quote Section */}
        <div className="quote-wrapper">
          <p className="quote-text">
            <span className="quote-mark quote-mark-start">"</span>
            Our premium fuels and high-performance lubricants are engineered to deliver 
            unmatched reliability, efficiency and protection.
            <span className="quote-mark quote-mark-end">"</span>
          </p>
        </div>

        {/* Stats Counter Section */}
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-item">
              <div className="stat-number">
                {counters[stat.id]}{stat.suffix}
              </div>
              <div className="pr-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumQuote;