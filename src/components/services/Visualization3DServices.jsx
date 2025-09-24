import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Home, Star, Clock, Users, Layout } from 'lucide-react';

const Visualization3DServices = () => {
  return (
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
            <span className="text-[#00F0FF] font-semibold text-lg tracking-wider uppercase">3D Visualization</span>
            <div className="w-2 h-2 bg-[#00F0FF] rounded-full animate-pulse"></div>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            3D{' '}
            <span className="bg-gradient-to-r from-[#00F0FF] via-[#0099FF] to-[#00F0FF] bg-clip-text text-transparent">
              Visualization Services
            </span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto"
          >
            Bringing Your Property Concepts to Life with Stunning Visuals
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
              At Voxelhaus consultancy, we specialize in creating high-quality 3D visualization services that transform property designs into realistic, immersive experiences. Whether you're a real estate developer, agent, or architect, our 3D visuals help you showcase spaces with clarity and creativity, giving buyers and investors a true sense of the property even before it's built.
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
              Why 3D Visualization Matters in Real Estate
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed text-center">
              In a competitive property market, static images and floor plans often fail to capture the buyer's imagination. 3D visualization offers a more engaging and realistic representation of properties, allowing potential buyers to see what a space could look like when finished.
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
              Benefits of Our 3D Visualization Services
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Home,
                  title: "Realistic Property Representation",
                  description: "Our 3D renders go beyond simple drawings — they bring out lifelike textures, lighting, and finishes. Potential buyers can explore a property online, helping them feel more confident in their purchasing decisions."
                },
                {
                  icon: Star,
                  title: "Improved Marketing Impact",
                  description: "Professionally rendered visuals are far more appealing than standard photos or blueprints. They help listings stand out online, on brochures, and in presentations, capturing attention instantly."
                },
                {
                  icon: Clock,
                  title: "Time and Cost Efficiency",
                  description: "Creating a clear, realistic preview helps you avoid expensive redesigns and miscommunications. Changes can be made easily in the design phase, saving both time and resources."
                },
                {
                  icon: Users,
                  title: "Stronger Buyer Engagement",
                  description: "3D visualization helps buyers form a stronger emotional connection to the property. They can picture themselves living or working in the space, which increases the likelihood of inquiries and conversions."
                },
                {
                  icon: Layout,
                  title: "Versatility Across Platforms",
                  description: "From websites to social media campaigns, 3D visuals adapt perfectly to all marketing channels, giving your brand a consistent and professional identity."
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
              Our 3D Visualization Services
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Interior 3D Visualization",
                  description: "We create photorealistic interior renders that showcase furniture, lighting, textures, and décor. This helps buyers and designers visualize the comfort, functionality, and style of the space before it exists."
                },
                {
                  title: "Exterior 3D Visualization",
                  description: "Our exterior renders precisely highlight a property's architectural details, landscaping, and surroundings. From residential houses to large-scale developments, we ensure properties look attractive and market-ready."
                },
                {
                  title: "3D Floor Plans",
                  description: "Flat 2D floor plans can be difficult to interpret. With 3D floor plans, clients gain a clear understanding of space, flow, and proportions, making it easier to visualize how rooms connect and function together."
                },
                {
                  title: "Virtual Staging in 3D",
                  description: "We digitally furnish and decorate empty properties with realistic 3D staging. This makes vacant homes more appealing to buyers and enhances marketing impact without the cost of physical staging."
                },
                {
                  title: "Architectural Walkthroughs",
                  description: "For larger or luxury projects, we provide 3D walkthroughs that allow buyers to virtually tour the property. These immersive experiences bring properties to life, leaving a lasting impression."
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
              Why Choose Voxelhaus Consultancy for 3D Visualization?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Trusted by real estate agents, developers, and architects for delivering professional, market-ready visuals.",
                "Creative and skilled design team with expertise in architectural rendering and visualization.",
                "Confidential and secure services, ensuring your projects remain private.",
                "We offer customized packages to perfectly fit your project's needs and budget.",
                "Quick turnaround times without compromising on quality or detail."
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
              Unlock Potential with Voxelhaus Consultancy 3D Visualization
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-4xl mx-auto">
              3D visualization is more than just a design tool — it's a way to communicate ideas, inspire confidence, and drive sales. At Voxelhaus consultancy, we combine technical expertise with creative excellence to deliver renders that elevate your property marketing. Whether you need interiors, exteriors, or complete walkthroughs, our 3D visualization services help you turn concepts into compelling visual stories that sell.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Visualization3DServices;
