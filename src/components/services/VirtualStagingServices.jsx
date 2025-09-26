import React from 'react';
import { motion } from 'framer-motion';
import image3d1 from '../../assets/stage1.jpg';
import image3d2 from '../../assets/stage2.jpg';
import image3d3 from '../../assets/stage3.jpg';
import image3d4 from '../../assets/stage4.jpg';
import image1 from '../../assets/stage5.jpg';
import image2 from '../../assets/stage6.jpg';
import image3 from '../../assets/stage7.jpg';
import image4 from '../../assets/stage8.jpg';
import img1 from '../../assets/stage9.jpg';
import img2 from '../../assets/stage10.jpg';
import img3 from '../../assets/img3.png';
import img4 from '../../assets/stage11.jpg';
import img5 from '../../assets/img5.png';

const VirtualStagingServices = () => {
  return (
    <div>
      {/* 3D Visualization Services */}
      <section 
        className="min-h-screen flex items-center relative overflow-x-hidden w-full"
        style={{
          backgroundImage: `url(${image3d4})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        
        {/* Static Background Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#00F0FF]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#0099FF]/10 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ 
                opacity: 1, 
                x: 0
              }}
              transition={{ 
                opacity: { duration: 0.8 },
                x: { duration: 0.8 }
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
                      3D{' '}
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
                      Visualization Services
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
                    Bringing Your Property Concepts to Life with Stunning Visuals
                  </motion.p>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="text-lg text-gray-400 leading-relaxed"
                  >
                    In a competitive property market, static images and floor plans often fail to capture the buyer's imagination. 3D visualization offers a more engaging and realistic representation of properties.
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 md:px-12 bg-gray-900 relative overflow-hidden">
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
                At Voxelhaus consultancy, we specialize in creating high-quality 3D visualization services that transform property designs into realistic, immersive experiences. Whether you're a real estate developer, agent, or architect, our 3D visuals help you showcase spaces with clarity and creativity, giving buyers and investors a true sense of the property even before it's built.
              </p>
            </motion.div>

            {/* Why 3D Visualization Matters */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
            >
              <h3 className="text-3xl font-bold text-white mb-6 text-center">Why 3D Visualization Matters in Real Estate</h3>
              <p className="text-lg text-gray-300 leading-relaxed text-center">
                In a competitive property market, static images and floor plans often fail to capture the buyer's imagination. 3D visualization offers a more engaging and realistic representation of properties, allowing potential buyers to see what a space could look like when finished.
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
                  title: "Realistic Property Representation",
                  description: "Our 3D renders go beyond simple drawings — they bring out lifelike textures, lighting, and finishes. Potential buyers can explore a property online, helping them feel more confident in their purchasing decisions."
                },
                {
                  image: image3d2,
                  title: "Improved Marketing Impact",
                  description: "Professionally rendered visuals are far more appealing than standard photos or blueprints. They help listings stand out online, on brochures, and in presentations, capturing attention instantly."
                },
                {
                  image: image3d3,
                  title: "Time and Cost Efficiency",
                  description: "Creating a clear, realistic preview helps you avoid expensive redesigns and miscommunications. Changes can be made easily in the design phase, saving both time and resources."
                },
                {
                  image: image3d4,
                  title: "Stronger Buyer Engagement",
                  description: "3D visualization helps buyers form a stronger emotional connection to the property. They can picture themselves living or working in the space, which increases the likelihood of inquiries and conversions."
                },
                {
                  image: image1,
                  title: "Versatility Across Platforms",
                  description: "From websites to social media campaigns, 3D visuals adapt perfectly to all marketing channels, giving your brand a consistent and professional identity."
                },
                {
                  image: image2,
                  title: "Competitive Advantage",
                  description: "Stand out from competitors with cutting-edge 3D visualizations that showcase your properties in the most compelling way possible, attracting more qualified buyers."
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

            {/* Our 3D Visualization Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
            >
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Our 3D Visualization Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    image: image3,
                    title: "Interior 3D Visualization",
                    description: "We create photorealistic interior renders that showcase furniture, lighting, textures, and décor. This helps buyers and designers visualize the comfort, functionality, and style of the space before it exists."
                  },
                  {
                    image: image4,
                    title: "Exterior 3D Visualization",
                    description: "Our exterior renders precisely highlight a property's architectural details, landscaping, and surroundings. From residential houses to large-scale developments, we ensure properties look attractive and market-ready."
                  },
                  {
                    image: img1,
                    title: "3D Floor Plans",
                    description: "Flat 2D floor plans can be difficult to interpret. With 3D floor plans, clients gain a clear understanding of space, flow, and proportions, making it easier to visualize how rooms connect and function together."
                  },
                  {
                    image: img2,
                    title: "Virtual Staging in 3D",
                    description: "We digitally furnish and decorate empty properties with realistic 3D staging. This makes vacant homes more appealing to buyers and enhances marketing impact without the cost of physical staging."
                  },
                  {
                    image: img3,
                    title: "Architectural Walkthroughs",
                    description: "For larger or luxury projects, we provide 3D walkthroughs that allow buyers to virtually tour the property. These immersive experiences bring properties to life, leaving a lasting impression."
                  },
                  {
                    image: img4,
                    title: "Custom 3D Solutions",
                    description: "We offer tailored 3D visualization services to meet specific project requirements, from concept development to final marketing materials, ensuring your vision is perfectly realized."
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
              <h3 className="text-3xl font-bold text-white mb-6">Why Choose Voxelhaus Consultancy for 3D Visualization?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Trusted Worldwide",
                    description: "Trusted by real estate agents, developers, and architects for delivering professional, market-ready visuals"
                  },
                  {
                    title: "Expert Team",
                    description: "Creative and skilled design team with expertise in architectural rendering and visualization"
                  },
                  {
                    title: "Secure & Confidential",
                    description: "Confidential and secure services, ensuring your projects remain private"
                  },
                  {
                    title: "Customized Solutions",
                    description: "We offer customized packages to perfectly fit your project's needs and budget"
                  },
                  {
                    title: "Fast Delivery",
                    description: "Quick turnaround times without compromising on quality or detail"
                  },
                  {
                    title: "Advanced Technology",
                    description: "Advanced technology and software for superior 3D rendering quality"
                  },
                  {
                    title: "Comprehensive Service",
                    description: "Comprehensive service suite from concept to final delivery"
                  },
                  {
                    title: "Global Reach",
                    description: "Global reach serving clients worldwide with consistent quality standards"
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
                3D visualization is more than just a design tool — it's a way to communicate ideas, inspire confidence, and drive sales. At Voxelhaus consultancy, we combine technical expertise with creative excellence to deliver renders that elevate your property marketing.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#00F0FF] to-[#0099FF] text-black font-bold px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-[#00F0FF]/25 transition-all duration-300"
              >
                Get Your 3D Visualization
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visual Staging Services */}
      <section className="py-20 px-6 md:px-12 bg-gray-800 relative overflow-hidden">
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
              <div className="w-2 h-2 bg-[#00F0FF] rounded-full"></div>
              <span className="text-[#00F0FF] font-semibold text-lg tracking-wider uppercase">Visual Staging</span>
              <div className="w-2 h-2 bg-[#00F0FF] rounded-full"></div>
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Visual{' '}
              <span className="bg-gradient-to-r from-[#00F0FF] via-[#0099FF] to-[#00F0FF] bg-clip-text text-transparent">
                Staging Services
              </span>
            </h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto"
            >
              Transform Empty Spaces into Beautifully Furnished Interiors
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
                At Voxelhaus consultancy, we bring properties to life through professional Visual Staging. Using advanced digital techniques, we transform empty, cluttered, or outdated property photos into beautifully furnished and styled spaces. This process helps potential buyers imagine the lifestyle a property offers, turning simple photographs into powerful sales tools.
              </p>
            </motion.div>

            {/* Why Visual Staging is Essential */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
            >
              <h3 className="text-3xl font-bold text-white mb-6 text-center">Why Visual Staging is Essential</h3>
              <p className="text-lg text-gray-300 leading-relaxed text-center">
                In today's competitive real estate market, stunning visuals are the key to standing out. Empty rooms often appear smaller and uninspiring, while furnished visuals create a sense of warmth and possibility. Visual staging helps potential buyers envision themselves living in a property by showcasing its full potential.
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
                  image: img5,
                  title: "Captures Buyer Attention Instantly",
                  description: "Professionally staged photos make listings more attractive and memorable. With so many properties online, staged visuals ensure that your listing doesn't get overlooked but instead sparks curiosity and interest from buyers."
                },
                {
                  image: image3d1,
                  title: "Builds Emotional Connection",
                  description: "Home buying is as much an emotional decision as a financial one. Visual staging helps buyers connect with the property by showing how each space can feel lived-in, functional, and welcoming."
                },
                {
                  image: image3d2,
                  title: "Cost-Effective Compared to Physical Staging",
                  description: "Physical staging requires hiring movers, renting furniture, and managing logistics—all of which can be expensive. Digital staging offers a polished look at a fraction of the cost, saving you both time and money."
                },
                {
                  image: image3d3,
                  title: "Customizable Design Options",
                  description: "Every property is unique, and so are buyer preferences. With visual staging, you can choose from different interior styles—modern, luxury, classic, or minimalist—to best match your target audience and the property's architecture."
                },
                {
                  image: image3d4,
                  title: "Increases Online Engagement and Sales Potential",
                  description: "Well-staged visuals not only draw more attention but also increase clicks, inquiries, and showing requests. This leads to quicker sales and often higher offers, giving sellers a competitive advantage in the marketplace."
                },
                {
                  image: image1,
                  title: "Quick Turnaround and Flexibility",
                  description: "Digital staging can be completed quickly and allows for easy changes and revisions. You can experiment with different styles and layouts without the time and cost constraints of physical staging."
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

            {/* Our Visual Staging Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
            >
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Our Visual Staging Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    image: image2,
                    title: "Living Room Staging",
                    description: "We design inviting living rooms with stylish furniture, rugs, lighting, and décor to highlight comfort and style. A beautifully staged living room sets the tone for the entire property and appeals to buyers right away."
                  },
                  {
                    image: image3,
                    title: "Bedroom Staging",
                    description: "Bedrooms are staged with cozy bedding, modern furniture, and elegant accents. This creates a relaxing atmosphere that helps buyers visualize themselves waking up in their new home, making the property feel more desirable."
                  },
                  {
                    image: image4,
                    title: "Kitchen & Dining Staging",
                    description: "We digitally enhance kitchens and dining areas with realistic furniture, appliances, and accessories. Since these spaces are often the heart of the home, staging them properly can strongly influence buyer decisions."
                  },
                  {
                    image: img1,
                    title: "Office & Flex-Space Staging",
                    description: "With remote work becoming more common, buyers value dedicated office or flexible spaces. We stage these areas to showcase functionality—whether as a home office, playroom, or creative studio—demonstrating the property's versatility."
                  },
                  {
                    image: img2,
                    title: "Custom Style & Branding Staging",
                    description: "We adapt staging designs to align with your brand identity or project needs. Whether you want minimalist, luxurious, or family-friendly staging, we create customized visuals that match the property and target audience perfectly."
                  },
                  {
                    image: img3,
                    title: "Luxury & High-End Staging",
                    description: "For premium properties, we create sophisticated staging that reflects luxury living. High-end furniture, elegant décor, and refined styling help justify premium pricing and attract affluent buyers."
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
                    title: "Specialized Expertise",
                    description: "Specialized expertise in real estate-focused visual staging"
                  },
                  {
                    title: "Fast Turnaround",
                    description: "Fast turnaround times to keep your listings competitive"
                  },
                  {
                    title: "Secure Services",
                    description: "Confidential and secure services, protecting your property files"
                  },
                  {
                    title: "Affordable Pricing",
                    description: "Affordable pricing with no compromise on quality"
                  },
                  {
                    title: "Professional Team",
                    description: "Creative, professional team delivering consistent and high-impact results"
                  },
                  {
                    title: "Customizable Options",
                    description: "Customizable staging options to match any property style"
                  },
                  {
                    title: "Advanced Techniques",
                    description: "Advanced digital techniques for realistic furniture placement"
                  },
                  {
                    title: "Proven Track Record",
                    description: "Proven track record of increasing property sales and engagement"
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
                In real estate, a picture is worth a thousand words, and a staged picture is worth even more. With Voxelhaus consultancy Visual Staging services, you can transform empty or uninspiring property images into captivating, styled interiors that inspire buyers and accelerate sales.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#00F0FF] to-[#0099FF] text-black font-bold px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-[#00F0FF]/25 transition-all duration-300"
              >
                Get Your Visual Staging
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VirtualStagingServices;
