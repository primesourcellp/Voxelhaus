import { motion } from 'framer-motion';
import { 
  Home, 
  Camera, 
  Video, 
  Palette, 
  Layout, 
  Box,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Clock,
  Award,
  DollarSign,
  MessageSquare
} from 'lucide-react';
import image3d4 from '../assets/3d_image_4.jpg';

// Import service components
import RealEstateServices from '../components/services/RealEstateServices';
import ObjectRemovalServices from '../components/services/ObjectRemovalServices';
import ColorCastRemovalServices from '../components/services/ColorCastRemovalServices';
import SkyReplacementServices from '../components/services/SkyReplacementServices';
import Visualization3DServices from '../components/services/Visualization3DServices';
import FloorPlan2DServices from '../components/services/FloorPlan2DServices';
import FloorPlan3DServices from '../components/services/FloorPlan3DServices';
import VisualStagingServices from '../components/services/VisualStagingServices';

const Services = () => {
  const services = [
    {
      icon: Layout,
      title: "2D & 3D Floor Plans",
      description: "We create accurate, easy-to-read floor plans in both classic 2D and immersive 3D formats. These plans give potential buyers a realistic sense of the home's size and spatial relationships.",
      features: ["Accurate measurements", "Multiple format options", "Professional presentation", "Easy to understand"]
    },
    {
      icon: Home,
      title: "3D Visualization",
      description: "Bring your vision to life with realistic 3D visualizations. We create stunningly detailed 3D renderings of exteriors and interiors, giving potential buyers and investors a tangible look at what's possible.",
      features: ["Realistic renderings", "Exterior & interior views", "High-quality output", "Blueprint to reality"]
    },
    {
      icon: Box,
      title: "Floor Plan Redraws",
      description: "Have a hand-drawn sketch, old blueprint, or a PDF? Our team can professionally redraw any floor plan into a clean, digital version that is perfect for any online listing or brochure.",
      features: ["Any format input", "Professional redraws", "Digital optimization", "Print-ready output"]
    },
    {
      icon: Palette,
      title: "Virtual Staging",
      description: "Our virtual staging service allows you to professionally furnish and decorate a space without the high cost and logistical hassle of traditional staging. We can add stylish furniture, decor, and accessories.",
      features: ["Cost-effective", "No physical staging", "Stylish furniture", "Emotional connection"]
    },
    {
      icon: Home,
      title: "Virtual Home Staging",
      description: "Transform empty or outdated rooms into beautifully furnished and inviting spaces without the hassle of traditional staging. Our virtual home staging service digitally places stylish furniture, decor, and accessories.",
      features: ["Empty room transformation", "Modern furniture", "Inviting atmosphere", "Professional results"]
    },
    {
      icon: Camera,
      title: "Stunning Real Estate Photo Editing",
      description: "We transform standard property photos into high-quality, professional images. Our services include a wide range of edits such as lighting and color correction, sky replacement, object removal, and more.",
      features: ["Lighting correction", "Sky replacement", "Object removal", "Color enhancement"]
    },
    {
      icon: Video,
      title: "Real Estate Video Editing",
      description: "In a market dominated by digital media, video is essential for telling a property's full story. Our real estate video editing services turn raw footage into a captivating and immersive tour.",
      features: ["Immersive tours", "Professional editing", "Engaging content", "Market-ready videos"]
    }
  ];

  const stats = [
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Star, number: "4.9/5", label: "Client Rating" },
    { icon: Clock, number: "24hrs", label: "Average Delivery" }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Full Page Hero Section */}
      <section 
        className="min-h-screen flex items-center relative overflow-x-hidden w-full"
        style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"%3E%3Cdefs%3E%3Cpattern id="services-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse"%3E%3Crect width="100" height="100" fill="%23111127"/%3E%3Cpath d="M0 0L100 100M100 0L0 100" stroke="%2300F0FF" stroke-width="0.5" opacity="0.1"/%3E%3Ccircle cx="50" cy="50" r="20" fill="none" stroke="%2300F0FF" stroke-width="0.3" opacity="0.2"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="1200" height="800" fill="url(%23services-pattern)"/%3E%3C/svg%3E')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 bg-[#00F0FF]/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-40 h-40 bg-[#0099FF]/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="container-custom relative z-10 overflow-hidden py-35">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 px-4 lg:px-8"
            >
              <div className="space-y-6">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center space-x-2 bg-[#00F0FF]/10 border border-[#00F0FF]/30 rounded-full px-6 py-3"
                >
                  <div className="w-2 h-2 bg-[#00F0FF] rounded-full animate-pulse"></div>
                  <span className="text-[#00F0FF] font-semibold text-lg tracking-wider uppercase">Professional Visual Solutions</span>
                  <div className="w-2 h-2 bg-[#00F0FF] rounded-full animate-pulse"></div>
                </motion.div>

                <motion.h1 
                  initial={{ opacity: 0, x: -30, rotateX: -90 }}
                  animate={{ opacity: 1, x: 0, rotateX: 0 }}
                  transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                >
                  <motion.span
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="block"
                  >
                    Professional Visual
                  </motion.span>
                  <motion.span 
                    className="bg-gradient-to-r from-[#00F0FF] to-[#0099FF] bg-clip-text text-transparent block"
                    style={{ textShadow: '0 0 30px rgba(0, 240, 255, 0.5)' }}
                    initial={{ opacity: 0, y: 50, rotateX: 90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
                  >
                    Solutions
                  </motion.span>
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                  className="text-xl text-gray-300 leading-relaxed"
                  whileHover={{ 
                    scale: 1.02,
                    color: '#ffffff'
                  }}
                >
                  At Voxelhaus consultancy, we provide a full suite of professional visual solutions designed to help real estate professionals like you market properties more effectively. From foundational floor plans to stunning photo enhancements, our services are tailored to make your listings stand out and attract the right buyers.
                </motion.p>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    boxShadow: [
                      '0 0 20px rgba(0, 240, 255, 0.3)',
                      '0 0 30px rgba(0, 240, 255, 0.5)',
                      '0 0 20px rgba(0, 240, 255, 0.3)'
                    ]
                  }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 1.2,
                    boxShadow: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  whileHover={{ 
                    scale: 1.08,
                    boxShadow: '0 0 40px rgba(0, 240, 255, 0.8), 0 0 80px rgba(0, 240, 255, 0.4)',
                    y: -5
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#00F0FF] to-[#0099FF] text-black font-bold px-8 py-4 rounded-xl flex items-center justify-center space-x-2 text-lg transition-all duration-300 border-2 border-transparent hover:border-[#00F0FF]/50"
                >
                  <span>Get Started</span>
                  <ArrowRight size={20} />
                </motion.button>
                <motion.button
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    boxShadow: [
                      '0 0 20px rgba(0, 240, 255, 0.2)',
                      '0 0 30px rgba(0, 240, 255, 0.4)',
                      '0 0 20px rgba(0, 240, 255, 0.2)'
                    ]
                  }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 1.4,
                    boxShadow: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }
                  }}
                  whileHover={{ 
                    scale: 1.08,
                    boxShadow: '0 0 40px rgba(0, 240, 255, 0.6), 0 0 80px rgba(0, 240, 255, 0.3)',
                    y: -5
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-[#00F0FF] text-[#00F0FF] px-8 py-4 rounded-xl font-bold flex items-center justify-center space-x-2 text-lg hover:bg-[#00F0FF] hover:text-black transition-all duration-300"
                >
                  <MessageSquare size={20} />
                  <span>Contact Us Today</span>
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="grid grid-cols-3 gap-4 pt-8"
              >
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div 
                      key={stat.label}
                      className="text-center p-4 rounded-xl bg-black/20 backdrop-blur-sm border border-[#00F0FF]/20 hover:border-[#00F0FF]/50 transition-all duration-300"
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.8 + index * 0.2 }}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: '0 0 30px rgba(0, 240, 255, 0.3)',
                        y: -5
                      }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-[#00F0FF]/20 to-[#0099FF]/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Icon size={20} className="text-[#00F0FF]" />
                      </div>
                      <motion.div 
                        className="text-2xl font-bold text-[#00F0FF]"
                        style={{ textShadow: '0 0 20px rgba(0, 240, 255, 0.5)' }}
                        animate={{
                          textShadow: [
                            '0 0 20px rgba(0, 240, 255, 0.5)',
                            '0 0 30px rgba(0, 240, 255, 0.8)',
                            '0 0 20px rgba(0, 240, 255, 0.5)'
                          ]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        {stat.number}
                      </motion.div>
                      <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              {/* Services Image */}
              <div className="w-full h-96 rounded-2xl overflow-hidden relative shadow-2xl">
                <img 
                  src={image3d4} 
                  alt="Professional Visual Solutions" 
                  className="w-full h-full object-cover"
                />
                
                {/* Floating Elements */}
                <motion.div 
                  className="absolute top-8 left-8 w-8 h-8 bg-[#00F0FF]/40 rounded-full"
                  animate={{ 
                    y: [0, -10, 0],
                    opacity: [0.4, 0.8, 0.4]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute top-16 right-12 w-6 h-6 bg-[#0099FF]/40 rounded-full"
                  animate={{ 
                    y: [0, -8, 0],
                    opacity: [0.3, 0.7, 0.3]
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
                <motion.div 
                  className="absolute bottom-12 left-12 w-4 h-4 bg-[#00F0FF]/50 rounded-full"
                  animate={{ 
                    y: [0, -6, 0],
                    opacity: [0.5, 0.9, 0.5]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-6 md:px-12 bg-gray-900 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Service{' '}
              <span className="text-[#00F0FF]">Overview</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Discover our comprehensive range of professional visual services designed to elevate your real estate marketing.
            </p>
          </motion.div>

          {/* Services List */}
          <div className="space-y-16 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24 items-center ${
                    isEven ? '' : 'lg:grid-flow-col-dense'
                  }`}
                >
                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className={`space-y-6 ${isEven ? 'lg:pr-8' : 'lg:pl-8 lg:col-start-2'}`}
                  >
                    {/* Service Icon & Title */}
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#00F0FF] to-[#0099FF] rounded-2xl flex items-center justify-center">
                        <Icon size={32} className="text-white" />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white">
                        {service.title}
                      </h3>
                    </div>
                    
                    {/* Description */}
                    <p className="text-lg text-gray-300 leading-relaxed mb-8">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-white mb-4">Key Features:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 + featureIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-colors duration-300"
                          >
                            <CheckCircle size={20} className="text-[#00F0FF] flex-shrink-0" />
                            <span className="text-gray-300 font-medium">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Service Image */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className={`relative ${isEven ? 'lg:col-start-2' : 'lg:col-start-1'}`}
                  >
                    <div className="w-full h-80 rounded-2xl overflow-hidden shadow-2xl">
                      <img 
                        src={image3d4} 
                        alt={service.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    {/* Floating Elements */}
                    <motion.div 
                      className="absolute top-4 right-4 w-8 h-8 bg-[#00F0FF]/40 rounded-full"
                      animate={{ 
                        y: [0, -10, 0],
                        opacity: [0.4, 0.8, 0.4]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.div 
                      className="absolute bottom-4 left-4 w-6 h-6 bg-[#0099FF]/40 rounded-full"
                      animate={{ 
                        y: [0, -8, 0],
                        opacity: [0.3, 0.7, 0.3]
                      }}
                      transition={{ 
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                      }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Voxelhaus Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-800 relative overflow-hidden">
        <div className="container-custom relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-5xl mx-auto mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-3 mb-8"
            >
              <div className="w-2 h-2 bg-[#00F0FF] rounded-full animate-pulse"></div>
              <span className="text-[#00F0FF] font-semibold text-lg tracking-wider uppercase">Why Choose Us</span>
              <div className="w-2 h-2 bg-[#00F0FF] rounded-full animate-pulse"></div>
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-[#00F0FF] via-[#0099FF] to-[#00F0FF] bg-clip-text text-transparent">
                Voxelhaus Consultancy?
              </span>
            </h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto"
            >
              In a competitive market, your choice of a visual partner can make all the difference. At Voxelhaus consultancy, we don't just provide services; we deliver a strategic advantage.
            </motion.p>
          </motion.div>

          {/* Why Choose Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Star,
                title: "Unmatched Visual Impact",
                description: "We go beyond basic photo edits. Our Photoshop services and virtual staging are designed to create a powerful emotional connection with buyers, transforming a simple listing into a compelling visual story that captures attention immediately."
              },
              {
                icon: CheckCircle,
                title: "Precision and Accuracy",
                description: "Our floor plans are renowned for their meticulous detail and accuracy. We provide prospective buyers with a comprehensive, trustworthy understanding of a property's layout and dimensions, which is crucial for building confidence and reducing time spent on unnecessary viewings."
              },
              {
                icon: Clock,
                title: "Accelerated Marketing Timelines",
                description: "Time is money in real estate. Our streamlined process and commitment to fast turnaround times mean you get your high-quality visuals quickly, allowing you to list properties sooner and stay ahead of the competition."
              },
              {
                icon: Award,
                title: "Cost-Effective Excellence",
                description: "Investing in professional visuals shouldn't be a luxury. We offer a high-value, affordable solution that provides a significant return on investment by attracting more interested buyers and helping you achieve a better sales price."
              },
              {
                icon: Users,
                title: "Seamless Collaboration",
                description: "Working with us is easy. Simply provide your raw photos, sketches, or project details, and our team will handle the rest."
              },
              {
                icon: Layout,
                title: "Comprehensive Service Suite",
                description: "From foundational 2D floor plans to polished retouched photos and captivating virtual staging, we offer a full suite of services under one roof."
              },
              {
                icon: Home,
                title: "Dedicated Real Estate Expertise",
                description: "We live and breathe real estate. Our team understands the specific needs of the industry, from the importance of curb appeal to the critical role of accurate floor plans."
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-[#00F0FF]/30 rounded-2xl p-6 md:p-8 hover:border-[#00F0FF] transition-all duration-500 hover:-translate-y-2 shadow-[0px_0px_15px_2px_rgba(0,240,255,0.15)] hover:shadow-[0px_0px_20px_5px_rgba(0,240,255,0.3)]">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-[#00F0FF] to-[#0099FF] rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={28} className="text-white md:hidden" />
                      <Icon size={32} className="text-white hidden md:block" />
                    </div>
                    
                    <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 group-hover:text-[#00F0FF] transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Real Estate Services Section */}
      <RealEstateServices />

      {/* Real Estate Object Removal Services Section */}
      <ObjectRemovalServices />

      {/* Color Cast Removal Services Section */}
      <ColorCastRemovalServices />

      {/* Sky Replacement Services Section */}
      <SkyReplacementServices />

      {/* 3D Visualization Services Section */}
      <Visualization3DServices />

      {/* 2D Floor Plan Redraw Services Section */}
      <FloorPlan2DServices />

      {/* 3D Floor Plan Redraw Services Section */}
      <FloorPlan3DServices />

      {/* Visual Staging Services Section */}
      <VisualStagingServices />

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#00F0FF] rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#0099FF] rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your{' '}
              <span className="bg-gradient-to-r from-[#00F0FF] to-[#0099FF] bg-clip-text text-transparent">
                Property Marketing?
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              Let our professional visual solutions help you showcase properties in their best light and attract the right buyers.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 40px rgba(0, 240, 255, 0.8)',
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#00F0FF] to-[#0099FF] text-black font-bold px-10 py-4 rounded-2xl flex items-center justify-center space-x-3 text-lg transition-all duration-300 shadow-lg shadow-[#00F0FF]/25"
              >
                <span>Get Started Today</span>
                <ArrowRight size={20} />
              </motion.button>
              
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 40px rgba(0, 240, 255, 0.8)',
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-[#00F0FF] text-[#00F0FF] px-10 py-4 rounded-2xl font-bold flex items-center justify-center space-x-3 text-lg hover:bg-[#00F0FF] hover:text-black transition-all duration-300 shadow-lg shadow-[#00F0FF]/10"
              >
                <span>View Portfolio</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;