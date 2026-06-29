import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, Menu, X, Mail, Newspaper, Image, Film, FileText } from 'lucide-react';
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
    { 
      label: 'Our Company', 
      href: '/about', 
      hasDropdown: true, 
      dropdownId: 'who' 
    },
    { 
      label: 'Products & Services', 
      href: '#what-we-do', 
      hasDropdown: true, 
      dropdownId: 'what' 
    },
    { 
      label: 'Gas Stations', 
      href: '/gas-stations' 
    },
    { 
      label: 'Media', 
      href: '#media', 
      hasDropdown: true, 
      dropdownId: 'media' 
    },
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
            return (
              <li 
                key={link.label}
                className={link.hasDropdown ? 'dropdown-trigger' : ''}
                onMouseEnter={() => link.hasDropdown && handleDropdownEnter(link.dropdownId)}
                onMouseLeave={() => link.hasDropdown && handleDropdownLeave()}
                onClick={() => link.hasDropdown && handleMobileDropdownClick(link.dropdownId)}
              >
                <Link to={link.href} onClick={() => setMobileMenuOpen(false)}>
                  {link.label}
                  {link.hasDropdown && <ChevronDown size={14} className="dropdown-arrow" />}
                </Link>
                
                {/* Dropdown for "Our Company" - UPDATED STYLE */}
                {link.hasDropdown && link.dropdownId === 'who' && isDropdownOpen('who') && (
                  <div 
                    className="dropdown-menu who-dropdown"
                    onMouseEnter={handleDropdownHover}
                    onMouseLeave={() => !isMobile() && setDropdownOpen(null)}
                  >
                    <div className="dropdown-container who-container">
                      <div className="dropdown-column who-column">
                        <div className="who-content">
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

                      <div className="dropdown-column who-items-column">
                        <div className="who-item">
                          <div className="who-item-header">
                            <span className="who-item-title">Our Operations</span>
                            <ChevronDown size={16} className="who-arrow" />
                          </div>
                          <p className="who-item-description">
                            Golden Energies operates multiple fuel stations and a Large storage depot, ensuring a steady and reliable supply of petroleum products.
                          </p>
                        </div>

                        <div className="who-item-divider"></div>

                        <div className="who-item">
                          <div className="who-item-header">
                            <span className="who-item-title">Our Commitment</span>
                            <ChevronDown size={16} className="who-arrow" />
                          </div>
                          <ul className="who-list">
                            <li>✓ Providing superior-quality fuel & lubricants</li>
                            <li>✓ Enhancing customer experience with value-added services.</li>
                            <li>✓ Expanding our market reach while maintaining sustainability and efficiency.</li>
                            <li>✓ Contributing to the nation's economic growth through innovation and strategic expansion.</li>
                          </ul>
                        </div>
                      </div>

                      <div className="dropdown-divider"></div>

                      <div className="dropdown-column who-choose-column">
                        <div className="who-item">
                          <div className="who-item-header">
                            <span className="who-item-title">Why Choose Us</span>
                            <ChevronDown size={16} className="who-arrow" />
                          </div>
                          <ul className="who-list">
                            <li>✓ Proven Industry Expertise</li>
                            <li>✓ High-Quality Products</li>
                            <li>✓ Customer-centric approach</li>
                            <li>✓ Strategic Growth</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Dropdown for "Products & Services" - UPDATED STYLE */}
                {link.hasDropdown && link.dropdownId === 'what' && isDropdownOpen('what') && (
                  <div 
                    className="dropdown-menu what-dropdown"
                    onMouseEnter={handleDropdownHover}
                    onMouseLeave={() => !isMobile() && setDropdownOpen(null)}
                  >
                    <div className="dropdown-container what-container">
                      <div className="dropdown-column what-column">
                        <div className="what-content">
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

                      <div className="dropdown-column what-items-column">
                        <div className="what-item">
                          <div className="what-item-header">
                            <span className="what-item-title">Fuel Supply & Distribution</span>
                            <ChevronDown size={16} className="what-arrow" />
                          </div>
                          <p className="what-item-description">
                            Reliable fuel supply chain management ensuring uninterrupted 
                            delivery of quality petroleum products to businesses and consumers.
                          </p>
                        </div>

                        <div className="what-item-divider"></div>

                        <div className="what-item">
                          <div className="what-item-header">
                            <span className="what-item-title">Lubricant & Grease Solutions</span>
                            <ChevronDown size={16} className="what-arrow" />
                          </div>
                          <p className="what-item-description">
                            Premium quality lubricants and greases designed for optimal 
                            performance and extended equipment life across all industries.
                          </p>
                        </div>

                        <div className="what-item-divider"></div>

                        <div className="what-item">
                          <div className="what-item-header">
                            <span className="what-item-title">Bulk Fuel Supply</span>
                            <ChevronDown size={16} className="what-arrow" />
                          </div>
                          <p className="what-item-description">
                            Large-scale fuel supply solutions for industrial, commercial, 
                            and agricultural clients with reliable delivery systems.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Dropdown for "Media" */}
                {link.hasDropdown && link.dropdownId === 'media' && isDropdownOpen('media') && (
                  <div 
                    className="dropdown-menu media-dropdown"
                    onMouseEnter={handleDropdownHover}
                    onMouseLeave={() => !isMobile() && setDropdownOpen(null)}
                  >
                    <div className="dropdown-container media-container">
                      <div className="dropdown-column media-column">
                        <div className="media-content">
                          <h3>Media Center</h3>
                          <p>
                            Stay updated with the latest news, events, and insights from Golden Energies. 
                            Explore our media resources and corporate communications.
                          </p>
                        </div>
                      </div>

                      <div className="dropdown-divider"></div>

                      <div className="dropdown-column media-items-column">
                        <div className="media-item">
                          <div className="media-item-header">
                            <Newspaper size={20} className="media-icon" />
                            <span className="media-item-title">News & Events</span>
                            <ChevronDown size={16} className="media-arrow" />
                          </div>
                          <p className="media-item-description">
                            Latest news, press releases, and company announcements from Golden Energies.
                          </p>
                          <Link to="/news" className="media-item-link" onClick={() => setMobileMenuOpen(false)}>
                            View All News →
                          </Link>
                        </div>

                        <div className="media-item-divider"></div>

                        <div className="media-item">
                          <div className="media-item-header">
                            <Image size={20} className="media-icon" />
                            <span className="media-item-title">Gallery</span>
                            <ChevronDown size={16} className="media-arrow" />
                          </div>
                          <p className="media-item-description">
                            Explore our visual journey through photos of our operations, events, and facilities.
                          </p>
                          <Link to="/gallery" className="media-item-link" onClick={() => setMobileMenuOpen(false)}>
                            View Gallery →
                          </Link>
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