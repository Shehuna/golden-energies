import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  User, 
  ChevronRight, 
  Search, 
  Filter,
  Clock,
  Share2,
  Bookmark,
  Eye,
  ThumbsUp,
  MessageCircle
} from 'lucide-react';
import './News.css';

// Dummy news data with images
const dummyNews = [
  {
    id: 1,
    title: "Golden Energies Launches New Ultra-Low Sulfur Fuel Across All Stations",
    excerpt: "Golden Energies announces the nationwide rollout of ultra-low sulfur fuel, marking a significant milestone in Ethiopia's journey towards cleaner energy solutions.",
    content: "Golden Energies, a leading energy provider in Ethiopia, has announced the successful rollout of ultra-low sulfur fuel across all its service stations nationwide. This initiative aligns with the company's commitment to environmental sustainability and provides customers with cleaner, more efficient fuel options.",
    category: "Press Release",
    author: "Sarah Johnson",
    date: "2026-06-28",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=800&h=400&fit=crop",
    views: 1245,
    likes: 89,
    comments: 23,
    featured: true
  },
  {
    id: 2,
    title: "Golden Energies Celebrates 4 Years of Excellence in Fuel Distribution",
    excerpt: "As Golden Energies marks its 4th anniversary, the company reflects on its journey of growth, innovation, and commitment to powering Ethiopia's progress.",
    content: "Golden Energies celebrates four years of dedicated service in Ethiopia's energy sector. From humble beginnings with a single fuel station, the company has grown to become a trusted name in fuel distribution, serving thousands of customers across the country.",
    category: "Announcement",
    author: "Michael Tesfaye",
    date: "2026-07-01",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&h=400&fit=crop",
    views: 876,
    likes: 67,
    comments: 15,
    featured: false
  },
  {
    id: 3,
    title: "New Fuel Storage Depot Opens in Addis Ababa to Boost Supply Chain",
    excerpt: "Golden Energies inaugurates a state-of-the-art fuel storage facility in Addis Ababa, enhancing supply chain efficiency and ensuring uninterrupted fuel availability.",
    content: "Golden Energies has officially opened its newest fuel storage depot in Addis Ababa. The facility, equipped with advanced storage and safety systems, significantly enhances the company's storage capacity and ensures a consistent supply of fuel to meet growing demand.",
    category: "Infrastructure",
    author: "David Williams",
    date: "2026-06-20",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=800&h=400&fit=crop",
    views: 2341,
    likes: 156,
    comments: 42,
    featured: true
  },
  {
    id: 4,
    title: "Golden Energies Partners with Local Businesses for Community Development",
    excerpt: "The company announces new partnerships with local businesses to drive economic growth and create employment opportunities in the communities it serves.",
    content: "Golden Energies has launched a community development initiative that partners with local businesses to foster economic growth and create employment opportunities. The program focuses on supporting small and medium-sized enterprises (SMEs) in the energy sector.",
    category: "Community",
    author: "Ruth Abera",
    date: "2026-06-15",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&h=400&fit=crop",
    views: 567,
    likes: 45,
    comments: 12,
    featured: false
  },
  {
    id: 5,
    title: "Golden Energies Introduces Mobile App for Easy Fuel Ordering",
    excerpt: "Golden Energies' new mobile application revolutionizes fuel ordering, allowing customers to conveniently order fuel and track deliveries in real-time.",
    content: "Golden Energies has launched a mobile application that simplifies fuel ordering and delivery tracking. The user-friendly app allows customers to place orders, schedule deliveries, and monitor their fuel consumption, all from the palm of their hand.",
    category: "Innovation",
    author: "Yohannes Gebre",
    date: "2026-06-10",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=800&h=400&fit=crop",
    views: 1987,
    likes: 134,
    comments: 38,
    featured: false
  },
  {
    id: 6,
    title: "Golden Energies Wins Prestigious Sustainability Award",
    excerpt: "Golden Energies has been honored with the Sustainability Excellence Award for its outstanding commitment to environmental stewardship and sustainable practices.",
    content: "Golden Energies has been recognized with the Sustainability Excellence Award for its exceptional commitment to environmental sustainability. The award acknowledges the company's innovative approaches to reducing carbon emissions and promoting renewable energy solutions.",
    category: "Awards",
    author: "Helen Demissie",
    date: "2026-06-05",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&h=400&fit=crop",
    views: 3421,
    likes: 278,
    comments: 56,
    featured: false
  },
  {
    id: 7,
    title: "Golden Energies Expands Operations to Regional Cities",
    excerpt: "The company announces expansion plans to open new fuel stations in five regional cities, bringing quality fuel services closer to customers.",
    content: "Golden Energies is expanding its footprint beyond Addis Ababa with plans to open new fuel stations in five regional cities. This expansion will bring quality fuel services to customers in these areas and create new employment opportunities.",
    category: "Expansion",
    author: "Tesfaye Hailu",
    date: "2026-05-28",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=800&h=400&fit=crop",
    views: 765,
    likes: 54,
    comments: 19,
    featured: false
  },
  {
    id: 8,
    title: "Golden Energies Hosts Fuel Safety Training for Employees",
    excerpt: "Golden Energies conducted comprehensive fuel safety training for its employees to ensure the highest safety standards in fuel handling and distribution.",
    content: "Golden Energies has completed a comprehensive safety training program for all employees involved in fuel handling and distribution. The training covered best practices in fuel safety, emergency response, and hazard prevention.",
    category: "Safety",
    author: "Girma Tadesse",
    date: "2026-05-20",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&h=400&fit=crop",
    views: 432,
    likes: 34,
    comments: 8,
    featured: false
  }
];

const News = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [selectedNews, setSelectedNews] = useState(null);

  // Get unique categories
  const categories = ['All', ...new Set(dummyNews.map(news => news.category))];

  // Filter news based on search and category
  const filteredNews = dummyNews.filter(news => {
    const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          news.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          news.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || news.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Featured news
  const featuredNews = dummyNews.filter(news => news.featured);

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Get time ago
  const getTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
  };

  // Open news detail modal
  const openNewsDetail = (news) => {
    setSelectedNews(news);
    document.body.style.overflow = 'hidden';
  };

  // Close news detail modal
  const closeNewsDetail = () => {
    setSelectedNews(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div >
      {/* Hero Section */}
      <div className="news-hero">
        <div className="news-hero-content">
          <h1>News & Updates</h1>
          <p>Stay informed about the latest developments, announcements, and stories from Golden Energies</p>
        </div>
      </div>

      {/* Featured News Section */}
      {featuredNews.length > 0 && (
        <div className="featured-news">
          <div className="container">
            <h2 className="section-title">Featured Stories</h2>
            <div className="featured-grid">
              {featuredNews.map(news => (
                <div key={news.id} className="featured-card" onClick={() => openNewsDetail(news)}>
                  <div className="featured-image">
                    <img src={news.image} alt={news.title} loading="lazy" />
                    <span className="featured-badge">Featured</span>
                  </div>
                  <div className="featured-content">
                    <span className="news-category">{news.category}</span>
                    <h3>{news.title}</h3>
                    <p>{news.excerpt}</p>
                    <div className="news-meta">
                      <span className="news-date">
                        <Calendar size={16} />
                        {formatDate(news.date)}
                      </span>
                      <span className="news-author">
                        <User size={16} />
                        {news.author}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="news-main">
        <div className="container">
          {/* Header */}
          <div className="news-header">
            <h2>All News</h2>
            <div className="news-controls">
              <div className="search-bar">
                <Search size={20} />
                <input
                  type="text"
                  placeholder="Search news..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="category-filter">
                <Filter size={20} />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              <div className="view-toggle">
                <button
                  className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                >
                  Grid
                </button>
                <button
                  className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                  onClick={() => setViewMode('list')}
                >
                  List
                </button>
              </div>
            </div>
          </div>

          {/* News Grid/List */}
          {filteredNews.length === 0 ? (
            <div className="no-news">
              <p>No news found matching your criteria.</p>
            </div>
          ) : (
            <div className={`news-${viewMode}`}>
              {filteredNews.map(news => (
                <div key={news.id} className={`news-card ${viewMode}-view`} onClick={() => openNewsDetail(news)}>
                  <div className="news-card-image">
                    <img src={news.image} alt={news.title} loading="lazy" />
                  </div>
                  <div className="news-card-content">
                    <span className="news-category">{news.category}</span>
                    <h3>{news.title}</h3>
                    <p>{news.excerpt}</p>
                    <div className="news-meta">
                      <span className="news-date">
                        <Calendar size={16} />
                        {formatDate(news.date)}
                      </span>
                      <span className="news-author">
                        <User size={16} />
                        {news.author}
                      </span>
                      <span className="news-read-time">
                        <Clock size={16} />
                        {news.readTime}
                      </span>
                    </div>
                    <div className="news-stats">
                      <span><Eye size={16} /> {news.views}</span>
                      <span><ThumbsUp size={16} /> {news.likes}</span>
                      <span><MessageCircle size={16} /> {news.comments}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* News Detail Modal */}
      {selectedNews && (
        <div className="news-modal-overlay" onClick={closeNewsDetail}>
          <div className="news-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeNewsDetail}>×</button>
            
            <div className="modal-image">
              <img src={selectedNews.image} alt={selectedNews.title} />
              <span className="modal-category">{selectedNews.category}</span>
            </div>
            
            <div className="modal-content">
              <h2>{selectedNews.title}</h2>
              
              <div className="modal-meta">
                <span>
                  <User size={18} />
                  {selectedNews.author}
                </span>
                <span>
                  <Calendar size={18} />
                  {formatDate(selectedNews.date)}
                </span>
                <span>
                  <Clock size={18} />
                  {selectedNews.readTime}
                </span>
              </div>
              
              <div className="modal-body">
                <p>{selectedNews.content}</p>
                <p>{selectedNews.content}</p>
                <p>{selectedNews.content}</p>
              </div>
              
              <div className="modal-actions">
                <button className="action-btn">
                  <ThumbsUp size={20} />
                  Like ({selectedNews.likes})
                </button>
                <button className="action-btn">
                  <Share2 size={20} />
                  Share
                </button>
                <button className="action-btn">
                  <Bookmark size={20} />
                  Save
                </button>
                <button className="action-btn">
                  <MessageCircle size={20} />
                  Comment ({selectedNews.comments})
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default News;