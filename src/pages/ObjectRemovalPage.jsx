import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Users, Clock, Award } from 'lucide-react';
import ObjectRemovalServices from '../components/services/ObjectRemovalServices';

const ObjectRemovalPage = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
     

      {/* Object Removal Services Content */}
      <ObjectRemovalServices />
    </div>
  );
};

export default ObjectRemovalPage;
