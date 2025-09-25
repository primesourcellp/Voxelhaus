import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Users, Clock, Award } from 'lucide-react';
import FloorPlanServices_2d_3d from '../components/services/FloorPlanServices_2d_3d';
import floorPlanImage from '../assets/floor.png';

const FloorPlansPage = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-x-hidden w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">

        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${floorPlanImage})` }}
        ></div>

        {/* Background Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#00F0FF]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#0099FF]/10 rounded-full blur-3xl"></div>

        <div className="container-custom relative z-10 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8 max-w-4xl mx-auto px-4 text-left"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Floor Plans{' '}
                <span className="bg-gradient-to-r from-[#00F0FF] to-[#0099FF] bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Create accurate 2D and 3D floor plans that help buyers visualize properties and make confident purchasing decisions.
              </p>
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
