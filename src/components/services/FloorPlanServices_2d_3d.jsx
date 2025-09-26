import React from 'react';
import { motion } from 'framer-motion';
import image3d1 from '../../assets/floor1.jpg';
import image3d2 from '../../assets/floor3.jpg';
import image3d3 from '../../assets/floor4.jpg';
import image3d4 from '../../assets/floor5.jpg';
import image1 from '../../assets/floor6.jpg';
import image2 from '../../assets/floor7.jpg';
import image3 from '../../assets/floor8.jpg';
import image4 from '../../assets/floor9.jpg';
import img1 from '../../assets/floor10.jpg';
import img2 from '../../assets/floor11.jpg';
import img3 from '../../assets/img3.png';
import img4 from '../../assets/img4.png';
import img5 from '../../assets/img5.png';
import floor2 from '../../assets/floor2.png';

const FloorPlanServices = () => {
  return (
    <div>
      {/* 2D Floor Plan Services */}
      <section 
        className="min-h-screen flex items-center relative overflow-x-hidden w-full"
        style={{
          backgroundImage: `url(${floor2})`,
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
                      2D Floor Plan{' '}
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
                      Redraw Services
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
                    Precise and Professional Floor Plan Redraws for Clear Property Layouts
                  </motion.p>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="text-lg text-gray-400 leading-relaxed"
                  >
                    A 2D floor plan redraw acts as the foundation of any architectural or real estate project. It visually explains how rooms are connected, where entrances and windows are located.
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
              <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
                At Voxelhaus consultancy, we specialize in creating precise and professional 2D floor plan redraws that provide a clear and accurate representation of a property's layout. A well-drawn 2D floor plan redraw is essential for architects, interior designers, and real estate professionals to showcase the flow of space, dimensions, and functional arrangement of rooms.
              </p>
            </motion.div>

            {/* Why 2D Floor Plan Redraw Matters */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
            >
              <h3 className="text-3xl font-bold text-white mb-6 text-center">Why 2D Floor Plan Redraw Matters</h3>
              <p className="text-lg text-gray-300 leading-relaxed text-center">
                A 2D floor plan redraw acts as the foundation of any architectural or real estate project. It visually explains how rooms are connected, where entrances and windows are located, and how the property flows from one space to another. Unlike complex technical drawings, a simple 2D redraw is easy for clients, buyers, and stakeholders to understand.
              </p>
            </motion.div>

            {/* Benefits Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                {
                  image: image3d1,
                  title: "Clear Property Understanding",
                  description: "2D floor plan redraws provide a simple overview of the property's layout. Buyers and clients can instantly grasp the structure of the home or building, including room dimensions, wall placements, and entry points."
                },
                {
                  image: image3d2,
                  title: "Effective Sales & Marketing Tool",
                  description: "Real estate listings with 2D redraws receive more engagement because they provide transparency. Buyers feel more confident when they can see the actual layout of a property before visiting."
                },
                {
                  image: image3d3,
                  title: "Supports Accurate Planning",
                  description: "Whether for construction or renovation, a 2D floor plan redraw serves as a reliable reference for builders, engineers, and contractors. It minimizes errors and supports material estimation."
                },
                {
                  image: image3d4,
                  title: "Enhances Client Communication",
                  description: "Clients often struggle with technical blueprints. A professionally redrawn 2D plan bridges this gap, making it easier to present design ideas and get approvals quickly."
                },
                {
                  image: image1,
                  title: "Affordable & Time-Saving",
                  description: "Compared to 3D floor plans or virtual walkthroughs, 2D floor plan redraws are cost-effective yet powerful for both marketing and design. They are quicker to produce, making them ideal for tight timelines."
                },
                {
                  image: image2,
                  title: "Professional Presentation",
                  description: "Clean, accurate 2D redraws enhance your professional image and help build trust with clients and buyers through clear, understandable visual communication."
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-[#00F0FF]/50 transition-all duration-300 group"
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
                    <h4 className="text-xl font-bold text-white mb-3">{benefit.title}</h4>
                    <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Our 2D Floor Plan Redraw Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
            >
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Our 2D Floor Plan Redraw Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    image: image3,
                    title: "From Sketches",
                    description: "We can take your rough sketches or hand-drawn layouts and transform them into polished, professional 2D floor plan redraws with accurate measurements and clear labeling. Perfect for presentations, sales, or approvals."
                  },
                  {
                    image: image4,
                    title: "From Blueprints",
                    description: "Already have technical CAD drawings or old blueprints? We can redraw them into clean, easy-to-read 2D layouts that are ideal for marketing, client presentations, or renovation projects."
                  },
                  {
                    image: img1,
                    title: "Colored & Furnished Redraws",
                    description: "For real estate marketing, we create furnished 2D redraws with added furniture, décor, and color coding to highlight different spaces. These layouts help buyers visualize the property more realistically."
                  },
                  {
                    image: img2,
                    title: "High-Resolution Outputs",
                    description: "All our redraws are delivered in high-resolution formats, suitable for websites, brochures, and print materials. Crisp and professional visuals for both digital and offline marketing."
                  }
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-600 hover:border-[#00F0FF]/50 transition-all duration-300 group"
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

            {/* Why Choose Voxelhaus Consultancy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-r from-[#00F0FF]/10 to-[#0099FF]/10 rounded-2xl p-8 border border-[#00F0FF]/20"
            >
              <h3 className="text-3xl font-bold text-white mb-6">Why Choose Voxelhaus Consultancy?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Experienced Designers",
                    description: "Experienced Designers with architectural visualization expertise"
                  },
                  {
                    title: "Tailored Solutions",
                    description: "Tailored Solutions for real estate agents, developers, and architects"
                  },
                  {
                    title: "Affordable Pricing",
                    description: "Affordable Pricing without compromising quality"
                  },
                  {
                    title: "Fast Turnaround",
                    description: "Fast Turnaround to meet your deadlines"
                  },
                  {
                    title: "Secure Services",
                    description: "Confidential & Secure Services with 100% data safety"
                  },
                  {
                    title: "High-Resolution Outputs",
                    description: "High-Resolution Outputs for all marketing needs"
                  },
                  {
                    title: "Professional Standards",
                    description: "Professional Presentation standards"
                  },
                  {
                    title: "Client-Focused",
                    description: "Client-focused approach with clear communication"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-[#00F0FF]/50 transition-all duration-300 hover:bg-gray-800/70"
                  >
                    <h4 className="text-lg font-bold text-white mb-3">{item.title}</h4>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-lg text-gray-300 mb-8">
                A 2D floor plan redraw is more than a simple sketch—it's the foundation of clear communication, successful sales, and well-executed projects. At Voxelhaus consultancy, we specialize in crafting accurate and visually appealing redraws that simplify complex ideas and give your projects the professional touch they deserve.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#00F0FF] to-[#0099FF] text-black font-bold px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-[#00F0FF]/25 transition-all duration-300"
              >
                Get Your 2D Floor Plan Redraw
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3D Floor Plan Services */}
      <section className="py-20 px-6 md:px-12 bg-gray-900 relative overflow-hidden">
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
              <span className="text-[#00F0FF] font-semibold text-lg tracking-wider uppercase">3D Floor Plan Redraw</span>
              <div className="w-2 h-2 bg-[#00F0FF] rounded-full animate-pulse"></div>
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              3D Floor Plan{' '}
              <span className="bg-gradient-to-r from-[#00F0FF] via-[#0099FF] to-[#00F0FF] bg-clip-text text-transparent">
                Redraw Services
              </span>
            </h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto"
            >
              Transform Traditional Layouts into Visually Compelling 3D Models
            </motion.p>
          </motion.div>

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
              <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
                At Voxelhaus consultancy, we specialize in delivering high-quality 3D floor plan redraw services that transform traditional 2D layouts into visually compelling, easy-to-understand 3D models. A well-drawn 3D floor plan allows homebuyers, real estate developers, and property managers to visualize the property with realistic dimensions, furniture arrangements, and flow between spaces.
              </p>
            </motion.div>

            {/* Why 3D Floor Plan Redraw is Important */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
            >
              <h3 className="text-3xl font-bold text-white mb-6 text-center">Why 3D Floor Plan Redraw is Important</h3>
              <p className="text-lg text-gray-300 leading-relaxed text-center">
                A 2D floor plan provides information, but it often lacks the perspective needed to fully understand a property. With a 3D floor plan redraw, you get a clear, interactive visual that highlights the depth, proportions, and layout of every room. This helps buyers and investors imagine themselves in the space, making it easier to market and sell properties faster.
              </p>
            </motion.div>

            {/* Benefits Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                {
                  image: img3,
                  title: "Better Property Visualization",
                  description: "3D floor plans allow clients to see how spaces connect and flow, unlike flat 2D layouts. Buyers can instantly picture where furniture, lighting, and décor fit into each area."
                },
                {
                  image: img4,
                  title: "Increased Engagement and Sales",
                  description: "High-quality 3D visuals attract more attention online and in marketing campaigns. Potential buyers are more likely to engage with listings that feature 3D floor plans."
                },
                {
                  image: img5,
                  title: "Professional and Modern Appeal",
                  description: "Presenting properties with 3D floor plans shows your commitment to quality and professionalism. It gives your brand a modern edge, helping you stand out from competitors."
                },
                {
                  image: image3d1,
                  title: "Error Detection and Space Planning",
                  description: "3D redraws make it easier to identify design flaws or space constraints early in the process. This ensures better planning, accurate layouts, and improved efficiency."
                },
                {
                  image: image3d2,
                  title: "Client Confidence and Satisfaction",
                  description: "When clients can clearly visualize a project, it builds trust. A 3D floor plan redraw provides transparency and clarity, helping clients feel more confident in their decisions."
                },
                {
                  image: image3d3,
                  title: "Realistic Property Representation",
                  description: "3D floor plans provide a more accurate representation of how the space will look and feel, helping buyers make informed decisions about their potential new home."
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-[#00F0FF]/50 transition-all duration-300 group"
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
                    <h4 className="text-xl font-bold text-white mb-3">{benefit.title}</h4>
                    <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Our 3D Floor Plan Redraw Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
            >
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Our 3D Floor Plan Redraw Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    image: image3d4,
                    title: "Conversion from 2D to 3D Floor Plans",
                    description: "We take your traditional 2D sketches or CAD drawings and convert them into stunning 3D floor plans with realistic textures, lighting, and finishes."
                  },
                  {
                    image: image1,
                    title: "Fully Furnished 3D Floor Plans",
                    description: "Our team can add detailed furniture, décor, and appliances to your floor plan, helping clients see the space as it would look when occupied."
                  },
                  {
                    image: image2,
                    title: "Custom Style Options",
                    description: "From modern minimalism to luxurious interiors, we can customize the style of your 3D floor plan redraw to align with your brand or project requirements."
                  },
                  {
                    image: image3,
                    title: "High-Resolution Outputs",
                    description: "We deliver sharp, high-resolution 3D floor plans suitable for websites, brochures, and presentations. These professional visuals make your marketing materials stand out."
                  },
                  {
                    image: image4,
                    title: "Quick Turnaround and Affordable Pricing",
                    description: "We value both speed and quality. Our experienced team ensures quick delivery without compromising on accuracy or detail. With affordable pricing, our services are accessible for businesses of all sizes."
                  },
                  {
                    image: img1,
                    title: "Interactive 3D Models",
                    description: "Create interactive 3D floor plans that allow clients to explore the space from different angles, providing an immersive experience that enhances understanding and engagement."
                  }
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-700/50 rounded-xl overflow-hidden border border-gray-600 hover:border-[#00F0FF]/50 transition-all duration-300 group"
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

            {/* Why Choose Voxelhaus Consultancy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-r from-[#00F0FF]/10 to-[#0099FF]/10 rounded-2xl p-8 border border-[#00F0FF]/20"
            >
              <h3 className="text-3xl font-bold text-white mb-6">Why Choose Voxelhaus Consultancy?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Expert Team",
                    description: "Expert Team: Skilled designers with years of experience in architectural visualization"
                  },
                  {
                    title: "Affordable Solutions",
                    description: "Affordable Solutions: Cost-effective solutions tailored to fit your budget"
                  },
                  {
                    title: "Fast Delivery",
                    description: "Fast Delivery: Quick turnaround without sacrificing quality"
                  },
                  {
                    title: "Secure Services",
                    description: "Confidential & Secure: Your data and designs remain 100% safe with us"
                  },
                  {
                    title: "Global Reach",
                    description: "Global Reach: Serving real estate, architecture, and design professionals worldwide"
                  },
                  {
                    title: "Custom Style Options",
                    description: "Custom Style Options: Tailored to match your brand and project requirements"
                  },
                  {
                    title: "High-Resolution Outputs",
                    description: "High-Resolution Outputs: Professional visuals for all marketing needs"
                  },
                  {
                    title: "Interactive Models",
                    description: "Interactive Models: Engaging 3D experiences that captivate clients"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-[#00F0FF]/50 transition-all duration-300 hover:bg-gray-800/70"
                  >
                    <h4 className="text-lg font-bold text-white mb-3">{item.title}</h4>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-lg text-gray-300 mb-8">
                A 3D floor plan redraw is more than just a visual upgrade—it's a strategic tool to enhance property marketing, streamline communication, and build client confidence. At Voxelhaus consultancy, we transform your designs into clear, engaging, and impactful 3D visuals that help sell ideas and properties faster.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#00F0FF] to-[#0099FF] text-black font-bold px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-[#00F0FF]/25 transition-all duration-300"
              >
                Get Your 3D Floor Plan Redraw
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FloorPlanServices;
