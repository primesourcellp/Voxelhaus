import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Star, Award, Users, DollarSign } from 'lucide-react';

const FloorPlan2DServices = () => {
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
            <span className="text-[#00F0FF] font-semibold text-lg tracking-wider uppercase">2D Floor Plan Redraw</span>
            <div className="w-2 h-2 bg-[#00F0FF] rounded-full animate-pulse"></div>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            2D Floor Plan{' '}
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
            Precise and Professional Floor Plan Redraws for Clear Property Layouts
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
              At Voxelhaus consultancy, we specialize in creating precise and professional 2D floor plan redraws that provide a clear and accurate representation of a property's layout. A well-drawn 2D floor plan redraw is essential for architects, interior designers, and real estate professionals to showcase the flow of space, dimensions, and functional arrangement of rooms.
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
              Why 2D Floor Plan Redraw Matters
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed text-center">
              A 2D floor plan redraw acts as the foundation of any architectural or real estate project. It visually explains how rooms are connected, where entrances and windows are located, and how the property flows from one space to another. Unlike complex technical drawings, a simple 2D redraw is easy for clients, buyers, and stakeholders to understand.
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
              Benefits of 2D Floor Plan Redraw
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: CheckCircle,
                  title: "Clear Property Understanding",
                  description: "2D floor plan redraws provide a simple overview of the property's layout. Buyers and clients can instantly grasp the structure of the home or building, including room dimensions, wall placements, and entry points."
                },
                {
                  icon: Star,
                  title: "Effective Sales & Marketing Tool",
                  description: "Real estate listings with 2D redraws receive more engagement because they provide transparency. Buyers feel more confident when they can see the actual layout of a property before visiting."
                },
                {
                  icon: Award,
                  title: "Supports Accurate Planning",
                  description: "Whether for construction or renovation, a 2D floor plan redraw serves as a reliable reference for builders, engineers, and contractors. It minimizes errors and supports material estimation."
                },
                {
                  icon: Users,
                  title: "Enhances Client Communication",
                  description: "Clients often struggle with technical blueprints. A professionally redrawn 2D plan bridges this gap, making it easier to present design ideas and get approvals quickly."
                },
                {
                  icon: DollarSign,
                  title: "Affordable & Time-Saving",
                  description: "Compared to 3D floor plans or virtual walkthroughs, 2D floor plan redraws are cost-effective yet powerful for both marketing and design. They are quicker to produce, making them ideal for tight timelines."
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
              Our 2D Floor Plan Redraw Services
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "From Sketches",
                  description: "We can take your rough sketches or hand-drawn layouts and transform them into polished, professional 2D floor plan redraws with accurate measurements and clear labeling. Perfect for presentations, sales, or approvals."
                },
                {
                  title: "From Blueprints",
                  description: "Already have technical CAD drawings or old blueprints? We can redraw them into clean, easy-to-read 2D layouts that are ideal for marketing, client presentations, or renovation projects."
                },
                {
                  title: "Colored & Furnished Redraws",
                  description: "For real estate marketing, we create furnished 2D redraws with added furniture, décor, and color coding to highlight different spaces. These layouts help buyers visualize the property more realistically."
                },
                {
                  title: "High-Resolution Outputs",
                  description: "All our redraws are delivered in high-resolution formats, suitable for websites, brochures, and print materials. Crisp and professional visuals for both digital and offline marketing."
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
              Why Choose Voxelhaus Consultancy?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Experienced Designers with architectural visualization expertise.",
                "Tailored Solutions for real estate agents, developers, and architects.",
                "Affordable Pricing without compromising quality.",
                "Fast Turnaround to meet your deadlines.",
                "Confidential & Secure Services with 100% data safety."
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
              The Foundation of Your Property Vision
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-4xl mx-auto">
              A 2D floor plan redraw is more than a simple sketch—it's the foundation of clear communication, successful sales, and well-executed projects. At Voxelhaus consultancy, we specialize in crafting accurate and visually appealing redraws that simplify complex ideas and give your projects the professional touch they deserve.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FloorPlan2DServices;
