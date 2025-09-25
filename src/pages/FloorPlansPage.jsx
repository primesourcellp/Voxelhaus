import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Users, Clock, Award } from 'lucide-react';
import FloorPlanServices_2d_3d from '../components/services/FloorPlanServices_2d_3d';

const FloorPlansPage = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-x-hidden w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Background Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#00F0FF]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#0099FF]/10 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative z-10 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Floor Plans{' '}
                <span className="bg-gradient-to-r from-[#00F0FF] to-[#0099FF] bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                Create accurate 2D and 3D floor plans that help buyers visualize properties and make confident purchasing decisions.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-[#00F0FF] mb-2">500+</div>
                <div className="text-gray-300">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#00F0FF] mb-2">4.9/5</div>
                <div className="text-gray-300">Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#00F0FF] mb-2">24hrs</div>
                <div className="text-gray-300">Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#00F0FF] mb-2">100%</div>
                <div className="text-gray-300">Satisfaction</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-[#00F0FF] to-[#0099FF] text-white font-bold rounded-xl flex items-center gap-3 group hover:scale-105 transition-transform duration-200">
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Floor Plans Services Content */}
      <FloorPlanServices_2d_3d />
    </div>
  );
};

export default FloorPlansPage;
