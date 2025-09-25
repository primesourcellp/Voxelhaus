import React from 'react';
import { motion } from 'framer-motion';
import { Zap, TrendingUp, Award, Clock, Shield, Target } from 'lucide-react';

const TheVoxelhausAdvantage = () => {
  const advantages = [
    {
      icon: Zap,
      title: "Faster Sales Cycles",
      description: "High-quality visuals like professional photos and accurate floor plans help buyers make faster, more confident decisions. This leads to shorter time on the market for your properties."
    },
    {
      icon: TrendingUp,
      title: "Higher Online Engagement",
      description: "Eye-catching visuals stop the scroll. Our virtual staging and Photoshop work increase click-through rates and capture the interest of serious buyers, leading to more inquiries and showings."
    },
    {
      icon: Award,
      title: "Premium Market Positioning",
      description: "Professional visuals position your listings as premium properties. This perception often justifies higher asking prices and attracts more qualified buyers."
    },
    {
      icon: Clock,
      title: "Reduced Time Investment",
      description: "Outsource your visual needs to us and focus on what you do best - selling properties. We handle the technical work while you handle the relationships."
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Professional visuals reduce the risk of properties sitting on the market. They also help avoid price reductions by making properties more appealing from the start."
    },
    {
      icon: Target,
      title: "Competitive Edge",
      description: "In a crowded market, exceptional visuals set your listings apart. Our work helps you stand out from competitors and capture more market share."
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-gray-900 relative">
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
            The Voxelhaus{' '}
            <span className="text-[#00F0FF]">Advantage</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Choosing Voxelhaus consultancy means more than just receiving great visuals. It means gaining a strategic advantage in a crowded real estate market.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            
            return (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-[#00F0FF]/30 rounded-2xl p-6 md:p-8 hover:border-[#00F0FF] transition-all duration-500 hover:-translate-y-2 shadow-[0px_0px_15px_2px_rgba(0,240,255,0.15)] hover:shadow-[0px_0px_20px_5px_rgba(0,240,255,0.3)]">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-[#00F0FF] to-[#0099FF] rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={28} className="text-white md:hidden" />
                    <Icon size={32} className="text-white hidden md:block" />
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 group-hover:text-[#00F0FF] transition-colors duration-300">
                    {advantage.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {advantage.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TheVoxelhausAdvantage;
