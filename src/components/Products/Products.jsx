import React, { useEffect, useRef, useState } from 'react';
import './Products.css';
import Gas from '../../assets/Gas.png';
import Oil from '../../assets/Oil.png';
import GearOil from '../../assets/Gear Oil.png';
import HydraulicOil from '../../assets/Hydrolic Oil.png';

const Products = () => {
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

  const products = [
    {
      id: 1,
      image: Gas,
      title: 'Golden Premium Petrol',
      description: 'A high-octane petrol fuel engineered to deliver maximum power and efficiency while reducing engine deposits and emissions.'
    },
    {
      id: 2,
      image: Oil,
      title: 'Golden Engine Oil',
      description: 'A premium-grade lubricant formulated to enhance engine performance, reduce wear and tear, and provide superior protection in extreme conditions.'
    },
    {
      id: 3,
      image: GearOil,
      title: 'Golden Industrial Gear Oil',
      description: 'A specialized fuel designed for industrial applications, including power generation, manufacturing, and heavy machinery, ensuring reliable and efficient performance.'
    },
    {
      id: 4,
      image: HydraulicOil,
      title: 'Golden Hydraulic Oil',
      description: 'A high-quality hydraulic oil that ensures optimal performance of industrial and automotive hydraulic systems, minimizing friction and wear.'
    }
  ];

  return (
    <section className="products-section" ref={sectionRef}>
      <div className="products-container">
        {/* Header */}
        <div className={`products-header ${isVisible ? 'animate' : ''}`}>
          
          <h2 className="products-title">
            Products & <span className="highlight">Services</span>
          </h2>
          <p className="products-description">
            Powering performance with premium fuels and lubricants
          </p>
        </div>

        {/* Products Grid - 2 Columns */}
        <div className={`products-grid ${isVisible ? 'animate' : ''}`}>
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="product-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="product-image-wrapper">
                <img src={product.image} alt={product.title} className="product-image" />
              </div>
              <div className="product-content">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;