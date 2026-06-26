// src/components/ProductsServicesSection/ProductsServicesSection.js
import React from 'react';
import './ProductsServicesSection.css';

const ProductsServicesSection = () => {
  const products = [
    {
      icon: '⛽',
      title: 'Gasoline',
      description: 'Premium unleaded and regular gasoline for all vehicle types',
      items: ['Premium Unleaded', 'Regular Gasoline', 'High-Octane Fuel']
    },
    {
      icon: '🛢️',
      title: 'Diesel',
      description: 'High-quality diesel for automotive and industrial use',
      items: ['Automotive Diesel', 'Industrial Diesel', 'Marine Diesel']
    },
    {
      icon: '🔧',
      title: 'Lubricants',
      description: 'Premium engine oils and industrial lubricants',
      items: ['Engine Oils', 'Gear Oils', 'Hydraulic Fluids', 'Greases']
    },
    {
      icon: '🏭',
      title: 'Industrial Oils',
      description: 'Specialized oils for industrial applications',
      items: ['Turbine Oils', 'Compressor Oils', 'Heat Transfer Oils']
    }
  ];

  return (
    <section className="products-services">
      <div className="products-services-container">
        {/* Top Section - Title & Description */}
        <div className="products-services-top">
          <h2 className="ps-section-title">
            Premium Petroleum <br />
            <span className="title-highlight">Products & Services</span>
          </h2>
          <p className="section-description">
            We offer a comprehensive range of high-quality petroleum products and 
            professional services to meet all your energy needs.
          </p>
        </div>

        {/* Bottom Section - Products */}
        <div className="products-services-bottom">
          <div className="products-grid">
            {products.map((product, index) => (
              <div key={index} className="product-card">
                <div className="product-icon">{product.icon}</div>
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
                <ul className="product-items">
                  {product.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsServicesSection;