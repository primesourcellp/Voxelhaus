import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

// Service Pages
import RealEstatePage from './pages/RealEstatePage';
import ObjectRemovalPage from './pages/ObjectRemovalPage';
import ColorCastRemovalPage from './pages/ColorCastRemovalPage';
import SkyReplacementPage from './pages/SkyReplacementPage';
import FloorPlansPage from './pages/FloorPlansPage';
import VirtualStagingPage from './pages/VirtualStagingPage';

// ScrollToTop component to handle page navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <Router >
      <div className="min-h-screen bg-slate-900 text-white font-sans">
        <Navbar/>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/Home" element={<Home />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Service Pages */}
            <Route path="/real-estate" element={<RealEstatePage />} />
            <Route path="/object-removal" element={<ObjectRemovalPage />} />
            <Route path="/color-cast-removal" element={<ColorCastRemovalPage />} />
            <Route path="/sky-replacement" element={<SkyReplacementPage />} />
            <Route path="/floor-plans" element={<FloorPlansPage />} />
            <Route path="/virtual-staging" element={<VirtualStagingPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
