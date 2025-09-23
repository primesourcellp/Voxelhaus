import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Users, Briefcase, Images, MessageSquare, Phone } from 'lucide-react';
import logoImage from '../assets/logo.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About Us', path: '/about', icon: Users },
    { name: 'Services', path: '/services', icon: Briefcase },
    { name: 'Gallery', path: '/gallery', icon: Images },
    { name: 'Testimonials', path: '/testimonials', icon: MessageSquare },
    { name: 'Contact', path: '/contact', icon: Phone },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (path) => {
    if (path === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-black/20 backdrop-blur-xl shadow-2xl border-b border-white/10' 
            : 'bg-black/10 backdrop-blur-md'
        }`}
        style={{
          boxShadow: isScrolled ? '0 8px 32px rgba(0, 153, 255, 0.3)' : '0 4px 16px rgba(0, 153, 255, 0.2)',
          backdropFilter: 'blur(12px)',
          background: isScrolled ? 'rgba(31, 41, 55, 0.3)' : 'rgba(31, 41, 55, 0.2)'
        }}
      >
        {/* Desktop Navbar - Hidden on Mobile */}
        <div className="hidden lg:block">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex items-center justify-between h-24">
              {/* Left Side - Logo */}
              <motion.div
                className="relative"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <Link to="/" className="flex items-center">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-xl overflow-hidden">
                      <img 
                        src={logoImage} 
                        alt="Voxelhaus Logo" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Desktop Navigation - Right Side */}
              <div className="flex items-center space-x-12">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;

                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      data-aos="fade-left"
                      data-aos-delay={200 + index * 100}
                    >
                      <Link
                        to={item.path}
                        onClick={() => scrollToSection(item.path)}
                        className="relative group px-6 py-3 rounded-lg transition-all duration-300"
                      >
                        <span
                          className={`relative z-10 text-sm font-semibold transition-all duration-300 ${
                            isActive
                              ? 'text-white'
                              : 'text-white/90 hover:text-[#0099FF]'
                          }`}
                          style={{
                            textShadow: isActive ? '0 0 15px rgba(0, 153, 255, 0.8)' : '0 0 5px rgba(255, 255, 255, 0.3)'
                          }}
                        >
                          {item.name}
                        </span>

                        {/* Neon Glow Hover */}
                        <motion.div
                          className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                          style={{
                            background: 'linear-gradient(135deg, #0099FF 0%, #0066CC 100%)',
                            boxShadow: '0 0 20px #0099FF',
                          }}
                          whileHover={{ scale: 1.05 }}
                        />

                        {/* Active Underline */}
                        {isActive && (
                          <motion.div
                            className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                            style={{
                              background: 'linear-gradient(90deg, #0099FF 0%, #0066CC 100%)',
                              boxShadow: '0 0 10px #0099FF, 0 0 20px #0099FF',
                            }}
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 0.5 }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navbar - Only for Mobile */}
        <div className="lg:hidden">
          <div className="px-2 py-0">
            <div className="flex items-center justify-between h-20">
              {/* Mobile Logo */}
              <motion.div
                className="relative"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <Link to="/" className="flex items-center">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-xl overflow-hidden">
                      <img 
                        src={logoImage} 
                        alt="Voxelhaus Logo" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={toggleMenu}
                className="relative p-3 rounded-xl transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  <motion.div
                    animate={isOpen ? { rotate: 45 } : { rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
                  </motion.div>
                </div>
                
                {/* Neon Glow on Hover */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                     style={{
                                 background: 'linear-gradient(135deg, #0099FF 0%, #0066CC 100%)',
                       boxShadow: '0 0 20px #00F0FF',
                     }}
                />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - RIGHT SIDE */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="absolute left-0 top-0 h-full w-full bg-black/95 backdrop-blur-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 h-full flex flex-col py-30">
                {/* Mobile Navigation */}
                <div className="space-y-3 flex-1">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;

                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        <Link
                          to={item.path}
                          onClick={() => scrollToSection(item.path)}
                          className={`relative group flex items-center justify-between p-6 rounded-2xl transition-all duration-300 w-full ${
                            isActive
                              ? 'text-white bg-white/20'
                              : 'text-white/95 hover:text-white hover:bg-white/15'
                          }`}
                        >
                          <span 
                            className="font-bold text-xl"
                            style={{
                              textShadow: isActive ? '0 0 10px rgba(0, 153, 255, 0.6)' : '0 0 3px rgba(255, 255, 255, 0.4)'
                            }}
                          >
                            {item.name}
                          </span>
                          
                          {/* Arrow Icon */}
                          <motion.div
                            className="text-white/70 group-hover:text-[#0099FF] transition-colors duration-300"
                            animate={{ x: isActive ? 8 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Icon size={20} />
                          </motion.div>

                          {/* Active Indicator */}
                          {isActive && (
                            <motion.div
                              className="absolute left-0 top-0 bottom-0 w-2 rounded-r-full"
                              style={{
                                background: 'linear-gradient(180deg, #00F0FF 0%, #0099FF 100%)',
                                boxShadow: '0 0 20px #0099FF',
                              }}
                              initial={{ scaleY: 0 }}
                              animate={{ scaleY: 1 }}
                              transition={{ duration: 0.3 }}
                            />
                          )}

                          {/* Hover Glow */}
                          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                               style={{
                                 background: 'linear-gradient(135deg, #0099FF 0%, #0066CC 100%)',
                                 boxShadow: '0 0 30px rgba(0, 153, 255, 0.4)',
                               }}
                          />
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="pt-8 border-t border-white/20"
                >
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="w-full flex items-center justify-center space-x-4 p-6 rounded-2xl font-bold text-xl transition-all duration-300 group relative overflow-hidden"
                    style={{
                                 background: 'linear-gradient(135deg, #0099FF 0%, #0066CC 100%)',
                      boxShadow: '0 0 40px rgba(0, 240, 255, 0.5)',
                    }}
                  >
                    <Phone size={24} className="group-hover:scale-110 transition-transform duration-300" />
                    <span>Get Free Quote</span>
                    
                    {/* Animated background effect */}
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-full group-hover:translate-x-0" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;