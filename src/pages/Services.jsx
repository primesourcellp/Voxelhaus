import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
  MessageSquare,
  Shield,
  Zap,
  Lightbulb,
  Heart,
  TrendingUp
} from 'lucide-react';
import image3d4 from '../assets/3d_image_4.jpg';

const Services = () => {
  const services = [
    {
      icon: Camera,
      title: "Real Estate Services",
      description: "Transform property listings with professional photo enhancement, video editing, and visual marketing solutions that sell faster and at higher prices.",
      features: ["Photo Enhancement", "Video Editing", "Object Removal", "Color Correction", "Sky Replacement"],
      path: "/real-estate",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Box,
      title: "Object Removal",
      description: "Remove unwanted objects, clutter, and distractions from property photos to create clean, professional listings that highlight the property's best features.",
      features: ["Clutter Removal", "Power Lines", "Vehicles", "Construction Debris", "Seasonal Items"],
      path: "/object-removal",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Palette,
      title: "Color Cast Removal",
      description: "Correct unwanted color tints and restore natural color balance to make property photos look professional, appealing, and true-to-life.",
      features: ["White Balance", "Color Restoration", "Consistent Grading", "Lighting Adjustment", "Shadow Recovery"],
      path: "/color-cast-removal",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Video,
      title: "Sky Replacement",
      description: "Transform dull, overcast skies into vibrant, natural-looking backgrounds that make property photos stand out and attract more buyers.",
      features: ["Blue Sky", "Sunset Skies", "Custom Matching", "Advanced Blending", "Consistent Quality"],
      path: "/sky-replacement",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Layout,
      title: "Floor Plans",
      description: "Create accurate 2D and 3D floor plans that help buyers visualize properties and make confident purchasing decisions.",
      features: ["2D Floor Plans", "3D Floor Plans", "Furnished Plans", "High Resolution", "Custom Styles"],
      path: "/floor-plans",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Home,
      title: "Virtual Staging",
      description: "Transform empty spaces into beautifully furnished rooms that help buyers envision their dream home and create emotional connections.",
      features: ["Living Room", "Bedroom", "Kitchen", "Office Space", "Custom Design"],
      path: "/virtual-staging",
      color: "from-pink-500 to-rose-500"
    }
  ];

  const whyChooseUs = [
    {
      title: "Unmatched Visual Impact",
      description: "We don't just create images; we create a compelling visual narrative for your property. Our enhancements transform standard photos into engaging, memorable visuals that capture a buyer's attention immediately."
    },
    {
      title: "Precision and Accuracy",
      description: "Our floor plans are renowned for their meticulous detail and accuracy. We provide buyers with the confidence to understand a property's layout and flow, reducing the need for multiple in-person viewings."
    },
    {
      title: "Accelerated Marketing Timelines",
      description: "Time is critical in real estate. Our efficient process and fast turnaround times mean you get your high-quality visuals quickly, allowing you to list your properties sooner and meet your marketing deadlines with ease."
    },
    {
      title: "Cost-Effective Excellence",
      description: "Investing in professional visuals shouldn't break the bank. Our services are a high-value, affordable solution that provides a significant return on investment by attracting more potential buyers and helping you achieve a better sales price."
    },
    {
      title: "Seamless Collaboration",
      description: "We make the process simple. Just send us your materials—photos, sketches, or drafts—and our team takes it from there. We work closely with you through a simple feedback and revision loop to ensure the final product is exactly what you envisioned."
    },
    {
      title: "Full-Service Visual Solutions",
      description: "From foundational floor plans to polished retouched photos and captivating virtual staging, we offer a complete suite of services under one roof."
    }
  ];

  const stats = [
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Star, number: "4.9/5", label: "Client Rating" },
    { icon: Clock, number: "24hrs", label: "Average Delivery" }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center relative overflow-x-hidden w-full"
        style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"%3E%3Cdefs%3E%3Cpattern id="services-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse"%3E%3Crect width="100" height="100" fill="%23111127"/%3E%3Cpath d="M0 0L100 100M100 0L0 100" stroke="%2300F0FF" stroke-width="0.5" opacity="0.1"/%3E%3Ccircle cx="50" cy="50" r="20" fill="none" stroke="%2300F0FF" stroke-width="0.3" opacity="0.2"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="1200" height="800" fill="url(%23services-pattern)"/%3E%3C/svg%3E')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark Overlay */}
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
        
        <div className="container-custom relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                y: [0, -5, 0]
              }}
              transition={{ 
                opacity: { duration: 0.8 },
                x: { duration: 0.8 },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              className="space-y-8 px-4 lg:px-8"
            >
              <div className="space-y-6">
                <div className="space-y-4">
                  <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                  >
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="block"
                    >
                      Professional{' '}
                    </motion.span>
                    <motion.span 
                      className="bg-gradient-to-r from-[#00F0FF] to-[#0099FF] bg-clip-text text-transparent block"
                      style={{ textShadow: '0 0 30px rgba(0, 240, 255, 0.5)' }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      whileHover={{ 
                        scale: 1.05,
                        textShadow: '0 0 40px rgba(0, 240, 255, 0.8)'
                      }}
                    >
                      Visual Solutions
                    </motion.span>
                  </motion.h1>
                </div>
                
                <div className="space-y-6">
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-xl text-gray-300 leading-relaxed"
                    whileHover={{ 
                      scale: 1.02,
                      color: '#ffffff'
                    }}
                  >
                    At Voxelhaus consultancy, we provide a full suite of professional visual solutions designed to help real estate professionals market properties more effectively. From foundational floor plans to stunning photo enhancements, our services are tailored to make your listings stand out and attract the right buyers.
                  </motion.p>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="flex flex-wrap gap-4 mt-8"
                  >
                    <motion.div 
                      className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full"
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                      transition={{ duration: 0.2 }}
                    >
                      <Shield className="w-4 h-4 text-[#00F0FF]" />
                      <span className="text-white/90 text-sm font-medium">Trusted Service</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full"
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                      transition={{ duration: 0.2 }}
                    >
                      <Award className="w-4 h-4 text-[#00F0FF]" />
                      <span className="text-white/90 text-sm font-medium">Quality Assured</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full"
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                      transition={{ duration: 0.2 }}
                    >
                      <Zap className="w-4 h-4 text-[#00F0FF]" />
                      <span className="text-white/90 text-sm font-medium">Fast Delivery</span>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  initial={{ opacity: 0, x: -30 }}
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
                    opacity: { duration: 0.6, delay: 1.4 },
                    x: { duration: 0.6, delay: 1.4 },
                    boxShadow: { duration: 2, repeat: Infinity }
                  }}
                  className="px-8 py-4 bg-gradient-to-r from-[#00F0FF] to-[#0099FF] text-white font-bold rounded-xl flex items-center gap-3 group"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 0 40px rgba(0, 240, 255, 0.6)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Content - Image */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={image3d4} 
                  alt="Professional Visual Solutions" 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-xl font-bold mb-2">Transform Your Listings</h3>
                  <p className="text-white/90 text-sm">Professional visual solutions that sell properties faster</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-[#00F0FF] to-[#0099FF] rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-[#0099FF] to-[#00F0FF] rounded-full opacity-20 blur-xl"></div>
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
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Our Service{' '}
              <span className="bg-gradient-to-r from-[#00F0FF] to-[#0099FF] bg-clip-text text-transparent">
                Overview
              </span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 leading-relaxed"
            >
              Comprehensive visual solutions designed to elevate your real estate marketing and help you close deals faster.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  to={service.path}
                  key={service.title}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="group relative bg-gradient-to-br from-gray-800/60 via-gray-800/40 to-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden transition-all duration-700 cursor-pointer transform hover:scale-105 hover:-translate-y-2 hover:border-[#00F0FF]/60 hover:shadow-2xl hover:shadow-[#00F0FF]/20"
                  >
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon size={32} className="text-white" />
                      </div>
                      <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-[#00F0FF] group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00F0FF] transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          <CheckCircle size={16} className="text-[#00F0FF] mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#00F0FF] to-[#0099FF] text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-200">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-800 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-[#00F0FF] to-[#0099FF] bg-clip-text text-transparent">
                Voxelhaus?
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Choosing us is an investment in your property's success. Here are six reasons why real estate professionals partner with us:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => {
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-gradient-to-br from-gray-900/60 via-gray-800/40 to-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-[#00F0FF]/30 hover:bg-gray-900/70 transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00F0FF] transition-colors duration-300">
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

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 relative overflow-hidden">
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your{' '}
              <span className="bg-gradient-to-r from-[#00F0FF] to-[#0099FF] bg-clip-text text-transparent">
                Property Listings?
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Join hundreds of real estate professionals who trust Voxelhaus for their visual marketing needs. Let's create stunning visuals that sell properties faster and at higher prices.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#00F0FF] to-[#0099FF] text-white font-bold rounded-xl flex items-center gap-3 group"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;