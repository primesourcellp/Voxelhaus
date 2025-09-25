import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Users, Clock, Award } from 'lucide-react';
import ColorCastRemovalServices from '../components/services/ColorCastRemovalServices';

const ColorCastRemovalPage = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      

      {/* Color Cast Removal Services Content */}
      <ColorCastRemovalServices />
    </div>
  );
};

export default ColorCastRemovalPage;
