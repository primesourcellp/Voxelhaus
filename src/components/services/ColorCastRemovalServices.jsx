import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Star, Users, Clock, DollarSign } from 'lucide-react';
import image3d2 from '../../assets/img1.png';

const ColorCastRemovalServices = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center relative overflow-x-hidden w-full"
        style={{
          backgroundImage: `url(${image3d2})`,
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
                      Color Cast{' '}
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
                    Restore True-to-Life Colors for Stunning Property Visuals
                  </motion.p>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="text-lg text-gray-400 leading-relaxed"
                  >
                    In real estate, first impressions are everything. When potential buyers view property listings online, the colors they see can greatly influence their perception of the space.
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
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              In real estate, first impressions are everything. When potential buyers view property listings online, the colors they see can greatly influence their perception of the space. Unfortunately, photographs often suffer from unnatural color casts caused by lighting issues, camera settings, or environmental reflections. At Voxelhaus consultancy, we specialize in professional color cast removal, ensuring that every property image reflects accurate, vibrant, and true-to-life tones that appeal to buyers and drive faster sales.
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
              Why Color Cast Removal is Essential in Real Estate Photography
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed text-center">
              Color casts can make even the most beautiful property look unappealing. A yellow tint from indoor lighting, blue hues from shaded exteriors, or green reflections from surrounding trees can distort reality. Poor quality photos fail to capture a home's true charm and can quickly turn off potential buyers.
            </p>
          </motion.div>

          {/* Our Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Our Benefits: Why Choose Our Color Cast Removal Services
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: CheckCircle,
                  title: "Accurate and Natural Representation",
                  description: "Our advanced editing techniques ensure that each image reflects the true colors of walls, floors, furniture, and surroundings. This provides buyers with a realistic impression of the property, building trust and credibility."
                },
                {
                  icon: Star,
                  title: "Enhanced Visual Appeal for Listings",
                  description: "Clean, vibrant, and professional-looking photos stand out in competitive real estate marketplaces. Corrected images immediately grab attention, leading to increased engagement and inquiries."
                },
                {
                  icon: Users,
                  title: "Boost in Buyer Confidence and Sales",
                  description: "High-quality photos that appear natural help buyers make informed decisions. With greater clarity and authenticity, your listings gain stronger appeal, often resulting in quicker sales or rentals."
                },
                {
                  icon: Clock,
                  title: "Professional Quality with Quick Turnaround",
                  description: "We understand that real estate works on tight timelines. Our team delivers expertly corrected photos with a fast turnaround, ensuring you never miss an opportunity to showcase your property at its best."
                },
                {
                  icon: DollarSign,
                  title: "Cost-Effective Solutions for Every Need",
                  description: "Our services are designed to be affordable while maintaining exceptional quality. Whether you're an agent, photographer, or property developer, our tailored packages fit every requirement."
                }
              ].map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-[#00F0FF]/50 transition-all duration-300 text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-[#00F0FF] to-[#0099FF] rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon size={24} className="text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-4">{benefit.title}</h4>
                    <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Our Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Our Services in Color Cast Removal
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "White Balance Correction",
                  description: "We adjust the white balance of each image to remove unnatural tints. Whether it's yellow indoor lighting or cool blue tones from outdoor shadows, we ensure that whites look truly white and every color is perfectly balanced."
                },
                {
                  title: "Lighting and Exposure Adjustments",
                  description: "Sometimes, uneven lighting exaggerates color casts. We carefully refine brightness and exposure levels, ensuring every detail of the property looks well-lit and naturally appealing."
                },
                {
                  title: "Shadow and Reflection Management",
                  description: "Shadows and reflective surfaces can create misleading colors in photos. Our experts minimize these distortions while maintaining a natural and realistic look."
                },
                {
                  title: "Consistent Image Editing for Portfolios",
                  description: "If you're listing multiple properties, consistency is key. We ensure all your photos share the same professional, color-accurate finish, giving your portfolio a polished and cohesive look."
                },
                {
                  title: "Advanced Editing for High-End Listings",
                  description: "Luxury properties demand perfection. We provide high-end editing solutions that maintain the integrity of fine details—marble textures, wooden finishes, and wall tones—while enhancing overall appeal."
                }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-[#00F0FF]/50 transition-all duration-300"
                >
                  <h4 className="text-xl font-bold text-white mb-4">{service.title}</h4>
                  <p className="text-gray-300 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Why Partner with Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Why Partner with Us for Color Cast Removal?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Trusted by real estate agents, photographers, and developers for our professional and reliable services.",
                "100% confidentiality and security, ensuring your files are handled with care.",
                "We have a team of highly skilled editors with extensive experience in real estate photography.",
                "Custom packages to suit bulk projects or individual property requirements."
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-[#00F0FF]/50 transition-all duration-300"
                >
                  <div className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-[#00F0FF] flex-shrink-0 mt-1" />
                    <p className="text-gray-300 leading-relaxed">{item}</p>
                  </div>
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
              Showcasing Properties in Their Truest Light
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-4xl mx-auto">
              Accurate, vibrant, and professional property photos are critical to winning buyer attention in today's digital real estate market. With our Color Cast Removal Services, you can eliminate distracting tints and present listings that reflect the true beauty of every property. At Voxelhaus consultancy, we combine creativity, precision, and reliability to help you showcase your properties in the best light—literally and visually.
            </p>
          </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ColorCastRemovalServices;
