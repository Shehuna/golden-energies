// pages/ContactUs.js
import React, { useEffect, useState } from 'react';
import './ContactUs.css';
import contactImage from '../assets/contact-image.jpg'; // Add your image

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="contact-us-page white-bg-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div 
          className="contact-hero-background"
          style={{ 
            backgroundImage: `url(${contactImage})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-content">
          <h1>Contact Us</h1>
          <p>Get in touch with us for any inquiries or support</p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Left Side - Contact Information */}
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p className="contact-info-subtitle">
                We'd love to hear from you. Reach out to us through any of the channels below.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-text">
                    <h4>Address</h4>
                    <p>Bole Road, Addis Ababa, Ethiopia</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div className="contact-text">
                    <h4>Phone</h4>
                    <p>+251 11 123 4567</p>
                    <p>+251 91 123 4567</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <p>info@goldenenergies.com</p>
                    <p>support@goldenenergies.com</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">🕐</div>
                  <div className="contact-text">
                    <h4>Working Hours</h4>
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="contact-social">
                <h4>Follow Us</h4>
                <div className="social-links">
                  <a href="#" className="social-link">📘</a>
                  <a href="#" className="social-link">🐦</a>
                  <a href="#" className="social-link">📸</a>
                  <a href="#" className="social-link">💼</a>
                  <a href="#" className="social-link">▶️</a>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="contact-form-wrapper">
              <div className="contact-form-container">
                <h2>Send Us a Message</h2>
                <p className="form-subtitle">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
                
                {isSubmitted ? (
                  <div className="success-message">
                    <div className="success-icon">✅</div>
                    <h3>Message Sent Successfully!</h3>
                    <p>Thank you for contacting us. We'll get back to you shortly.</p>
                  </div>
                ) : (
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email address"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="subject">Subject *</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="Enter subject"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="message">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Enter your message"
                        rows="5"
                      ></textarea>
                    </div>
                    
                    <button type="submit" className="submit-btn">
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact-map">
        <div className="container">
          <h2>Find Us Here</h2>
          <div className="map-container">
            <iframe
              title="Golden Energies Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.123456789!2d38.7636!3d9.0051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDAnMTguNCJOIDM4wrA0NSc0OS4wIkU!5e0!3m2!1sen!2set!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta">
        <div className="container">
          <h2>Prefer to Call Us?</h2>
          <p>Our team is ready to assist you with any questions or inquiries</p>
          <div className="cta-phone">
            <span className="phone-icon">📞</span>
            <span className="phone-number">+251 11 123 4567</span>
          </div>
          <button className="cta-button">Request a Call Back</button>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;