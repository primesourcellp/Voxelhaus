import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users } from 'lucide-react';
import image3d4 from '../../assets/img3.png';

const RealEstateServices = () => {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center relative overflow-x-hidden w-full"
        style={{
          backgroundImage: `url(${image3d4})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: "fixed",
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
                      Real Estate{' '}
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
                      Services
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
                    Transform Property Listings with Professional Photo Enhancement
                  </motion.p>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="text-lg text-gray-400 leading-relaxed"
                  >
                    In real estate, first impressions can make or break a deal. High-quality photos are the backbone of successful listings, capturing the attention of potential buyers and creating lasting impact.
                  </motion.p>
                </div>

              </div>
            </motion.div>

            {/* Right Side - Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                y: [0, 5, 0]
              }}
              transition={{ 
                opacity: { duration: 0.8, delay: 0.4 },
                x: { duration: 0.8, delay: 0.4 },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }
              }}
              className="relative px-4 lg:px-8"
            >
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-900 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-7xl mx-auto space-y-20">
            
            {/* Service Overview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Complete Real Estate{' '}
                <span className="bg-gradient-to-r from-[#00F0FF] to-[#0099FF] bg-clip-text text-transparent">
                  Visual Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                Transform your property listings with our comprehensive suite of professional visual enhancement services. From photo editing to video production, we help real estate professionals showcase properties at their absolute best.
              </p>
            </motion.div>

            {/* Service Categories */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Photo Enhancement Services */}
              <motion.div
                initial={{ opacity: 0, x: -50, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 hover:border-[#00F0FF]/30 transition-all duration-500"
              >
                <motion.div 
                  className="flex items-center space-x-4 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-r from-[#00F0FF] to-[#0099FF] rounded-2xl flex items-center justify-center"
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1,
                      transition: { duration: 0.6 }
                    }}
                  >
                    <Star size={24} className="text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white">Photo Enhancement</h3>
                </motion.div>
                
                <div className="space-y-4">
                  {[
                    "Advanced Image Retouching & Corrections",
                    "Sky Replacement & Outdoor Improvements", 
                    "Object & Clutter Removal",
                    "HDR Image Blending",
                    "Virtual Twilight Edits"
                  ].map((service, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.4 + (index * 0.1),
                        ease: "easeOut"
                      }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        x: 5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 180 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CheckCircle size={16} className="text-[#00F0FF] flex-shrink-0" />
                      </motion.div>
                      <span className="text-gray-300">{service}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Video Enhancement Services */}
              <motion.div
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 hover:border-[#00F0FF]/30 transition-all duration-500"
              >
                <motion.div 
                  className="flex items-center space-x-4 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-r from-[#00F0FF] to-[#0099FF] rounded-2xl flex items-center justify-center"
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1,
                      transition: { duration: 0.6 }
                    }}
                  >
                    <Users size={24} className="text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white">Video Enhancement</h3>
                </motion.div>
                
                <div className="space-y-4">
                  {[
                    "Professional Video Editing",
                    "Color Correction & Grading",
                    "Motion Graphics & Titles",
                    "Virtual Tours & Walkthroughs",
                    "Social Media Optimization"
                  ].map((service, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.4 + (index * 0.1),
                        ease: "easeOut"
                      }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        x: 5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 180 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CheckCircle size={16} className="text-[#00F0FF] flex-shrink-0" />
                      </motion.div>
                      <span className="text-gray-300">{service}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-16"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Why Choose{' '}
                  <span className="bg-gradient-to-r from-[#00F0FF] to-[#0099FF] bg-clip-text text-transparent">
                    Voxelhaus
                  </span>{' '}
                  for Real Estate Visuals?
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                  We don't just edit photos – we transform your property marketing with professional expertise, cutting-edge technology, and a deep understanding of what makes real estate visuals sell.
                </p>
              </motion.div>

              {/* Main Benefits Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Column - Primary Benefits */}
                <div className="space-y-8">
                  {[
                    {
                      title: "Professional Quality",
                      description: "Industry-leading standards with meticulous attention to detail. Every image is crafted to perfection, ensuring your properties look their absolute best.",
                      highlight: "Premium Results"
                    },
                    {
                      title: "Fast Turnaround",
                      description: "Quick delivery without compromising on quality or precision. We understand that time is money in real estate, so we work efficiently to meet your deadlines.",
                      highlight: "24-48 Hours"
                    },
                    {
                      title: "Expert Team",
                      description: "Experienced professionals specializing in real estate visuals. Our team combines technical expertise with creative vision to deliver outstanding results.",
                      highlight: "5+ Years Experience"
                    }
                  ].map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.2,
                        ease: "easeOut"
                      }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.02,
                        transition: { duration: 0.3 }
                      }}
                      className="bg-gradient-to-r from-gray-800/50 to-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-[#00F0FF]/30 transition-all duration-500 group"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="text-2xl font-bold text-white group-hover:text-[#00F0FF] transition-colors duration-300">
                          {benefit.title}
                        </h4>
                        <span className="bg-gradient-to-r from-[#00F0FF] to-[#0099FF] text-black px-3 py-1 rounded-full text-sm font-semibold">
                          {benefit.highlight}
                        </span>
                      </div>
                      <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {benefit.description}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Right Column - Secondary Benefits */}
                <div className="space-y-8">
                  {[
                    {
                      title: "Secure & Confidential",
                      description: "Complete privacy protection for all your property materials. Your projects and client information are handled with the utmost confidentiality and security.",
                      highlight: "100% Secure"
                    },
                    {
                      title: "Proven Results",
                      description: "Track record of helping properties sell faster and at higher prices. Our enhanced visuals consistently deliver measurable results for our clients.",
                      highlight: "30% Faster Sales"
                    },
                    {
                      title: "Comprehensive Service",
                      description: "One-stop solution for all your real estate visual needs. From photo editing to video production, we handle everything under one roof.",
                      highlight: "All-in-One"
                    }
                  ].map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.2,
                        ease: "easeOut"
                      }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.02,
                        transition: { duration: 0.3 }
                      }}
                      className="bg-gradient-to-r from-gray-800/50 to-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-[#00F0FF]/30 transition-all duration-500 group"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="text-2xl font-bold text-white group-hover:text-[#00F0FF] transition-colors duration-300">
                          {benefit.title}
                        </h4>
                        <span className="bg-gradient-to-r from-[#00F0FF] to-[#0099FF] text-black px-3 py-1 rounded-full text-sm font-semibold">
                          {benefit.highlight}
                        </span>
                      </div>
                      <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {benefit.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bottom Stats Section */}
              
            </motion.div>

            {/* Target Audience */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut",
                type: "spring",
                stiffness: 80
              }}
              viewport={{ once: true }}
            >
              <motion.h3 
                className="text-3xl font-bold text-white mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Who Benefits from Our Services?
              </motion.h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Real Estate Agents",
                    description: "Stand out with professional property visuals that attract more buyers"
                  },
                  {
                    title: "Property Developers", 
                    description: "Showcase projects with clean, professional-grade marketing materials"
                  },
                  {
                    title: "Interior Designers",
                    description: "Enhance portfolio images to highlight creativity and design expertise"
                  },
                  {
                    title: "Homeowners",
                    description: "Prepare properties for quicker sales with attractive visual presentations"
                  },
                  {
                    title: "Photographers",
                    description: "Outsource editing tasks for faster delivery and polished results"
                  },
                  {
                    title: "Property Managers",
                    description: "Create compelling rental listings that attract quality tenants"
                  }
                ].map((audience, index) => (
                  <motion.div
                    key={audience.title}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      ease: "easeOut",
                      type: "spring",
                      stiffness: 100
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.03, 
                      y: -8,
                      borderColor: "rgba(0, 240, 255, 0.5)",
                      boxShadow: "0 10px 30px rgba(0, 240, 255, 0.2)",
                      transition: { duration: 0.3 }
                    }}
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-[#00F0FF]/50 transition-all duration-500 group"
                  >
                    <motion.h4 
                      className="text-xl font-bold text-white mb-3"
                      whileHover={{ 
                        color: "#00F0FF",
                        transition: { duration: 0.3 }
                      }}
                    >
                      {audience.title}
                    </motion.h4>
                    <motion.p 
                      className="text-gray-300 leading-relaxed"
                      whileHover={{ 
                        color: "#ffffff",
                        transition: { duration: 0.3 }
                      }}
                    >
                      {audience.description}
                    </motion.p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut",
                type: "spring",
                stiffness: 80
              }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-br from-gray-800/40 via-gray-800/20 to-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 md:p-12"
            >
              <motion.h3 
                className="text-3xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Ready to Transform Your Property Marketing?
              </motion.h3>
              <motion.p 
                className="text-lg text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Join hundreds of real estate professionals who trust Voxelhaus for their visual enhancement needs. Let us help you create stunning visuals that sell properties faster and at higher prices.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2,
                    boxShadow: "0 10px 30px rgba(0, 240, 255, 0.4)",
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to="/contact"
                    className="bg-gradient-to-r from-[#00F0FF] to-[#0099FF] text-black font-bold px-8 py-4 rounded-2xl flex items-center justify-center space-x-3 group"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    <span>Get Started Today</span>
                    <motion.div
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight size={20} />
                    </motion.div>
                  </Link>
                </motion.div>
                
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RealEstateServices;
