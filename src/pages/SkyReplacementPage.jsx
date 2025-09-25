import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Users, Clock, Award } from 'lucide-react';
import SkyReplacementServices from '../components/services/SkyReplacementServices';

const SkyReplacementPage = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
  

      {/* Sky Replacement Services Content */}
      <SkyReplacementServices />
    </div>
  );
};

export default SkyReplacementPage;
