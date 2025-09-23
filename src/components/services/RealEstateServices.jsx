import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Users, Clock, Award } from 'lucide-react';

const RealEstateServices = () => {
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
            <span className="text-[#00F0FF] font-semibold text-lg tracking-wider uppercase">Real Estate Services</span>
            <div className="w-2 h-2 bg-[#00F0FF] rounded-full animate-pulse"></div>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Real Estate{' '}
            <span className="bg-gradient-to-r from-[#00F0FF] via-[#0099FF] to-[#00F0FF] bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto"
          >
            Transform Property Listings with Professional Photo Enhancement
          </motion.p>
        </motion.div>

        {/* Service Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex flex-wrap justify-center items-center gap-4 text-lg text-gray-300">
            <span className="font-semibold text-[#00F0FF]">Real Estate</span>
            <ArrowRight size={20} className="text-[#00F0FF]" />
            <span>Real Estate Photo Enhanced</span>
            <ArrowRight size={20} className="text-[#00F0FF]" />
            <span>Real Estate Video Enhanced</span>
            <ArrowRight size={20} className="text-[#00F0FF]" />
            <span>Real Estate Object Removal</span>
            <ArrowRight size={20} className="text-[#00F0FF]" />
            <span>Color Cast Removal</span>
            <ArrowRight size={20} className="text-[#00F0FF]" />
            <span>Sky Replacement</span>
          </div>
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
              In real estate, first impressions can make or break a deal. High-quality photos are the backbone of successful listings, capturing the attention of potential buyers and creating lasting impact. At Voxelhaus consultancy, we specialize in real estate photo enhancement services that elevate property images to professional standards.
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
              Why Real Estate Photo Enhancement is Essential
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed text-center">
              Property buyers spend only a few seconds deciding whether to click on a listing. Photos that are dark, poorly lit, or unedited can reduce interest instantly. With professional enhancement, every image becomes a powerful marketing tool.
            </p>
          </motion.div>

          {/* Our Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Our Real Estate Photo Enhancement Services
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-12 text-center">
              We offer a wide range of tailored editing services designed to meet the needs of the modern real estate market. Our expertise ensures that every photo not only looks attractive but also supports faster sales and stronger buyer connections.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Advanced Image Retouching & Corrections",
                  description: "We adjust brightness, contrast, and color balance while sharpening details to ensure your photos look natural, fresh, and eye-catching."
                },
                {
                  title: "Sky Replacement & Outdoor Improvements",
                  description: "Cloudy skies or dull weather? We replace them with bright blue skies, add warmth to sunlight, and enhance landscaping for stunning exterior appeal."
                },
                {
                  title: "Object & Clutter Removal",
                  description: "Unwanted wires, bins, or distracting objects can lower photo quality. We carefully remove them, ensuring the property remains the central focus."
                },
                {
                  title: "HDR Image Blending",
                  description: "By combining multiple exposures, we produce perfectly balanced photos that capture every detail in both light and shadow."
                },
                {
                  title: "Virtual Twilight Edits",
                  description: "Turn daytime shots into beautiful twilight scenes with glowing windows and rich skies, adding elegance and luxury to your property images."
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

          {/* Key Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Key Benefits of Choosing Voxelhaus Consultancy
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-12 text-center">
              Working with us means more than just photo edits — it means partnering with a team that understands real estate marketing inside and out. Our enhancements are designed to create real business value for you.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Attract More Buyers",
                  description: "Visually appealing photos encourage more clicks, inquiries, and property viewings, leading to quicker sales."
                },
                {
                  icon: Award,
                  title: "Increase Perceived Property Value",
                  description: "Professionally enhanced images give buyers a premium impression, often helping justify higher listing prices."
                },
                {
                  icon: Star,
                  title: "Boost Online Marketing Success",
                  description: "From real estate portals to social media, high-quality images perform better across all platforms."
                },
                {
                  icon: Clock,
                  title: "Fast Turnaround Without Sacrificing Quality",
                  description: "We know speed matters in real estate. Our team delivers polished results quickly, without cutting corners on detail."
                },
                {
                  icon: CheckCircle,
                  title: "Confidential & Secure Services",
                  description: "Your project details and photos are handled with complete confidentiality, ensuring your privacy and trust are always protected."
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

          {/* Who Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Who Can Benefit from Our Services?
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-12 text-center">
              Our photo enhancement services are designed to meet the diverse needs of real estate professionals and property owners. Whether you manage large-scale developments or single-property listings, our services can help.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Real Estate Agents & Brokers – Stand out from competitors with eye-catching property listings.",
                "Property Developers – Showcase projects with clean, professional-grade visuals that attract investors and buyers.",
                "Interior Designers – Enhance portfolio images to highlight creativity and design details.",
                "Homeowners – Prepare properties for quicker sales by making them look more attractive to buyers.",
                "Photographers – Outsource editing tasks to ensure faster delivery and polished results for clients."
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

          {/* Video Enhancement Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800/30 via-gray-800/20 to-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 md:p-12"
          >
            <h3 className="text-3xl font-bold text-white mb-6 text-center">
              Elevate Your Property Marketing with Video
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-8 text-center">
              At Voxelhaus consultancy, we combine technical expertise and creative editing to deliver real estate videos that inspire, inform, and engage. Our enhancements are crafted to ensure your listings not only look professional but also connect emotionally with buyers. Whether you need a simple video cleanup or a complete cinematic production, we deliver results that help your business grow.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {[
                {
                  icon: Users,
                  title: "Increase Buyer Engagement",
                  description: "Well-edited videos capture attention longer and encourage viewers to take the next step, such as scheduling a showing."
                },
                {
                  icon: Star,
                  title: "Boost Online Visibility",
                  description: "Enhanced videos perform better on property portals, social media, and websites, helping your listings rank higher and attract more views."
                },
                {
                  icon: Award,
                  title: "Highlight Property Value",
                  description: "Cinematic visuals create a premium perception of your property, often justifying higher asking prices."
                },
                {
                  icon: Clock,
                  title: "Faster Turnaround Times",
                  description: "We understand the urgency of real estate marketing and provide high-quality results within short deadlines."
                },
                {
                  icon: CheckCircle,
                  title: "Confidential & Reliable Services",
                  description: "Your projects are handled with complete confidentiality and professionalism, ensuring peace of mind every step of the way."
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
                    className="text-center"
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

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Partner with Voxelhaus Consultancy Today
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-4xl mx-auto">
              At Voxelhaus consultancy, we combine technical expertise with creative vision to deliver real estate photo enhancements that make a difference. From brightening interiors to creating luxury twilight edits, our services are designed to help your listings perform better in a competitive market.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RealEstateServices;
