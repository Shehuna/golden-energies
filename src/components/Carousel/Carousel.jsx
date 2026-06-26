import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = () => {
  const slides = [
    {
      id: 1,
      title: 'Premium Fuels and Lubricants',
      subtitle: 'Golden Energies operates modern refineries with cutting-edge technology for superior fuel production',
      image: 'https://remsausainc.com/wp-content/uploads/AdobeStock_245252401-1536x1024.jpeg.webp'
    },
    
    {
      id: 3,
      title: 'Quality You Can Trust',
      subtitle: 'Golden Energies delivers exceptional lubricants and fuels for all your automotive needs',
      image: 'https://irp.cdn-website.com/76199ed5/dms3rep/multi/AdobeStock_35580903+%281%29.jpeg'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-slides">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="carousel-content">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
              <button className="carousel-cta">Request for Quote</button>
            </div>
          </div>
        ))}
      </div>

      {/* Lines (Pills) Indicator */}
      <div className="carousel-lines">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`carousel-line ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;