import React from 'react';
import { motion } from 'framer-motion';
import furnitureRemoval from '../../assets/furniture_removal.png';
import wireRemoval from '../../assets/wire_removal.png';
import personalRemoval from '../../assets/personal_removal.png';
import outdoorRemoval from '../../assets/outdoor_removal.jpeg';
import backgroundCleanup from '../../assets/background-cleanup.jpeg';
import natural from '../../assets/natural.jpeg';
import onlinePerformance from '../../assets/online_performance.jpeg';
import objectTrueValue from '../../assets/object.jpeg';
import professional from '../../assets/professional.jpeg';
import about1 from '../../assets/color3.jpg';
import img3 from '../../assets/img3.png';
const ObjectRemovalServices = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center relative overflow-x-hidden w-full"
        style={{
          backgroundImage: `url(${img3})`,
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
          <div className="max-w-4xl">
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
                      Real Estate Object{' '}
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
                      Removal Services
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
                    Showcasing Properties Without Distractions
                  </motion.p>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="text-lg text-gray-400 leading-relaxed"
                  >
                    In real estate, visuals are everything. A cluttered room, distracting wires, personal belongings, or unnecessary objects in a property photo can take the focus away from the actual space.
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 md:px-12 bg-gray-800 relative overflow-hidden">
        <div className="container-custom relative z-10">
          {/* Main Content */}
          <div className="max-w-6xl mx-auto space-y-16">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              In real estate, visuals are everything. A cluttered room, distracting wires, personal belongings, or unnecessary objects in a property photo can take the focus away from the actual space. That's where Voxelhaus consultancy Real Estate Object Removal services come in.
            </p>
          </motion.div>

          {/* Why Essential */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800/30 via-gray-800/20 to-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 md:p-12"
          >
            <h3 className="text-3xl font-bold text-white mb-6 text-center">
              Why Real Estate Object Removal is Essential
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed text-center">
              Property buyers are often distracted by items in photos that don't belong. A beautiful living room can look smaller with clutter, and a modern kitchen can lose its charm if appliances, bins, or wires are visible. By removing these distractions, buyers can focus on the layout, design, and features of the home rather than its imperfections.
            </p>
          </motion.div>

          {/* Our Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Our Real Estate Object Removal Services
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-12 text-center">
              We offer a wide range of object removal solutions designed to enhance property images and make them more appealing to potential buyers. Our services go beyond simple edits — we ensure every photo looks natural, seamless, and professional.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  image: furnitureRemoval,
                  title: "Clutter & Furniture Removal",
                  description: "Take away unwanted furniture, boxes, or clutter from rooms to highlight clean, spacious interiors."
                },
                {
                  image: wireRemoval,
                  title: "Wire, Cable & Fixture Removal",
                  description: "Eliminate distracting wires, outlets, or unnecessary fixtures that reduce the elegance of property images."
                },
                {
                  image: personalRemoval,
                  title: "Personal Item Removal",
                  description: "Erase personal belongings such as photos, toys, or clothes to create neutral, buyer-friendly spaces."
                },
                {
                  image: outdoorRemoval,
                  title: "Outdoor Object Removal",
                  description: "Remove vehicles, bins, signage, or other distractions from exterior shots to improve curb appeal."
                },
                {
                  image: backgroundCleanup,
                  title: "Background Clean-Up",
                  description: "Ensure every corner of the property image looks neat, polished, and free from visual distractions."
                }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-[#00F0FF]/50 transition-all duration-300 group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-xl font-bold text-white mb-2">{service.title}</h4>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-300 leading-relaxed">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Key Benefits of Choosing Voxelhaus Consultancy
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-12 text-center">
              Our object removal services are not just about cleaning photos — they're about creating images that sell. Here's how our solutions benefit your real estate marketing:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  image: objectTrueValue,
                  title: "Highlight the Property's True Value",
                  description: "By removing distractions, we ensure buyers focus on the property's architecture, design, and potential rather than what's in the background."
                },
                {
                  image: natural,
                  title: "Create Spacious & Neutral Interiors",
                  description: "Clean images help buyers imagine themselves in the space, making the property more inviting and easier to sell."
                },
                {
                  image: onlinePerformance,
                  title: "Improve Online Performance",
                  description: "Polished, distraction-free images perform better on property portals and social media, generating more clicks and inquiries."
                },
                {
                  image:professional,
                  title: "Professional Quality Every Time",
                  description: "Our editing team ensures that every image looks natural, seamless, and industry-standard, giving you confidence in your listings."
                },
                {
                  image: about1,
                  title: "Confidential & Reliable Services",
                  description: "We handle your project files with complete confidentiality, delivering results on time while respecting your privacy."
                }
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-[#00F0FF]/50 transition-all duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={benefit.image} 
                      alt={benefit.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white mb-4">{benefit.title}</h4>
                    <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Who Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Who Can Benefit from Object Removal Services?
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-12 text-center">
              Our services are tailored to meet the needs of various real estate professionals and property owners who want to maximize their marketing impact.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Real Estate Agents & Brokers",
                  description: "Make listings look more professional and appealing."
                },
                {
                  title: "Property Developers",
                  description: "Present large-scale projects with flawless visuals."
                },
                {
                  title: "Interior Designers",
                  description: "Showcase clean, distraction-free design portfolios."
                },
                {
                  title: "Photographers",
                  description: "Outsource object removal to save time and ensure polished results."
                },
                {
                  title: "Homeowners",
                  description: "Prepare properties for faster and more profitable sales."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-[#00F0FF]/50 transition-all duration-300 hover:bg-gray-800/70"
                >
                  <h4 className="text-lg font-bold text-white mb-3">{item.title}</h4>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Enhance Your Property Marketing Today
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-4xl mx-auto">
              At Voxelhaus consultancy, we understand that the smallest details make the biggest difference in real estate marketing. Our object removal services are designed to transform ordinary property photos into professional, buyer-focused visuals.
            </p>
          </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ObjectRemovalServices;
