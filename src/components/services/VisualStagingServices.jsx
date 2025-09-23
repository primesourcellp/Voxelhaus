import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Star, Users, DollarSign, Layout, Award } from 'lucide-react';

const VisualStagingServices = () => {
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
            <span className="text-[#00F0FF] font-semibold text-lg tracking-wider uppercase">Visual Staging</span>
            <div className="w-2 h-2 bg-[#00F0FF] rounded-full animate-pulse"></div>
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
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              At Voxelhaus consultancy, we bring properties to life through professional Visual Staging. Using advanced digital techniques, we transform empty, cluttered, or outdated property photos into beautifully furnished and styled spaces. This process helps potential buyers imagine the lifestyle a property offers, turning simple photographs into powerful sales tools.
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
              Why Visual Staging is Essential
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed text-center">
              In today's competitive real estate market, stunning visuals are the key to standing out. Empty rooms often appear smaller and uninspiring, while furnished visuals create a sense of warmth and possibility. Visual staging helps potential buyers envision themselves living in a property by showcasing its full potential.
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
              Benefits of Visual Staging
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Star,
                  title: "Captures Buyer Attention Instantly",
                  description: "Professionally staged photos make listings more attractive and memorable. With so many properties online, staged visuals ensure that your listing doesn't get overlooked but instead sparks curiosity and interest from buyers."
                },
                {
                  icon: Users,
                  title: "Builds Emotional Connection",
                  description: "Home buying is as much an emotional decision as a financial one. Visual staging helps buyers connect with the property by showing how each space can feel lived-in, functional, and welcoming."
                },
                {
                  icon: DollarSign,
                  title: "Cost-Effective Compared to Physical Staging",
                  description: "Physical staging requires hiring movers, renting furniture, and managing logistics—all of which can be expensive. Digital staging offers a polished look at a fraction of the cost, saving you both time and money."
                },
                {
                  icon: Layout,
                  title: "Customizable Design Options",
                  description: "Every property is unique, and so are buyer preferences. With visual staging, you can choose from different interior styles—modern, luxury, classic, or minimalist—to best match your target audience and the property's architecture."
                },
                {
                  icon: Award,
                  title: "Increases Online Engagement and Sales Potential",
                  description: "Well-staged visuals not only draw more attention but also increase clicks, inquiries, and showing requests. This leads to quicker sales and often higher offers, giving sellers a competitive advantage in the marketplace."
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
              Our Visual Staging Services
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-12 text-center">
              At Voxelhaus consultancy, we provide tailored visual staging solutions that bring out the best in every property.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Living Room Staging",
                  description: "We design inviting living rooms with stylish furniture, rugs, lighting, and décor to highlight comfort and style. A beautifully staged living room sets the tone for the entire property and appeals to buyers right away."
                },
                {
                  title: "Bedroom Staging",
                  description: "Bedrooms are staged with cozy bedding, modern furniture, and elegant accents. This creates a relaxing atmosphere that helps buyers visualize themselves waking up in their new home, making the property feel more desirable."
                },
                {
                  title: "Kitchen & Dining Staging",
                  description: "We digitally enhance kitchens and dining areas with realistic furniture, appliances, and accessories. Since these spaces are often the heart of the home, staging them properly can strongly influence buyer decisions."
                },
                {
                  title: "Office & Flex-Space Staging",
                  description: "With remote work becoming more common, buyers value dedicated office or flexible spaces. We stage these areas to showcase functionality—whether as a home office, playroom, or creative studio—demonstrating the property's versatility."
                },
                {
                  title: "Custom Style & Branding Staging",
                  description: "We adapt staging designs to align with your brand identity or project needs. Whether you want minimalist, luxurious, or family-friendly staging, we create customized visuals that match the property and target audience perfectly."
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
              Why Choose Voxelhaus Consultancy
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Specialized expertise in real estate-focused visual staging.",
                "Fast turnaround times to keep your listings competitive.",
                "Confidential and secure services, protecting your property files.",
                "Affordable pricing with no compromise on quality.",
                "Creative, professional team delivering consistent and high-impact results."
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
              Making Every Property Picture Speak Volumes
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-4xl mx-auto">
              In real estate, a picture is worth a thousand words, and a staged picture is worth even more. With Voxelhaus consultancy Visual Staging services, you can transform empty or uninspiring property images into captivating, styled interiors that inspire buyers and accelerate sales.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisualStagingServices;
