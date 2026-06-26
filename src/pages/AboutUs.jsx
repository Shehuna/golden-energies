// pages/AboutUs.js
import React, { useEffect } from 'react';
import './AboutUs.css';
import aboutImage from '../assets/about-image.png';
import teamImage from '../assets/team-image.png';
import ceoImage from '../assets/ceo-image.png'; // Add CEO image

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Golden Energies</h1>
          <p>Powering Africa's Future with Sustainable Energy Solutions</p>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="about-ceo">
        <div className="container">
          <div className="ceo-grid">
            <div className="ceo-image-wrapper">
              <div className="ceo-image">
                <img src={ceoImage} alt="Ato Samuel Bishaw - CEO" />
              </div>
              <div className="ceo-name">
                <h3>Ato Samuel Bishaw</h3>
                <p>Chief Executive Officer</p>
              </div>
            </div>
            <div className="ceo-message">
              <h2>Message from the CEO</h2>
              <p>
                Welcome to Golden Energies. As we continue to grow and evolve, our commitment to 
                excellence remains unwavering. Since our establishment in July 2022, we have been 
                driven by a vision to transform Ethiopia's energy landscape and contribute to the 
                nation's economic growth.
              </p>
              <p>
                At Golden Energies, we believe that energy is not just about fuel — it's about 
                powering dreams, enabling progress, and building a sustainable future for generations 
                to come. Our team of dedicated professionals works tirelessly to ensure that we 
                deliver the highest quality products and services to our customers while maintaining 
                the highest standards of safety and environmental responsibility.
              </p>
              <p>
                I am proud of what we have achieved in such a short time, and I am even more excited 
                about what lies ahead. Together with our partners, employees, and communities, we 
                will continue to drive innovation, create value, and make a positive impact on the 
                lives of those we serve.
              </p>
              <div className="ceo-signature">
                <p className="signature">Ato Samuel Bishaw</p>
                <p className="signature-title">Chief Executive Officer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="about-story">
        <div className="container">
          <div className="story-grid">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Golden Energies was founded with a vision to transform Africa's energy landscape. 
                With decades of experience in the oil and gas industry, we have grown from a small 
                regional supplier to a leading energy company serving communities across the continent.
              </p>
              <p>
                Our journey is marked by innovation, reliability, and an unwavering commitment to 
                excellence. We believe in powering progress while protecting the environment and 
                uplifting the communities we serve.
              </p>
              <div className="story-stats">
                <div className="stat-item">
                  <h3>25+</h3>
                  <p>Years of Excellence</p>
                </div>
                <div className="stat-item">
                  <h3>50+</h3>
                  <p>Countries Served</p>
                </div>
                <div className="stat-item">
                  <h3>1000+</h3>
                  <p>Employees</p>
                </div>
              </div>
            </div>
            <div className="story-image-wrapper">
              <div className="story-image">
                <img src={aboutImage} alt="Golden Energies Story" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="about-mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card mission">
              <div className="mv-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To deliver reliable, sustainable, and innovative energy solutions that power 
                economic growth and improve quality of life across Africa.
              </p>
            </div>
            <div className="mv-card vision">
              <div className="mv-icon">👁️</div>
              <h3>Our Vision</h3>
              <p>
                To be Africa's most trusted and sustainable energy partner, driving the continent's 
                transition to a cleaner, more prosperous future.
              </p>
            </div>
            <div className="mv-card values">
              <div className="mv-icon">💎</div>
              <h3>Our Values</h3>
              <ul>
                <li>Integrity & Transparency</li>
                <li>Innovation & Excellence</li>
                <li>Safety & Sustainability</li>
                <li>Community & Partnership</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="about-team">
        <div className="container">
          <h2>Leadership Team</h2>
          <p className="team-subtitle">
            Meet the dedicated professionals driving Golden Energies forward
          </p>
          <div className="team-grid">
            <div className="team-member">
              <img src={ceoImage} alt="CEO" />
              <h4>Ato Samuel Bishaw</h4>
              <p>Chief Executive Officer</p>
            </div>
            <div className="team-member">
              <img src={teamImage} alt="COO" />
              <h4>Jane Smith</h4>
              <p>Chief Operating Officer</p>
            </div>
            <div className="team-member">
              <img src={teamImage} alt="CFO" />
              <h4>Michael Johnson</h4>
              <p>Chief Financial Officer</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <h2>Ready to Partner With Us?</h2>
          <p>Contact our team to learn how we can power your success</p>
          <button className="cta-button">Contact Us</button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;