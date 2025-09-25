import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Users, Clock, Award } from 'lucide-react';
import RealEstateServices from '../components/services/RealEstateServices';

const RealEstatePage = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      

      {/* Real Estate Services Content */}
      <RealEstateServices />
    </div>
  );
};

export default RealEstatePage;
