import React from 'react';
import './News.css';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: 'New Gas Station Opening',
      category: 'Expansion',
      date: 'June 15, 2026',
      description: 'Golden Energies is proud to announce the opening of our newest gas station in Addis Ababa. This state-of-the-art facility features 8 fuel pumps, a convenience store, and car wash services.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs-nW_zksV5mDK6gvU-ztftcZPEYwndqAQkcC11fE43oIrrQdEFUJXOyyE&s=10',
      buttonText: 'Learn More →'
    },
    {
      id: 2,
      title: 'New Motor Oil Coming Soon',
      category: 'Product Launch',
      date: 'July 1, 2026',
      description: 'Golden Energies is set to launch a new premium motor oil line designed for maximum engine protection and performance. Available in all our stations starting next month.',
      image: 'https://www.shoprite.co.za/medias/checkers515Wx515H-10123629EA.png?context=bWFzdGVyfGltYWdlc3wyMTUzODl8aW1hZ2UvcG5nfGltYWdlcy9oZjkvaGIzLzEyNTQ1MzE3OTYxNzU4LnBuZ3wwMGU0MTY2Y2ViN2I4YTVkODUyZDMwNjdhN2Y4MDg0NWNiZmMzZTU5NzIzZDc0ZjBiNThiZTMwNTM1ZjE4N2Q0',
      buttonText: 'Learn More →'
    },
    {
      id: 3,
      title: 'Annual Company Event 2026',
      category: 'Community',
      date: 'July 20, 2026',
      description: 'Join us for our annual company event celebrating our achievements and commitment to sustainable energy. The event will feature guest speakers, networking, and community activities.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop&crop=center',
      buttonText: 'Learn More →'
    }
  ];

  return (
    <section className="news-section">
      {/* White Space Above */}
      <div className="news-spacer"></div>

      {/* Background Image Wrapper - Oil Refinery */}
      <div className="news-background-wrapper">
        <div className="news-container">
          {/* Header */}
          <div className="news-header">
            <h2 className="news-title">
              News & <span className="highlight">Events</span>
            </h2>
            <p className="news-description">
              Discover the latest updates, product launches, and events from Golden Energies
            </p>
          </div>

          {/* News Grid - 3 Columns */}
          <div className="news-grid">
            {newsItems.map((item) => (
              <div key={item.id} className="news-card">
                <div className="news-image-wrapper">
                  <img src={item.image} alt={item.title} className="news-image" />
                  <span className="news-category">{item.category}</span>
                </div>
                <div className="news-content">
                  <span className="news-date">{item.date}</span>
                  <h3 className="news-item-title">{item.title}</h3>
                  <p className="news-description-text">{item.description}</p>
                  <button className="news-read-more">{item.buttonText}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;