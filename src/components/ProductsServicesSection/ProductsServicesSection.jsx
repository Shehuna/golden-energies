// src/components/ProductsServicesSection/ProductsServicesSection.js
import React from 'react';
import './ProductsServicesSection.css';
import productImage from '../../assets/golden_energies.png';
import oilImage from '../../assets/oil-grease.png';
import industrialImage from '../../assets/industrial.jpg';

const ProductsServicesSection = () => {
  const products = [
    {
      title: 'FUEL SUPPLY & DISTRIBUTION',
      description: 'We provide premium-quality fuel, including diesel, petrol, and industrial fuel, to retail customers, businesses, and industries. Our network of strategically located fuel stations ensures accessibility and convenience.',
      items: ['Premium Diesel', 'Petrol/Gasoline', 'Industrial Fuel', 'Retail & Bulk Supply'],
      image: productImage
    },
    {
      title: 'LUBRICANTS & GREASE SOLUTIONS',
      description: 'Our high-performance lubricants are designed to enhance engine efficiency, reduce wear and tear, and extend the lifespan of machinery.',
      items: ['Engine Oils', 'Industrial Greases', 'Gear Oils', 'Hydraulic Fluids'],
      image: oilImage
    },
    {
      title: 'INDUSTRIAL FUEL SOLUTIONS',
      description: 'We cater to large-scale industries, construction companies, and manufacturing plants with customized fuel supply contracts to ensure uninterrupted operations and maximum efficiency.',
      items: ['Bulk Fuel Supply', 'Customized Contracts', 'Fleet Fueling', '24/7 Support'],
      image: industrialImage
    }
  ];

  return (
    <section className="products-services">
      <div className="products-services-container">
        {/* Top Section - Title */}
        <div className="products-services-top">
          <h2 className="ps-section-title">
            POWERING PERFORMANCE WITH PREMIUM <br />
            <span className="title-highlight">FUELS & LUBRICANTS</span>
          </h2>
        </div>

        {/* Bottom Section - Products */}
        <div className="products-services-bottom">
          <div className="products-grid">
            {products.map((product, index) => (
              <div key={index} className="product-card">
                <div className="product-image-wrapper">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="product-image"
                  />
                </div>
                <div className="product-content">
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-description">{product.description}</p>
                  <ul className="product-items">
                    {product.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsServicesSection;