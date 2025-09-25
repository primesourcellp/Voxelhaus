import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, Shield, Zap, Heart, Award } from 'lucide-react';

const OurFoundationOfExcellence = () => {
  const coreValues = [
    {
      icon: Star,
      title: "Excellence in Every Detail",
      description: "We are meticulous about quality, from the clean lines of a 2D floor plan to the lifelike textures in a virtual staged room. Our team is dedicated to perfecting every detail to ensure the final product is flawless."
    },
    {
      icon: Users,
      title: "Client-Centric Collaboration",
      description: "Your vision is our priority. We work as an extension of your team, listening to your needs and providing proactive solutions."
    },
    {
      icon: Shield,
      title: "Reliability and Trust",
      description: "We understand the importance of deadlines in real estate. Our consistent delivery and transparent communication build lasting partnerships."
    },
    {
      icon: Zap,
      title: "Innovation and Efficiency",
      description: "We stay ahead of industry trends and use cutting-edge tools to deliver faster, better results without compromising on quality."
    },
    {
      icon: Heart,
      title: "Passion for Real Estate",
      description: "We love what we do and understand the real estate market. This passion translates into visuals that truly connect with potential buyers."
    },
    {
      icon: Award,
      title: "Continuous Improvement",
      description: "We never stop learning and improving. Every project teaches us something new, making us better partners for your next listing."
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,240,255,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,153,255,0.1),transparent_50%)]"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00F0FF]/50 to-transparent"></div>
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-3 mb-8"
          >
            <div className="w-2 h-2 bg-[#00F0FF] rounded-full animate-pulse"></div>
            <span className="text-[#00F0FF] font-semibold text-lg tracking-wider uppercase">Core Values</span>
            <div className="w-2 h-2 bg-[#00F0FF] rounded-full animate-pulse"></div>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Our Foundation of{' '}
            <span className="bg-gradient-to-r from-[#00F0FF] via-[#0099FF] to-[#00F0FF] bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto"
          >
            Our business is built on a foundation of core values that guide every project and client interaction. These principles are what set us apart and allow us to deliver exceptional results consistently.
          </motion.p>
        </motion.div>

        {/* Modern Values Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-8xl mx-auto">
          {coreValues.map((value, index) => {
            const Icon = value.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 80, scale: 0.8, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                transition={{ 
                  duration: 1.2, 
                  delay: index * 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="group relative"
              >
                <motion.div 
                  whileHover={{ 
                    y: -8, 
                    scale: 1.02,
                    rotateY: 2,
                    transition: { duration: 0.4, ease: "easeOut" }
                  }}
                  className="relative bg-gradient-to-br from-gray-800/40 via-gray-800/20 to-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-6 md:p-10 hover:border-[#00F0FF]/30 transition-all duration-700 hover:shadow-2xl hover:shadow-[#00F0FF]/15"
                >
                  {/* Animated Background Pattern */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 0.3, scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#00F0FF]/5 via-transparent to-[#0099FF]/5"
                  ></motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                    viewport={{ once: true }}
                    className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#00F0FF]/5 via-transparent to-[#0099FF]/5 opacity-0 group-hover:opacity-100 transition-all duration-700"
                  ></motion.div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-start space-x-4 md:space-x-8 mb-6 md:mb-8">
                      <motion.div
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        whileHover={{ 
                          scale: 1.2, 
                          rotate: 360,
                          transition: { duration: 0.8, ease: "easeInOut" }
                        }}
                        transition={{ 
                          duration: 0.8, 
                          delay: index * 0.2 + 0.4,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                        className="relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#00F0FF]/20 to-[#0099FF]/20 rounded-2xl flex items-center justify-center shadow-lg shadow-[#00F0FF]/20"
                      >
                        <motion.div
                          animate={{ 
                            scale: [1, 1.1, 1],
                            opacity: [0.8, 1, 0.8]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="relative"
                        >
                          <Icon size={28} className="text-[#00F0FF] md:hidden" />
                          <Icon size={36} className="text-[#00F0FF] hidden md:block" />
                        </motion.div>
                        <motion.div 
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00F0FF]/10 to-[#0099FF]/10"
                        ></motion.div>
                      </motion.div>
                      
                      <div className="flex-1">
                        <motion.h3 
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                          viewport={{ once: true }}
                          className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3 group-hover:text-[#00F0FF] transition-colors duration-500"
                        >
                          {value.title}
                        </motion.h3>
                        <motion.div 
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          transition={{ duration: 0.8, delay: index * 0.2 + 0.8 }}
                          viewport={{ once: true }}
                          className="w-16 h-1 bg-gradient-to-r from-[#00F0FF] to-[#0099FF] rounded-full mb-4 origin-left"
                        ></motion.div>
                      </div>
                    </div>
                    
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.7 }}
                      viewport={{ once: true }}
                      className="text-lg text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-500"
                    >
                      {value.description}
                    </motion.p>
                    
                    {/* Enhanced Decorative Elements */}
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.9 }}
                      viewport={{ once: true }}
                      className="mt-6 flex items-center space-x-3"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.2, rotate: 180 }}
                        transition={{ duration: 0.4 }}
                        className="w-8 h-8 border-2 border-[#00F0FF]/30 rounded-full flex items-center justify-center"
                      >
                        <motion.div 
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.6, 1, 0.6]
                          }}
                          transition={{ 
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="w-2 h-2 bg-[#00F0FF] rounded-full"
                        ></motion.div>
                      </motion.div>
                      <motion.div 
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: index * 0.2 + 1 }}
                        viewport={{ once: true }}
                        className="flex-1 h-px bg-gradient-to-r from-[#00F0FF]/30 to-transparent origin-left"
                      ></motion.div>
                      <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.2 + 1.1 }}
                        viewport={{ once: true }}
                        className="text-[#00F0FF]/70 text-sm font-medium"
                      >
                        Value {index + 1}
                      </motion.span>
                    </motion.div>
                  </div>
                  
                  {/* Enhanced Hover Effects */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 rounded-3xl border-2 border-[#00F0FF]/20"
                  ></motion.div>
                  
                  <motion.div 
                    animate={{ 
                      y: [0, -5, 0],
                      opacity: [0, 0.3, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                    className="absolute -top-2 -right-2 w-4 h-4 bg-[#00F0FF]/20 rounded-full"
                  ></motion.div>
                  
                  <motion.div 
                    animate={{ 
                      y: [0, 5, 0],
                      opacity: [0, 0.4, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.7
                    }}
                    className="absolute -bottom-2 -left-2 w-6 h-6 bg-[#0099FF]/20 rounded-full"
                  ></motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurFoundationOfExcellence;
