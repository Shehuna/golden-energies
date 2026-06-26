import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, Menu, X, Mail } from 'lucide-react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import logotext from '../../assets/logotext.png';

const Navbar = () => {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('EN');
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  
  const languageRef = useRef(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const navLinks = [
    { label: 'Our Company', href: '/about', hasDropdown: true, dropdownId: 'who' },
    { label: 'Products & Services', href: '#what-we-do', hasDropdown: true, dropdownId: 'what' },
    { label: 'Gas Stations', href: '/gas-stations' },
    { label: 'Media', href: '#newsroom' },
  ];

  const languages = [
    { code: 'EN', label: 'English' },
    { code: 'አማ', label: 'አማርኛ' }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setLanguageOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Check if screen is mobile
  const isMobile = () => {
    return window.innerWidth <= 992;
  };

  const handleDropdownEnter = (id) => {
    if (!isMobile()) {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
        setHoverTimeout(null);
      }
      setDropdownOpen(id);
    }
  };

  const handleDropdownLeave = () => {
    if (!isMobile()) {
      const timeout = setTimeout(() => {
        setDropdownOpen(null);
      }, 300);
      setHoverTimeout(timeout);
    }
  };

  const handleDropdownHover = () => {
    if (!isMobile()) {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
        setHoverTimeout(null);
      }
    }
  };

  const handleMobileDropdownClick = (id) => {
    if (isMobile()) {
      setMobileDropdownOpen(mobileDropdownOpen === id ? null : id);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setDropdownOpen(null);
    setMobileDropdownOpen(null);
  };

  const handleNavigation = (path) => {
    setMobileMenuOpen(false);
    navigate(path);
  };

  // Determine if dropdown should be open
  const isDropdownOpen = (id) => {
    if (isMobile()) {
      return mobileDropdownOpen === id;
    }
    return dropdownOpen === id;
  };

  return (
    <nav className={`navbar ${mobileMenuOpen ? 'mobile-open' : ''}`}>
      <div className="navbar-container">
        {/* Logo - Link to Home */}
        <div className="navbar-logo">
          <Link to="/" className="logo-link" onClick={() => setMobileMenuOpen(false)}>
            <img src={logo} alt="Golden Energies" className="logo-image" />
            <img src={logotext} alt="Golden Energies Text" className="logo-text-image" />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <li 
                key={link.label || 'contact'}
                className={link.hasDropdown ? 'dropdown-trigger' : ''}
                onMouseEnter={() => link.hasDropdown && handleDropdownEnter(link.dropdownId)}
                onMouseLeave={() => link.hasDropdown && handleDropdownLeave()}
                onClick={() => link.hasDropdown && handleMobileDropdownClick(link.dropdownId)}
              >
                <Link to={link.href} onClick={() => setMobileMenuOpen(false)}>
                  {Icon && <Icon size={20} className="nav-icon" />}
                  {link.label}
                  {link.hasDropdown && <ChevronDown size={14} className="dropdown-arrow" />}
                </Link>
                
                {/* Dropdown for "Our Company" */}
                {link.hasDropdown && link.dropdownId === 'who' && isDropdownOpen('who') && (
                  <div 
                    className="dropdown-menu"
                    onMouseEnter={handleDropdownHover}
                    onMouseLeave={() => !isMobile() && setDropdownOpen(null)}
                  >
                    <div className="dropdown-container">
                      <div className="dropdown-column about-column">
                        <div className="about-content">
                          <h3>About Us</h3>
                          <p>
                            Golden Energies was established in July 2022, by visionary Investors who had experiences exceeding more than 20 years in the sector, with a
                            paid-up capital of 25 million birr
                          </p>
                          <button 
                            className="read-more-btn" 
                            onClick={() => handleNavigation('/about')}
                          >
                            Read More →
                          </button>
                        </div>
                      </div>

                      <div className="dropdown-divider"></div>

                      <div className="dropdown-column operations-column">
                        <div className="operations-content">
                          <h4>Our Operations</h4>
                          <p>
                            Golden Energies operates multiple fuel stations and a Large storage depot, ensuring a steady and
                            reliable supply of petroleum products. 
                          </p>
                        </div>
                        <div className="commitment-content">
                          <h4>Our Commitment</h4>
                          <ul className="choose-list">
                            <li>✓ Providing superior-quality fuel & lubricants</li>
                            <li>✓ Enhancing customer experience with value-added services.</li>
                            <li>✓ Expanding our market reach while maintaining sustainability and efficiency.</li>
                            <li>✓ Contributing to the nation's economic growth through innovation and strategic expansion.</li>
                          </ul>
                        </div>
                      </div>

                      <div className="dropdown-column choose-column">
                        <h4>Why Choose Us</h4>
                        <ul className="choose-list">
                          <li>✓ Proven Industry Expertise</li>
                          <li>✓ High-Quality Products</li>
                          <li>✓ Customer-centric approach</li>
                          <li>✓ Strategic Growth</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* Dropdown for "Products & Services" - TWO COLUMNS */}
                {link.hasDropdown && link.dropdownId === 'what' && isDropdownOpen('what') && (
                  <div 
                    className="dropdown-menu"
                    onMouseEnter={handleDropdownHover}
                    onMouseLeave={() => !isMobile() && setDropdownOpen(null)}
                  >
                    <div className="dropdown-container two-columns">
                      <div className="dropdown-column about-column">
                        <div className="about-content">
                          <h3>Our Services</h3>
                          <p>
                            Golden Energies provides comprehensive energy solutions tailored 
                            to meet the diverse needs of our clients. From fuel distribution 
                            to specialized lubricants, we deliver excellence at every step.
                          </p>
                          <button 
                            className="read-more-btn" 
                            onClick={() => handleNavigation('/products-services')}
                          >
                            Explore Services →
                          </button>
                        </div>
                      </div>

                      <div className="dropdown-divider"></div>

                      <div className="dropdown-column operations-column">
                        <div className="operations-content">
                          <h4>Fuel Supply & Distribution</h4>
                          <p>
                            Reliable fuel supply chain management ensuring uninterrupted 
                            delivery of quality petroleum products to businesses and consumers.
                          </p>
                        </div>
                        <div className="commitment-content">
                          <h4>Lubricant & Grease Solutions</h4>
                          <p>
                            Premium quality lubricants and greases designed for optimal 
                            performance and extended equipment life across all industries.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            );
          })}
          
          {/* Partner with Us Button */}
          <li className="partner-button-item">
            <button className="partner-btn" onClick={() => handleNavigation('/contact')}>
              Partner with Us
            </button>
          </li>

          {/* Language Selector */}
          <li className="language-nav-item" ref={languageRef}>
            <div className="language-selector">
              <button 
                className="language-btn"
                onClick={() => setLanguageOpen(!languageOpen)}
              >
                <span>{currentLang}</span>
                <ChevronDown size={14} />
              </button>

              {languageOpen && (
                <div className="language-dropdown">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className={`language-option ${currentLang === lang.code ? 'active' : ''}`}
                      onClick={() => {
                        setCurrentLang(lang.code);
                        setLanguageOpen(false);
                      }}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;