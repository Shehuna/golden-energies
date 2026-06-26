// pages/ProductsServices.js
import React, { useEffect } from 'react';
import './ProductsServices.css';
import productsImage from '../assets/Products.png'; // Import the image

const ProductsServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="products-services-page">
      {/* Hero Section with Background Image */}
      <section className="ps-hero">
        <div 
          className="ps-hero-background"
          style={{ 
            backgroundImage: `url(${productsImage})`,
            backgroundPosition: 'center center',
            backgroundSize: 'center center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <div className="ps-hero-overlay"></div>
        <div className="ps-hero-content">
          <p className="ps-hero-subtitle">Premium Energy Solutions for Every Need</p>
        </div>
      </section>

      {/* Products Section */}
      <section className="ps-products">
        <div className="container">
          <h2>Our Products</h2>
          <div className="ps-grid">
            <div className="ps-card">
              <div className="ps-icon">⛽</div>
              <h3>Premium Fuels</h3>
              <p>High-quality gasoline and diesel products engineered for maximum performance and efficiency.</p>
            </div>
            <div className="ps-card">
              <div className="ps-icon">🔧</div>
              <h3>Industrial Lubricants</h3>
              <p>Premium lubricants and greases designed for optimal equipment protection and longevity.</p>
            </div>
            <div className="ps-card">
              <div className="ps-icon">🏭</div>
              <h3>Bulk Supply</h3>
              <p>Reliable bulk fuel supply for industrial, commercial, and agricultural operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="ps-services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="ps-services-grid">
            <div className="ps-service-item">
              <h3>Fuel Distribution</h3>
              <p>Efficient and reliable fuel distribution network ensuring timely delivery to your location.</p>
            </div>
            <div className="ps-service-item">
              <h3>Fleet Management</h3>
              <p>Comprehensive fleet management solutions including fuel cards and maintenance support.</p>
            </div>
            <div className="ps-service-item">
              <h3>Technical Support</h3>
              <p>Expert technical support and consultation for all your energy needs.</p>
            </div>
            <div className="ps-service-item">
              <h3>Quality Assurance</h3>
              <p>Rigorous quality control processes ensuring premium product standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="ps-cta">
        <div className="container">
          <h2>Ready to Power Your Success?</h2>
          <p>Contact our team for customized energy solutions</p>
          <button className="ps-cta-button">Contact Us</button>
        </div>
      </section>
    </div>
  );
};

export default ProductsServices;