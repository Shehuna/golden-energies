// components/WorkWithUs/WorkWithUs.js
import React, { useEffect, useRef, useState } from 'react';
import './WorkWithUs.css';
import workWithUsImage from '../../assets/work-with-us.png'; // Add your image

const WorkWithUs = () => {
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
    <section className="work-with-us" ref={sectionRef}>
      <div 
        className="work-with-us-background"
        style={{ 
          backgroundImage: `url(${workWithUsImage})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      ></div>
      <div className="work-with-us-overlay"></div>
      <div className="work-with-us-container">
        <div className={`work-with-us-content ${isVisible ? 'animate' : ''}`}>
          <h2>Work With Us</h2>
          <p className="work-with-us-subtitle">
            Join us in powering Africa's future. We're always looking for talented, passionate 
            individuals who share our commitment to excellence and innovation.
          </p>
          <div className="work-with-us-grid">
            <div className="work-with-us-card">
              <div className="work-with-us-icon">💼</div>
              <h3>Career Opportunities</h3>
              <p>Explore exciting career opportunities across various departments and locations.</p>
              <button className="work-with-us-btn">View Openings →</button>
            </div>
            <div className="work-with-us-card">
              <div className="work-with-us-icon">🤝</div>
              <h3>Partnerships</h3>
              <p>Partner with us to create sustainable energy solutions and drive economic growth.</p>
              <button className="work-with-us-btn">Become a Partner →</button>
            </div>
            <div className="work-with-us-card">
              <div className="work-with-us-icon">🌱</div>
              <h3>Internships</h3>
              <p>Kickstart your career with our internship programs and gain valuable industry experience.</p>
              <button className="work-with-us-btn">Apply Now →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;