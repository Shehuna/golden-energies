import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import TopBar from './components/TopBar/TopBar';
import Carousel from './components/Carousel/Carousel';
import PremiumQuote from './components/PremiumQuote/PremiumQuote';
import WhoWeAre from './components/WhoWeAre/WhoWeAre'; // Import WhoWeAre
import ProductsServicesSection from './components/ProductsServicesSection/ProductsServicesSection';
import SupplyChainSection from './components/SupplyChainSection/SupplyChainSection';
import FindStation from './components/FindStation/FindStation';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import ClientPartners from './components/ClientPartners/ClientPartners';
import Testimonials from './components/Testimonials/Testimonials';
import WorkWithUs from './components/WorkWithUs/WorkWithUs';
import Footer from './components/Footer/Footer';
import AboutUs from './pages/AboutUs';
import ProductsServices from './pages/ProductsServices';
import GasStations from './pages/GasStations';
import ContactUs from './pages/ContactUs';
import News from './pages/News';
import Gallery from './pages/Gallery';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <TopBar />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <>
                <Carousel />
                <WhoWeAre /> 
                <PremiumQuote />
                <SupplyChainSection />
                <ProductsServicesSection />
                
                {/* <WhyChooseUs /> */}
                <FindStation />
                <ClientPartners />
                {/* <Testimonials /> */}
                {/* <WorkWithUs /> */}
              </>
            } />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/who-we-are" element={<AboutUs />} />
            <Route path="/products-services" element={<ProductsServices />} />
            <Route path="/services" element={<ProductsServices />} />
            <Route path="/gas-stations" element={<GasStations />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/news" element={<News />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;