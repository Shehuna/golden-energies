import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Image as ImageIcon,
  Grid,
  List,
  Download,
  Share2,
  Heart,
  Eye,
  Calendar,
  Camera,
  MapPin
} from 'lucide-react';
import './Gallery.css';

// Dummy gallery data with images
const galleryData = [
  // Fuel Stations
  {
    id: 1,
    title: "Addis Ababa Main Station",
    description: "Our flagship fuel station in the heart of Addis Ababa, serving thousands of customers daily.",
    category: "Fuel Stations",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=800&h=600&fit=crop",
    date: "2026-06-28",
    location: "Addis Ababa, Ethiopia",
    photographer: "Samuel Tesfaye",
    likes: 234,
    views: 1245
  },
  {
    id: 2,
    title: "Bole Ring Road Station",
    description: "Modern fuel station located along Bole Ring Road, featuring 24/7 service and convenience store.",
    category: "Fuel Stations",
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&h=600&fit=crop",
    date: "2026-06-25",
    location: "Bole, Addis Ababa",
    photographer: "Meron Haile",
    likes: 156,
    views: 890
  },
  {
    id: 3,
    title: "Piassa Station - Night View",
    description: "Nighttime view of our Piassa station showcasing the modern lighting and architecture.",
    category: "Fuel Stations",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=800&h=600&fit=crop",
    date: "2026-06-20",
    location: "Piassa, Addis Ababa",
    photographer: "Dawit Gebre",
    likes: 198,
    views: 1567
  },
  {
    id: 4,
    title: "Bishoftu Fuel Station",
    description: "Our newly opened station in Bishoftu, featuring state-of-the-art fuel dispensing systems.",
    category: "Fuel Stations",
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&h=600&fit=crop",
    date: "2026-06-15",
    location: "Bishoftu, Ethiopia",
    photographer: "Tigist Assefa",
    likes: 89,
    views: 543
  },

  // Operations
  {
    id: 5,
    title: "Fuel Storage Facility",
    description: "Inside our state-of-the-art fuel storage facility with advanced safety systems.",
    category: "Operations",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=800&h=600&fit=crop",
    date: "2026-06-22",
    location: "Addis Ababa, Ethiopia",
    photographer: "Henok Ayele",
    likes: 312,
    views: 2345
  },
  {
    id: 6,
    title: "Fuel Transport Fleet",
    description: "Our modern fleet of fuel transport trucks ensuring safe and timely fuel delivery.",
    category: "Operations",
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&h=600&fit=crop",
    date: "2026-06-18",
    location: "Addis Ababa, Ethiopia",
    photographer: "Amanuel Hailu",
    likes: 267,
    views: 1876
  },
  {
    id: 7,
    title: "Quality Control Lab",
    description: "Our quality control laboratory where we test fuel quality to meet international standards.",
    category: "Operations",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=800&h=600&fit=crop",
    date: "2026-06-12",
    location: "Addis Ababa, Ethiopia",
    photographer: "Hanna Mekonnen",
    likes: 145,
    views: 987
  },

  // Events
  {
    id: 8,
    title: "4th Anniversary Celebration",
    description: "Golden Energies celebrates 4 years of excellence in fuel distribution with employees and partners.",
    category: "Events",
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&h=600&fit=crop",
    date: "2026-07-01",
    location: "Addis Ababa, Ethiopia",
    photographer: "Sara Yohannes",
    likes: 432,
    views: 3456
  },
  {
    id: 9,
    title: "Sustainability Award Ceremony",
    description: "Golden Energies receives the Sustainability Excellence Award for environmental stewardship.",
    category: "Events",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=800&h=600&fit=crop",
    date: "2026-06-05",
    location: "Addis Ababa, Ethiopia",
    photographer: "Michael Tsegaye",
    likes: 278,
    views: 2100
  },
  {
    id: 10,
    title: "Community Engagement Program",
    description: "Golden Energies employees participate in community development and outreach programs.",
    category: "Events",
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&h=600&fit=crop",
    date: "2026-05-28",
    location: "Addis Ababa, Ethiopia",
    photographer: "Ruth Asfaw",
    likes: 189,
    views: 1345
  },

  // Infrastructure
  {
    id: 11,
    title: "New Fuel Storage Depot",
    description: "Aerial view of our new fuel storage depot with advanced storage and safety features.",
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=800&h=600&fit=crop",
    date: "2026-06-20",
    location: "Addis Ababa, Ethiopia",
    photographer: "Bereket Haile",
    likes: 345,
    views: 2789
  },
  {
    id: 12,
    title: "Station Construction Progress",
    description: "Construction progress of our newest fuel station showcasing modern architectural design.",
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&h=600&fit=crop",
    date: "2026-06-10",
    location: "Bishoftu, Ethiopia",
    photographer: "Eden Tilahun",
    likes: 123,
    views: 876
  },

  // Team
  {
    id: 13,
    title: "Golden Energies Team",
    description: "The dedicated team behind Golden Energies' success and commitment to excellence.",
    category: "Team",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=800&h=600&fit=crop",
    date: "2026-06-30",
    location: "Addis Ababa, Ethiopia",
    photographer: "Yonas Demeke",
    likes: 567,
    views: 4567
  },
  {
    id: 14,
    title: "Employee Training Session",
    description: "Employees participate in comprehensive training programs for safety and professional development.",
    category: "Team",
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&h=600&fit=crop",
    date: "2026-06-08",
    location: "Addis Ababa, Ethiopia",
    photographer: "Birtukan Haile",
    likes: 234,
    views: 1567
  }
];

const Gallery = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Get unique categories
  const categories = ['All', ...new Set(galleryData.map(item => item.category))];

  // Filter gallery items
  const filteredItems = galleryData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Open image detail
  const openImageDetail = (item) => {
    const index = filteredItems.findIndex(i => i.id === item.id);
    setCurrentIndex(index);
    setSelectedImage(item);
    document.body.style.overflow = 'hidden';
  };

  // Close image detail
  const closeImageDetail = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  // Navigate through images
  const navigateImage = (direction) => {
    const newIndex = currentIndex + direction;
    if (newIndex >= 0 && newIndex < filteredItems.length) {
      setCurrentIndex(newIndex);
      setSelectedImage(filteredItems[newIndex]);
    }
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage) {
        if (e.key === 'ArrowLeft') navigateImage(-1);
        if (e.key === 'ArrowRight') navigateImage(1);
        if (e.key === 'Escape') closeImageDetail();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex]);

  return (
    <div>
      {/* Hero Section */}
      <div className="gallery-hero">
        <div className="gallery-hero-content">
          <h1>Gallery</h1>
          <p>Explore our visual journey through photos of our operations, events, facilities, and team</p>
        </div>
      </div>

      {/* Gallery Controls */}
      <div className="gallery-controls">
        <div className="container">
          <div className="controls-wrapper">
            <div className="search-bar">
              <Search size={20} />
              <input
                type="text"
                placeholder="Search photos..."
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
                <Grid size={18} />
              </button>
              <button
                className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
              >
                <List size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="gallery-main">
        <div className="container">
          {filteredItems.length === 0 ? (
            <div className="no-results">
              <ImageIcon size={48} />
              <p>No photos found matching your criteria.</p>
            </div>
          ) : (
            <div className={`gallery-${viewMode}`}>
              {filteredItems.map(item => (
                <div
                  key={item.id}
                  className={`gallery-item ${viewMode}-view`}
                  onClick={() => openImageDetail(item)}
                >
                  <div className="gallery-item-image">
                    <img src={item.image} alt={item.title} loading="lazy" />
                    <div className="gallery-item-overlay">
                      <div className="overlay-content">
                        <Heart size={20} />
                        <span>{item.likes}</span>
                        <Eye size={20} />
                        <span>{item.views}</span>
                      </div>
                    </div>
                  </div>
                  <div className="gallery-item-info">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className="item-meta">
                      <span className="category-badge">{item.category}</span>
                      <span className="item-location">
                        <MapPin size={14} />
                        {item.location}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Image Count */}
          <div className="image-count">
            Showing {filteredItems.length} of {galleryData.length} photos
          </div>
        </div>
      </div>

      {/* Image Detail Modal */}
      {selectedImage && (
        <div className="gallery-modal-overlay" onClick={closeImageDetail}>
          <div className="gallery-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeImageDetail}>
              <X size={24} />
            </button>

            <div className="modal-image-container">
              <img src={selectedImage.image} alt={selectedImage.title} />
              
              {/* Navigation buttons */}
              {filteredItems.length > 1 && (
                <>
                  <button
                    className="nav-btn nav-prev"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage(-1);
                    }}
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    className="nav-btn nav-next"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage(1);
                    }}
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            <div className="modal-info">
              <div className="modal-header-info">
                <h2>{selectedImage.title}</h2>
                <span className="modal-category">{selectedImage.category}</span>
              </div>

              <p className="modal-description">{selectedImage.description}</p>

              <div className="modal-meta">
                <span>
                  <Calendar size={18} />
                  {formatDate(selectedImage.date)}
                </span>
                <span>
                  <MapPin size={18} />
                  {selectedImage.location}
                </span>
                <span>
                  <Camera size={18} />
                  {selectedImage.photographer}
                </span>
              </div>

              <div className="modal-stats">
                <span>
                  <Heart size={18} />
                  {selectedImage.likes} Likes
                </span>
                <span>
                  <Eye size={18} />
                  {selectedImage.views} Views
                </span>
                <span className="image-counter">
                  {currentIndex + 1} / {filteredItems.length}
                </span>
              </div>

              <div className="modal-actions">
                <button className="action-btn">
                  <Download size={18} />
                  Download
                </button>
                <button className="action-btn">
                  <Share2 size={18} />
                  Share
                </button>
                <button className="action-btn">
                  <Heart size={18} />
                  Like
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;