import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Home, Star, Award, Users } from 'lucide-react';

const FloorPlan3DServices = () => {
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
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              At Voxelhaus consultancy, we specialize in delivering high-quality 3D floor plan redraw services that transform traditional 2D layouts into visually compelling, easy-to-understand 3D models. A well-drawn 3D floor plan allows homebuyers, real estate developers, and property managers to visualize the property with realistic dimensions, furniture arrangements, and flow between spaces.
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
              Why 3D Floor Plan Redraw is Important
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed text-center">
              A 2D floor plan provides information, but it often lacks the perspective needed to fully understand a property. With a 3D floor plan redraw, you get a clear, interactive visual that highlights the depth, proportions, and layout of every room. This helps buyers and investors imagine themselves in the space, making it easier to market and sell properties faster.
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
              Benefits of 3D Floor Plan Redraw
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Home,
                  title: "Better Property Visualization",
                  description: "3D floor plans allow clients to see how spaces connect and flow, unlike flat 2D layouts. Buyers can instantly picture where furniture, lighting, and décor fit into each area."
                },
                {
                  icon: Star,
                  title: "Increased Engagement and Sales",
                  description: "High-quality 3D visuals attract more attention online and in marketing campaigns. Potential buyers are more likely to engage with listings that feature 3D floor plans."
                },
                {
                  icon: Award,
                  title: "Professional and Modern Appeal",
                  description: "Presenting properties with 3D floor plans shows your commitment to quality and professionalism. It gives your brand a modern edge, helping you stand out from competitors."
                },
                {
                  icon: CheckCircle,
                  title: "Error Detection and Space Planning",
                  description: "3D redraws make it easier to identify design flaws or space constraints early in the process. This ensures better planning, accurate layouts, and improved efficiency."
                },
                {
                  icon: Users,
                  title: "Client Confidence and Satisfaction",
                  description: "When clients can clearly visualize a project, it builds trust. A 3D floor plan redraw provides transparency and clarity, helping clients feel more confident in their decisions."
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
              Our 3D Floor Plan Redraw Services
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Conversion from 2D to 3D Floor Plans",
                  description: "We take your traditional 2D sketches or CAD drawings and convert them into stunning 3D floor plans with realistic textures, lighting, and finishes."
                },
                {
                  title: "Fully Furnished 3D Floor Plans",
                  description: "Our team can add detailed furniture, décor, and appliances to your floor plan, helping clients see the space as it would look when occupied."
                },
                {
                  title: "Custom Style Options",
                  description: "From modern minimalism to luxurious interiors, we can customize the style of your 3D floor plan redraw to align with your brand or project requirements."
                },
                {
                  title: "High-Resolution Outputs",
                  description: "We deliver sharp, high-resolution 3D floor plans suitable for websites, brochures, and presentations. These professional visuals make your marketing materials stand out."
                },
                {
                  title: "Quick Turnaround and Affordable Pricing",
                  description: "We value both speed and quality. Our experienced team ensures quick delivery without compromising on accuracy or detail. With affordable pricing, our services are accessible for businesses of all sizes."
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
                "Expert Team: Skilled designers with years of experience in architectural visualization.",
                "Affordable Solutions: Cost-effective solutions tailored to fit your budget.",
                "Fast Delivery: Quick turnaround without sacrificing quality.",
                "Confidential & Secure: Your data and designs remain 100% safe with us.",
                "Global Reach: Serving real estate, architecture, and design professionals worldwide."
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
              Elevating Properties with 3D Floor Plan Redraws
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-4xl mx-auto">
              A 3D floor plan redraw is more than just a visual upgrade—it's a strategic tool to enhance property marketing, streamline communication, and build client confidence. At Voxelhaus consultancy, we transform your designs into clear, engaging, and impactful 3D visuals that help sell ideas and properties faster.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FloorPlan3DServices;
