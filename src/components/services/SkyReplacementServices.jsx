import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Star, Award, Layout, Clock, Users } from 'lucide-react';

const SkyReplacementServices = () => {
  return (
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
            <div className="w-2 h-2 bg-[#00F0FF] rounded-full animate-pulse"></div>
            <span className="text-[#00F0FF] font-semibold text-lg tracking-wider uppercase">Sky Replacement</span>
            <div className="w-2 h-2 bg-[#00F0FF] rounded-full animate-pulse"></div>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Sky{' '}
            <span className="bg-gradient-to-r from-[#00F0FF] via-[#0099FF] to-[#00F0FF] bg-clip-text text-transparent">
              Replacement Services
            </span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto"
          >
            Transform Dull Skies into Eye-Catching Property Images
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
  );
};

export default SkyReplacementServices;
