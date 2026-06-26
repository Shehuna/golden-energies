import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebook, 
  faTwitter, 
  faInstagram, 
  faLinkedin, 
  faYoutube 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope, 
  faClock, 
  faChevronRight,
  faArrowUp 
} from '@fortawesome/free-solid-svg-icons';
import './Footer.css';
import logo from '../../assets/logo.png';
import logotext from '../../assets/logotext.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Show/hide back to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const quickLinks = [
    { label: 'Who We Are', href: '#who-we-are' },
    { label: 'What We Do', href: '#what-we-do' },
    { label: 'Our Services', href: '#services' },
    { label: 'Gas Stations', href: '#stations' },
    { label: 'Careers', href: '#careers' },
    { label: 'Downloads', href: '#downloads' }
  ];

  const services = [
    { label: 'Fuel Supply & Distribution', href: '#fuel-supply' },
    { label: 'Lubricant & Grease Solutions', href: '#lubricants' },
    { label: 'Industrial & Commercial Fuel Solutions', href: '#industrial-fuel' },
    { label: 'Technical Support', href: '#technical-support' }
  ];

  const contactInfo = [
    { icon: faMapMarkerAlt, text: '123 Energy Boulevard, Addis Ababa, Ethiopia' },
    { icon: faPhone, text: '+251 11 123 4567' },
    { icon: faEnvelope, text: 'info@goldenenergies.com' },
    { icon: faClock, text: 'Mon - Fri: 8:00 AM - 6:00 PM' }
  ];

  const socialLinks = [
    { icon: faFacebook, href: '#', label: 'Facebook' },
    { icon: faTwitter, href: '#', label: 'Twitter' },
    { icon: faInstagram, href: '#', label: 'Instagram' },
    { icon: faLinkedin, href: '#', label: 'LinkedIn' },
    { icon: faYoutube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* ====== TOP SECTION ====== */}
        <div className="footer-top">
          {/* Column 1: Brand Info */}
          <div className="footer-column brand-column">
            <div className="footer-logo">
              <img src={logo} alt="Golden Energies" className="footer-logo-image" />
              <img src={logotext} alt="Golden Energies Text" className="footer-logo-text" />
            </div>
            <p className="footer-description">
              Golden Energies is a leading oil and gas company committed to delivering 
              sustainable energy solutions across Africa. With decades of experience, 
              we pride ourselves on innovation, reliability, and community development.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="social-link"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={social.icon} size="lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-column links-column">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>
                    <FontAwesomeIcon icon={faChevronRight} size="xs" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="footer-column links-column">
            <h4 className="footer-heading">Our Services</h4>
            <ul className="footer-links">
              {services.map((service, index) => (
                <li key={index}>
                  <a href={service.href}>
                    <FontAwesomeIcon icon={faChevronRight} size="xs" />
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="footer-column contact-column">
            <h4 className="footer-heading">Get In Touch</h4>
            <ul className="contact-list">
              {contactInfo.map((item, index) => (
                <li key={index}>
                  <FontAwesomeIcon icon={item.icon} />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ====== DIVIDER ====== */}
        <div className="footer-divider"></div>

        {/* ====== BOTTOM SECTION ====== */}
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Golden Energies. All Rights Reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <span className="separator">|</span>
            <a href="#terms">Terms & Conditions</a>
            <span className="separator">|</span>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
      </div>

      {/* ====== BACK TO TOP BUTTON ====== */}
      {showBackToTop && (
        <button 
          className="back-to-top" 
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
    </footer>
  );
};

export default Footer;