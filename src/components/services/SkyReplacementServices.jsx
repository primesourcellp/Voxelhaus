import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Star, Award, Layout, Clock, Users } from 'lucide-react';
import image3d3 from '../../assets/img4.png';

const SkyReplacementServices = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center relative overflow-x-hidden w-full"
        style={{
          backgroundImage: `url(${image3d3})`,
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
                      Sky{' '}
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
                      Replacement Services
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
                    Transform Dull Skies into Eye-Catching Property Images
                  </motion.p>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="text-lg text-gray-400 leading-relaxed"
                  >
                    When it comes to real estate photography, the sky can make or break a property's first impression. A cloudy, gray, or overexposed sky can make even the most stunning home appear unappealing.
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
              When it comes to real estate photography, the sky can make or break a property's first impression. A cloudy, gray, or overexposed sky can make even the most stunning home appear unappealing. With Voxelhaus consultancy professional Sky Replacement services, we transform ordinary property photos into visually captivating images by replacing dull skies with vibrant, natural, and realistic ones.
            </p>
          </motion.div>

          {/* Why Important */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800/30 via-gray-800/20 to-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 md:p-12"
          >
            <h3 className="text-3xl font-bold text-white mb-6 text-center">
              Why Sky Replacement is Important in Real Estate
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed text-center">
              The background sky is crucial for setting the mood and enhancing the appeal of property photos. A bright, clear blue sky suggests positivity, openness, and warmth—qualities buyers subconsciously associate with a dream home. On the other hand, an overcast or washed-out sky may send the wrong impression and reduce the photo's attractiveness.
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Benefits of Our Sky Replacement Services
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Star,
                  title: "Instant Visual Appeal",
                  description: "An enhanced sky adds vibrancy and depth to the image, making the property more eye-catching in crowded real estate listings. This immediate impact increases clicks, inquiries, and buyer engagement."
                },
                {
                  icon: Award,
                  title: "Highlighting Property Features",
                  description: "A perfectly blended sky not only adds appeal but also highlights the architectural details and landscaping of a property. The right backdrop draws attention to the property's unique features instead of letting dull skies distract the viewer."
                },
                {
                  icon: Users,
                  title: "Boosting Buyer Confidence",
                  description: "High-quality images with natural skies create a sense of trust. Buyers feel they are looking at professional and reliable listings, which makes them more likely to take the next step in the buying journey."
                },
                {
                  icon: Layout,
                  title: "Versatility for Marketing Use",
                  description: "Enhanced skies make your property photos perfect for websites, brochures, flyers, and social media. A polished look across all platforms builds your brand's professional identity."
                },
                {
                  icon: Clock,
                  title: "Fast Turnaround and Affordable Pricing",
                  description: "At Voxelhaus consultancy, we understand real estate agents and developers often work with tight deadlines. That's why we deliver flawless results quickly, ensuring your listings are ready to go live without delays—all at cost-effective rates."
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
              Our Sky Replacement Services
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Blue Sky Replacement",
                  description: "We replace overcast or washed-out skies with clear, bright blue skies, instantly lifting the mood of your property photos."
                },
                {
                  title: "Sunset and Twilight Skies",
                  description: "For luxury homes or evening listings, we offer dramatic sunset and twilight sky replacements. These add a warm, inviting atmosphere and highlight exterior lighting beautifully."
                },
                {
                  title: "Custom Sky Matching",
                  description: "Every property has its own style and character. We select skies that best match the property's mood, location, and season, ensuring natural and realistic results."
                },
                {
                  title: "Advanced Blending Techniques",
                  description: "Our expert editors adjust shadows, reflections, and tones to make sure the new sky blends seamlessly with the property and surroundings."
                },
                {
                  title: "Consistency Across Portfolios",
                  description: "For real estate agencies and developers managing multiple listings, Voxelhaus consultancy ensures all edited photos maintain a consistent, high-quality look."
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

          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Why Choose Voxelhaus Consultancy for Sky Replacement?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Trusted by real estate agents, photographers, and developers worldwide.",
                "Experienced editing team specializing in real estate visuals.",
                "Confidential and secure handling of all your property files.",
                "Customized solutions for single listings or bulk editing.",
                "Quick delivery with premium quality."
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
              Elevate Your Listings with Perfect Skies
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-4xl mx-auto">
              A property's sky should inspire buyers, not discourage them. With Voxelhaus consultancy Sky Replacement services, you can turn dull and uninspiring photos into powerful marketing tools that showcase your properties in the best light. Whether you need clear blue skies, dramatic sunsets, or custom edits, we provide professional, creative, and cost-effective solutions that help your listings stand out in today's competitive market.
            </p>
          </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkyReplacementServices;
