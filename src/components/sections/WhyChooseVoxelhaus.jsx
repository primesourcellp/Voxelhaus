import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target, Clock, DollarSign, Users, Shield } from 'lucide-react';
import impact from '../../assets/about1.png';
import precision from '../../assets/about2.png';
import accelerated from '../../assets/about3.png';
import valuesImage from '../../assets/about4.jpeg';
import advantageImage from '../../assets/about5.jpeg';
import partnerImage from '../../assets/about6.jpeg';

const WhyChooseVoxelhaus = () => {
  const whyChooseUs = [
    {
      icon: Eye,
      title: "Unmatched Visual Impact",
      description: "We don't just create images; we create a compelling visual narrative for your property. Our Photoshop enhancements and virtual staging transform standard photos into engaging, memorable visuals that capture a buyer's attention immediately."
    },
    {
      icon: Target,
      title: "Precision and Accuracy",
      description: "Our floor plans are renowned for their meticulous detail and accuracy. We provide buyers with the confidence to understand a property's layout and flow, reducing the need for multiple in-person viewings."
    },
    {
      icon: Clock,
      title: "Accelerated Marketing Timelines",
      description: "Time is money in real estate. Our streamlined process and commitment to fast turnaround times mean you get your high-quality visuals quickly, allowing you to list properties sooner and stay ahead of the competition."
    },
    {
      icon: DollarSign,
      title: "Cost-Effective Excellence",
      description: "Investing in professional visuals shouldn't break the bank. Our services are a high-value, affordable solution that provides a significant return on investment by attracting more potential buyers and helping you achieve a better sales price."
    },
    {
      icon: Users,
      title: "Seamless Collaboration",
      description: "Working with us is easy. Simply provide your raw photos, sketches, or project details, and our team will handle the rest. We're here to make your job easier, not harder."
    },
    {
      icon: Shield,
      title: "Comprehensive Service Suite",
      description: "From foundational 2D floor plans to polished retouched photos and captivating virtual staging, we offer a full suite of services under one roof. No need to coordinate with multiple vendors."
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-gray-800 relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-[#00F0FF] to-[#0099FF] bg-clip-text text-transparent">
              Voxelhaus?
            </span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Choosing us is an investment in your property's success. Here are six reasons why real estate professionals partner with us:
          </p>
        </motion.div>

        {/* Content Sections with Images */}
        <div className="space-y-24">
          {whyChooseUs.map((item, index) => {
            const Icon = item.icon;
            const whyChooseImages = [impact, precision, accelerated, valuesImage, advantageImage, partnerImage];
            const currentImage = whyChooseImages[index] || impact;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1, 
                  delay: index * 0.15,
                  ease: "easeOut"
                }}
                viewport={{ once: true, margin: "-50px" }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}
              >
                {/* Content */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15 + 0.2 }}
                  viewport={{ once: true }}
                  className={`space-y-8 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <div className="flex items-center space-x-6 mb-8">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-20 h-20 bg-gradient-to-r from-[#00F0FF] to-[#0099FF] rounded-3xl flex items-center justify-center shadow-lg shadow-[#00F0FF]/25"
                    >
                      <Icon size={32} className="text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-4xl font-bold text-white mb-2">{item.title}</h3>
                      <div className="w-24 h-1 bg-gradient-to-r from-[#00F0FF] to-[#0099FF] rounded-full"></div>
                    </div>
                  </div>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
                    viewport={{ once: true }}
                    className="text-xl text-gray-300 leading-relaxed"
                  >
                    {item.description}
                  </motion.p>
                  
                  {/* Enhanced Decorative Elements */}
                  <motion.div 
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.15 + 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-32 h-1 bg-gradient-to-r from-[#00F0FF] to-[#0099FF] rounded-full"></div>
                    <div className="w-3 h-3 bg-[#00F0FF] rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-[#0099FF] rounded-full animate-pulse"></div>
                  </motion.div>
                </motion.div>
                
                {/* Enhanced Image */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                  viewport={{ once: true }}
                  className={`relative group ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <motion.div 
                    whileHover={{ scale: 1.02, rotateY: 5 }}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-3xl overflow-hidden shadow-2xl"
                  >
                    <img 
                      src={currentImage} 
                      alt={`${item.title} - Why Choose Voxelhaus`} 
                      className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0099FF]/30 via-transparent to-[#00F0FF]/30 transition-opacity duration-500 group-hover:opacity-100"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    
                    {/* Enhanced Overlay Content */}
                    <div className="absolute inset-0 flex items-end">
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.15 + 0.5 }}
                        viewport={{ once: true }}
                        className="p-8 w-full"
                      >
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-[#00F0FF]/20 to-[#0099FF]/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                            <Icon size={20} className="text-[#00F0FF]" />
                          </div>
                          <h4 className="text-white text-2xl font-bold">{item.title}</h4>
                        </div>
                        <p className="text-white/90 text-lg">Professional excellence in every project</p>
                      </motion.div>
                    </div>
                  </motion.div>
                  
                  {/* Enhanced Floating Elements */}
                  <motion.div 
                    animate={{ 
                      y: [0, -10, 0],
                      opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-[#00F0FF] to-[#0099FF] rounded-full blur-xl"
                  ></motion.div>
                  <motion.div 
                    animate={{ 
                      y: [0, 10, 0],
                      opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                    className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-r from-[#0099FF] to-[#00F0FF] rounded-full blur-xl"
                  ></motion.div>
                  
                  {/* Additional Decorative Elements */}
                  <div className="absolute top-1/2 -left-8 w-16 h-16 border-2 border-[#00F0FF]/20 rounded-full"></div>
                  <div className="absolute bottom-1/4 -right-8 w-12 h-12 border-2 border-[#0099FF]/20 rounded-full"></div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseVoxelhaus;
