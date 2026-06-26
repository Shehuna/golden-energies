// src/components/ClientPartners/ClientPartners.js
import React from 'react';
import './ClientPartners.css';

// Import your logo images
import ethiopianAirlines from '../../assets/logos/ethiopian.png';
import bgiEthiopia from '../../assets/logos/cbe.png';
import dangoteCement from '../../assets/logos/epse.png';
import meskelFlower from '../../assets/logos/heiniken.png';
import nileBrewery from '../../assets/logos/etc.png';
import addisTransport from '../../assets/logos/shipping.png';
import ethioTelecom from '../../assets/logos/anbesa.png';
import bankAbyssinia from '../../assets/logos/aau.png';
// These are commented out in your code, so I'm keeping them commented
// import ethiopianShipping from '../../assets/logos/ethiopian-shipping.png';
import midrocGold from '../../assets/logos/midroc.png';
// import ethiopianCoffee from '../../assets/logos/ethiopian-coffee.png';
// import addisUniversity from '../../assets/logos/addis-university.png';

const ClientPartners = () => {
  // List of clients with their logo images - only use the ones that are imported
  const clients = [
    { id: 1, name: 'Ethiopian Airlines', logo: ethiopianAirlines },
    { id: 2, name: 'Commercial Bank of Ethiopia', logo: bgiEthiopia },
    { id: 3, name: 'Ethiopian Petroleum Supply Enterprise', logo: dangoteCement },
    { id: 4, name: 'Heineken Ethiopia', logo: meskelFlower },
    { id: 5, name: 'Ethiopian Telecommunications Corporation', logo: nileBrewery },
    { id: 6, name: 'Ethiopian Shipping Lines', logo: addisTransport },
    { id: 7, name: 'Anbesa Gas Station', logo: ethioTelecom },
    { id: 8, name: 'Addis Ababa University', logo: bankAbyssinia },
    // These are commented out because the images aren't imported
    // { id: 9, name: 'Ethiopian Shipping Lines', logo: ethiopianShipping },
    { id: 10, name: 'MIDROC Gold', logo: midrocGold },
    // { id: 11, name: 'Ethiopian Coffee', logo: ethiopianCoffee },
    // { id: 12, name: 'Addis Ababa University', logo: addisUniversity }
  ];

  // Duplicate the clients array for seamless infinite scroll
  const doubledClients = [...clients, ...clients];

  return (
    <section className="client-partners">
      <div className="client-partners-container">
        {/* Description only */}
        <p className="section-description">
          We are proud to serve some of the most respected companies across 
          various industries with our premium products and services.
        </p>

        {/* Sliding Logos */}
        <div className="sliding-wrapper">
          <div className="sliding-track">
            {doubledClients.map((client, index) => (
              <div key={`${client.id}-${index}`} className="logo-item">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="logo-image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientPartners;