import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowRight
} from 'lucide-react';
import logoImage from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Floor Plans',
    'Virtual Staging',
    'Photo Editing',
    '3D Visualization',
    'Object Removal',
    'Sky Replacement'
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' }
  ];

  return (
    <footer className="bg-gradient-dark text-white py-15">
      {/* Main Footer Content */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 rounded-lg overflow-hidden ml-4">
                <img 
                  src={logoImage} 
                  alt="Voxelhaus Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed ml-2">
              Turning spaces into stunning experiences. We specialize in floor plans, 
              virtual staging, and photo editing for real estate professionals.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-[#00d4ff] transition-colors duration-300 group ml-2"
                  >
                    <Icon size={20} className="group-hover:scale-110 transition-transform duration-300" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-gray-300 hover:text-[#00d4ff] transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight size={16} className="mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-[#00d4ff] transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight size={16} className="mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-[#00d4ff] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Office Address</p>
                  <p className="text-sm text-gray-400">(Office location)</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-[#00d4ff] flex-shrink-0" />
                <a
                  href="tel:+91-XXXXXXXXXX"
                  className="text-gray-300 hover:text-[#00d4ff] transition-colors duration-300"
                >
                  +91-XXXXXXXXXX
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-[#00d4ff] flex-shrink-0" />
                <a
                  href="mailto:info@voxelhaus.com"
                  className="text-gray-300 hover:text-[#00d4ff] transition-colors duration-300"
                >
                  info@voxelhaus.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Globe size={20} className="text-[#00d4ff] flex-shrink-0" />
                <a
                  href="https://voxelhaus.com"
                  className="text-gray-300 hover:text-[#00d4ff] transition-colors duration-300"
                >
                  www.voxelhaus.com
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="pt-4 border-t border-slate-600">
              <h5 className="font-semibold text-white mb-2">Business Hours</h5>
              <div className="text-sm text-gray-300 space-y-1">
                <p>Monday – Friday: 9:00 AM – 7:00 PM</p>
                <p>Saturday: 10:00 AM – 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-600">
        <div className="container-custom py-0">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0 py-2 mt-7">
            <p className="text-gray-400 text-sm">
              © {currentYear} Voxelhaus Consultancy. All rights reserved.
            </p>
            <a 
              href="https://primesourcellp.com/#/Home" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 text-sm font-medium hover:text-[#00d4ff] transition-colors duration-300"
            >
              Developed by Primesource LLP
            </a>
            <div className="flex items-center space-x-6 text-sm">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-[#00d4ff] transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-[#00d4ff] transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
