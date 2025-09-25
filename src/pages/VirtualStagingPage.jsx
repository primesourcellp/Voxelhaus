import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Users, Clock, Award } from 'lucide-react';
import VirtualStagingServices from '../components/services/VirtualStagingServices';

const VirtualStagingPage = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
    
      {/* Virtual Staging Services Content */}
      <VirtualStagingServices />
    </div>
  );
};

export default VirtualStagingPage;
