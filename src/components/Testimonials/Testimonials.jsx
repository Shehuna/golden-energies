import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import './Testimonials.css';
import avatarPlaceholder from '../../assets/avatar-placeholder.png';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Alemu Degefa',
      position: 'Wollega University, Nekemte, Ethiopia',
      quote: 'Golden Energies lubricants have greatly improved our vehicles performance. Reliable and efficient!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Mohammed Hamza',
      position: 'Harar, Ethiopia',
      quote: 'Switching to Golden Energies was the best decision for my transport business. Superior quality, fewer breakdowns.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Alemayehu Nigussie',
      position: 'Gelan, Ethiopia',
      quote: 'Golden Energies\' industrial lubricants keep my machinery running smoothly. Consistent performance every time.',
      rating: 4,
    },
    {
      id: 4,
      name: 'Mamush Dagne',
      position: 'Debre Birhan, Ethiopia',
      quote: 'Golden Energies delivers exceptional lubricants and excellent service. A trusted partner for my workshop',
      rating: 5,
    },
    {
      id: 5,
      name: 'Abiy Bishaw',
      position: 'Addis Ababa, Ethiopia',
      quote: 'Trust Golden Energies for top-tier engine oils. My fleet has never been more efficient. Highly recommended!',
      rating: 5,
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('next');
  const slideTimerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setVisibleCount(1);
      } else if (window.innerWidth <= 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isHovered) {
      slideTimerRef.current = setInterval(() => {
        handleNext();
      }, 5000);
    }
    return () => clearInterval(slideTimerRef.current);
  }, [currentIndex, isHovered]);

  const handlePrev = () => {
    if (isAnimating) return;
    setDirection('prev');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = Math.max(0, testimonials.length - visibleCount);
        return prevIndex === 0 ? maxIndex : prevIndex - 1;
      });
      setIsAnimating(false);
    }, 300);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setDirection('next');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = Math.max(0, testimonials.length - visibleCount);
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
      setIsAnimating(false);
    }, 300);
  };

  const goToSlide = (index) => {
    if (isAnimating) return;
    setDirection(index > currentIndex ? 'next' : 'prev');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 300);
  };

  const getVisibleTestimonials = () => {
    const start = currentIndex;
    const end = Math.min(start + visibleCount, testimonials.length);
    return testimonials.slice(start, end);
  };

  const totalSlides = Math.ceil(testimonials.length / visibleCount);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={`star ${i < rating ? 'filled' : 'empty'}`}
        fill={i < rating ? '#F9862D' : 'none'}
      />
    ));
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
         
          <h2 className="testimonials-title">
            What Our Clients <span className="highlight">Say</span>
          </h2>
          <p className="testimonials-description">
            Hear from our valued clients who trust Golden Energies for their energy needs
          </p>
        </div>

        <div 
          className="testimonials-carousel"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button 
            className="carousel-btn prev-btn" 
            onClick={handlePrev}
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="testimonials-wrapper">
            <div 
              className={`testimonials-track ${isAnimating ? 'animating' : ''} ${direction === 'next' ? 'slide-next' : 'slide-prev'}`}
            >
              <div className="testimonials-grid">
                {getVisibleTestimonials().map((testimonial) => (
                  <div key={testimonial.id} className="testimonial-card">
                    <div className="testimonial-rating">
                      {renderStars(testimonial.rating)}
                    </div>
                    <div className="testimonial-quote">
                      <p>"{testimonial.quote}"</p>
                    </div>
                    <div className="testimonial-author">
                      <div className="author-avatar">
                        <img src={avatarPlaceholder} alt="Client" />
                      </div>
                      <div className="author-info">
                        <h4>{testimonial.name}</h4>
                        <p>{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button 
            className="carousel-btn next-btn" 
            onClick={handleNext}
            aria-label="Next testimonials"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="testimonials-dots">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`dot ${Math.floor(currentIndex / visibleCount) === index ? 'active' : ''}`}
              onClick={() => goToSlide(index * visibleCount)}
              aria-label={`Go to testimonials page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;