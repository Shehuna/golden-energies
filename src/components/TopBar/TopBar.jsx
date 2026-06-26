// components/TopBar/TopBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Search } from 'lucide-react';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar-container">
        {/* Left Side - Tagline with Orange Highlight */}
        <div className="topbar-left">
          <span className="topbar-tagline">
            Our work is Golden, <span className="topbar-tagline-highlight">just like our name</span>
          </span>
        </div>

        {/* Right Side - Contact, Animated Text & Search */}
        <div className="topbar-right">
          {/* Contact - Envelope Icon */}
          <Link to="/contact" className="topbar-contact" title='contact'>
            <Mail size={18} className="topbar-icon" xlinkTitle='contact' />
          </Link>

          {/* Vertical Divider */}
          <span className="topbar-divider"></span>

          {/* Search */}
          <button className="topbar-search" title='search'>
            <Search size={18} className="topbar-icon" />
          </button>

          
          {/* Vertical Divider */}
          <span className="topbar-divider"></span>

          {/* Animated Text Container */}
          <div className="topbar-animated-text-container">
            <div className="topbar-animated-text-wrapper">
              <span className="topbar-animated-text topbar-text-1">Golden Energies</span>
              <span className="topbar-animated-text topbar-text-2">Your reliable energy solution</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;