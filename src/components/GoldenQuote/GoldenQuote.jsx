import React, { useEffect, useRef, useState } from 'react';
import './GoldenQuote.css';

const GoldenQuote = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  return (
    <section className="golden-quote-section" ref={sectionRef}>
      <div className="golden-quote-container">
        <div className={`golden-quote-content ${isVisible ? 'animate' : ''}`}>
          <span className="golden-quote-icon">✦</span>
          <h2 className="golden-quote-text">
            Our work is <span className="golden-highlight">Golden</span>, just like our name
          </h2>
          <div className="golden-quote-line"></div>
        </div>
      </div>
    </section>
  );
};

export default GoldenQuote;